import { readable } from 'svelte/store';
import { getInitialBatteryStore, subscribeToBatteryInfo } from './model';

export const batteryStore = readable(getInitialBatteryStore(), subscribeToBatteryInfo);

