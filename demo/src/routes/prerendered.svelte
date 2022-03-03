<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { batteryStore } from "svelte-battery";
</script>

<h1>Svelte Battery PWA API</h1>

<ul>
  <li>State: {$batteryStore.state}</li>
  <li>isCharging: {$batteryStore.isCharging}</li>
  <li>chargeCompleteInSec: {$batteryStore.chargeCompleteInSec}</li>
  <li>dischargeCompleteInSec: {$batteryStore.dischargeCompleteInSec}</li>
  <li>level: {$batteryStore.level}</li>
</ul>

<a href="/derived" aria-label="Link to derived store example"
  >Example for a derived store (subscription to specific store values)</a
>
