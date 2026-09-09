<script lang="ts">
  import { setTheme } from '../lib/themes';
  import { onMount } from 'svelte';

  let enabled = false;

  function theme(isLight: boolean) {
    setTheme(isLight);
    enabled = isLight;
  }

  function toggle() {
    theme(!enabled);
  }

  onMount(() => {
    enabled = document.documentElement.classList.contains('latte');
  });
</script>

<button class="text-ctp-sapphire hover:cursor-pointer" onclick={toggle}>
  Toggle {enabled ? 'Dark' : 'Light'} Mode
</button>
