<script lang="ts">
  import type { PersonButtonProps } from '../lib/about';
  import Button from './Button.svelte';

  let { alt, src, href }: PersonButtonProps = $props();
  if (src === undefined) src = `/button/people/${alt}.png`;
</script>

<Button {alt} {src} {href} id="customPersonButton" />
