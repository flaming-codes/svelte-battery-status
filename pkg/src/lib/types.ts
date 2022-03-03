export type BatteryStore = {
    state: "init" | "not-supported" | "subscribed" | "unsubscribed" | "error",
    /** Flag if device is charging. Desktops might be shown as charging all the time. */
    isCharging?: boolean;
    /** How long it takes for the device to finish charging to 1 (100%). */
    chargeCompleteInSec?: number;
    /** How many seconds remaing on the current charge. */
    dischargeCompleteInSec?: number;
    /** Battery level from 0 to 1, representing the current charge level. */
    level?: number;
}
