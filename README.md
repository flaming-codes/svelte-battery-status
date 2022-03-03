# Svelte Battery PWA API Store

This library provides a readable Svelte store to use a PWA's access to the [`Battery Status API`](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API), available on the navigator. It allows you to read charging levels as well as certain charging thresholds.

## Install

```text
npm i -D svelte-battery-status
```

## Usage

### Basic

This library provides a simple readable store that automatically subscribes to events of `BatteryManager`, an API of the `navigator` to access battery charge information.

```svelte
<script lang="ts">
  import { batteryStore } from 'svelte-battery-status';
</script>

<ul>
  <li>State: {$batteryStore.state}</li>
  <li>isCharging: {$batteryStore.isCharging}</li>
  <li>chargeCompleteInSec: {$batteryStore.chargeCompleteInSec}</li>
  <li>dischargeCompleteInSec: {$batteryStore.dischargeCompleteInSec}</li>
  <li>level: {$batteryStore.level}</li>
</ul>
```

### Derived

To subscribe to changes for only a specific selection of values, simply create a `derived` store.

```svelte
<script lang="ts">
  import { batteryStore } from 'svelte-battery-status';
  import { derived } from 'svelte/store';

  const level = derived(batteryStore, ($store) => $store.level);
</script>

level: {$level}
```

## API

The following values are returned from the store.

| Key | Value | Description |
| --- | --- | --- |
| **state** | `init`, `not-supported`, `subscribed`, `unsubscribed`, `error` | `init` if not yet loaded, `not-supported` if browser doesn't support the `BatteryManager`, `subscribed` if the store is listening to changes, `unsubscribed` if the API is supported, but not listening, `error` in case of an unknown error throw |
| **isCharging** | `boolean` / `undefined` | Flag if the device is charging (please note that a stationary device like a desktop is always charging) |
| **chargeCompleteInSec** | `number` / `undefined` | Amount of seconds until device is fully charged |
| **dischargeCompleteInSec** | `number` / `undefined` | Amount of seconds until device is empty |
| **level** | `number` / `undefined` | Value between 0 and 1, indicating the percent of current charge |
