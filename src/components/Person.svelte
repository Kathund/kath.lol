<script lang="ts">
  import { randomCase } from '../lib/misc';
  import Link from './Link.svelte';

  let { name, github, codeberg, site, note, shouldRandomCase }: PersonProps = $props();
  if (github !== null) github = `https://github.com/${github ?? name}`;

  function randomizeName() {
    name = shouldRandomCase === true ? randomCase(name) : name;
  }

  randomizeName();
</script>

<div on:mouseover={randomizeName}>
  <div class="flex flex-row items-baseline gap-2">
    <Link href={site ?? github} text="- {name}" />
    {#if note !== undefined}
      <p class="text-xs text-ctp-text/30">{note}</p>
    {/if}
  </div>
  <div class="pl-8 text-sm text-ctp-text/60 flex flex-col">
    {#if site}
      <Link href={site} text="- Site" />
    {/if}
    {#if codeberg}
      <Link href={`https://codeberg.org/${codeberg}`} text="- Codeberg" />
    {/if}
    {#if github}
      <Link href={github} text="- GitHub" />
    {/if}
  </div>
</div>
