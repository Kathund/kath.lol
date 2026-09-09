<script lang="ts">
  import HorizontalSeparator from './HorizontalSeparator.svelte';
  import LightModeHandler from './LightModeHandler.svelte';
  import Link from './Link.svelte';

  export interface HeaderProps {
    currentPath: string;
  }

  const { currentPath }: HeaderProps = $props();

  const pages = [
    { path: '/', name: 'Home' },
    { path: '/projects/', name: 'Projects' },
    { path: '/time/', name: 'Time' },
    { path: '/pronouns/', name: 'Pronouns' },
    { path: '/about/', name: 'About' },
    { path: '/contact/', name: 'Contact' }
  ];
</script>

<div>
  <div class="w-full flex flex-col lg:flex-row justify-between">
    <div class="flex flex-col justify-between items-center lg:items-start">
      <div class="flex flex-row gap-2 items-baseline">
        <h1 class="text-ctp-pink text-3xl text-bold">Amber</h1>
        <span class="text-ctp-mauve text-sm">or kathund!</span>
        <span class="text-ctp-sapphire text-sm">(she/her)</span>
      </div>
      <p class="text-sm">{new Date().getUTCFullYear() - 2007} year old dev living in Australia!</p>
    </div>
    <div class="text-right flex flex-col justify-between items-center lg:items-end">
      <div class="flex gap-3">
        {#each pages as page (page.path)}
          <Link
            href={page.path}
            className={currentPath === page.path ? 'text-ctp-pink underline' : ''}
            text={page.name}
            external={false} />
        {/each}
      </div>
      <LightModeHandler />
    </div>
  </div>
  <HorizontalSeparator />
</div>
