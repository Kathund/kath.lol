<script lang="ts">
  import { PronounsLegend, type PronounsListComponentDataItem } from '../../lib/pronouns';
  import PronounIcon from './PronounIcon.svelte';
  import { twMerge } from 'tailwind-merge';

  export interface FullPronounsProps extends PronounsListComponentDataItem {
    right: boolean;
  }

  const { title, key, right }: FullPronounsProps = $props();
</script>

<div>
  <p class={twMerge(PronounsLegend[key].style, 'flex gap-1', right ? 'flex-row-reverse' : 'flex-row')}>
    <PronounIcon {key} />
    {title}
  </p>
</div>
