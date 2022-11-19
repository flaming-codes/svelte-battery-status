import { browser } from "$app/environment";
import type { Subscriber } from "svelte/store";
import type { BatteryManger } from "../app";
import type { BatteryStore } from "./types";

/**
 * Just a simple getter for an empty BatteryStore.
 * @returns Initial battery store.
 */
export function getInitialBatteryStore(): BatteryStore {
    return {
        state: "init"
    }
}

/**
 * Subscribe to changes from the BatteryManager, available
 * in modern browsers to receive data regarding charge
 * as well as charging thresholds.
 * 
 * @param setter    Function to set the state object.
 * @returns         Cleanup function.
 */
export function subscribeToBatteryInfo(setter: Subscriber<BatteryStore>) {
    // Noop on SSR.
    if (!browser) {
        return;
    }

    if (!("getBattery" in navigator)) {
        setter({ state: "not-supported" });
        return;
    }


    try {
        let battery: BatteryManger;
        let updateState: () => void;

        navigator.getBattery().then((sentinel) => {
            battery = sentinel;
            updateState = () => {
                setter({
                    state: "subscribed",
                    isCharging: battery.charging,
                    chargeCompleteInSec: battery.chargingTime,
                    dischargeCompleteInSec: battery.dischargingTime,
                    level: battery.level
                });
            };

            // Once on init here.
            updateState();

            battery.addEventListener("chargingchange", updateState);
            battery.addEventListener("onchargingtimechange", updateState);
            battery.addEventListener("onlevelchange", updateState);
        });

        // Cleanup function for store.
        return () => {
            if (battery && updateState) {
                battery.removeEventListener("chargingchange", updateState);
                battery.removeEventListener("onchargingtimechange", updateState);
                battery.removeEventListener("onlevelchange", updateState);
            }
        }
    } catch {
        setter({ state: "error" });
    }
}
