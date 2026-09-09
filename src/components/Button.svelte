<script lang="ts">
  import type { ButtonProps } from '../lib/misc';
  import Tooltip from './Tooltip.svelte';

  let { alt, src, href, id }: ButtonProps = $props();
  if (id === undefined) id = 'customButton';
</script>

<Tooltip title={alt}>
  <a {href} class="h-[31px] w-[88px]" target="_blank">
    <img {src} {alt} {id} width="88" height="31" class="h-[31px] w-[88px]" />
  </a>
</Tooltip>
