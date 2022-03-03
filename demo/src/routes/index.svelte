<script lang="ts">
  import { batteryStore } from "svelte-battery-status";
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

<a href="/prerendered" aria-label="Link to prerendered store example"
  >Example to show usage w/ prerendered page (content is the same, just a POC)</a
>
