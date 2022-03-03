/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

declare global {
	interface Navigator {
		getBattery: () => Promise<BatteryManger>;
	}
}

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery
export interface BatteryManger {
	charging: boolean;
	chargingTime: number;
	dischargingTime: number;
	level: number;
	onchargingchange: number | null;
	onchargingtimechange: number | null;
	ondischargingtimechange: number | null;
	onlevelchange: number | null;
	addEventListener: (event: string, cb: () => void) => void;
	removeEventListener: (event: string, cb: () => void) => void;
}
