<script lang="ts">
  import { batteryStore } from "svelte-battery-status";
  import { derived } from "svelte/store";

  const level = derived(batteryStore, ($store) => $store.level);
</script>

<h1>Svelte Battery PWA API</h1>

<h2>This demo shows a dervied store usage, which only reads the <strong>level</strong></h2>
<ul>
  <li>level: {$level}</li>
</ul>
