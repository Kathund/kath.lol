import type { ButtonProps } from './misc';

export interface Thing {
  href: string;
  text: string;
}

export const ThingsIUse: Thing[] = [
  { href: 'https://astro.build', text: 'Astro' },
  { href: 'https://bun.sh', text: 'Bun' },
  { href: 'https://cloudflare.com', text: 'Cloudflare' },
  { href: 'https://discord.js.org', text: 'Discord.js' },
  { href: 'https://ejs.co', text: 'EJS' },
  { href: 'https://nodejs.org/en', text: 'Node.js' },
  { href: 'https://react.dev', text: 'React' },
  { href: 'https://sass-lang.com', text: 'SASS' },
  { href: 'https://svelte.dev', text: 'Svelte' },
  { href: 'https://tailwindcss.com', text: 'TailwindCSS' }
];

export interface PersonProps {
  name: string;
  github?: string | null;
  codeberg?: string;
  site?: string;
  note?: string;
  shouldRandomCase?: boolean;
}

export const CoolPeople: PersonProps[] = [
  { name: 'aidn5', github: 'aidn3' },
  { name: 'bloxigus', shouldRandomCase: true },
  { name: 'DuckySoLucky', site: 'https://duckysolucky.is-a.dev' },
  { name: 'Empa', github: 'ItsEmpa', note: 'emma' },
  { name: 'juna', github: 'j10a1n15', note: 'Tuba 🎺', shouldRandomCase: true },
  { name: 'MadelynWith5Ns', github: 'madelynwith5ns', site: 'https://mw5ns.com', note: 'woof' },
  { name: 'Mat', github: 'mat-1', site: 'https://matdoes.dev' },
  { name: 'Meowora', site: 'https://mona.gay' },
  { name: 'RagingEnby', site: 'https://ragingenby.dev' },
  { name: 'saadndm' },
  { name: 'SoopyBoo32', site: 'https://soopy.dev', note: 'SoopyV3' },
  { name: 'ThatGravyBoat', site: 'https://thatgravyboat.tech' },
  { name: 'Zickles', note: '🐀' },
  { name: 'DarthGigi', site: 'https://mrgigi.me' },
  { name: 'Wyvest', site: 'https://wyvest.net' },
  { name: 'AzureAaron', site: 'https://azureaaron.net' },
  { name: 'WarpWing', site: 'https://blog.warpwing.cloud' },
  { name: 'Shine', site: 'https://awruff.dog', github: 'awruff', codeberg: 'awruff' },
  { name: 'nea', site: 'https://nea.moe', github: 'lineargraph' },
  { name: 'amy', site: 'https://amy.rip', github: null }
];

export interface PersonButtonProps extends Omit<ButtonProps, 'src'> {
  src?: string;
  light?: string;
  dark?: string;
}

export const PeopleButtons: PersonButtonProps[] = [
  {
    alt: 'Amber',
    src: '/button/people/Amber_dark.png',
    href: 'https://kathund.dev',
    light: '/button/people/Amber_light.png',
    dark: '/button/people/Amber_dark.png'
  },
  { alt: 'mat', href: 'https://matdoes.dev' },
  { alt: 'Shiny', href: 'https://awruff.dog' },
  { alt: 'nea', href: 'https://nea.moe' },
  { alt: 'amy', href: 'https://amy.rip' }
];
export const PeopleButtonsByAlt = new Map(PeopleButtons.map((person) => [person.alt, person]));

export const Buttons: PersonButtonProps[] = [
  { alt: 'I use NixOS by the way!', src: '/button/nix_dark.webp', href: 'https://nixos.org' },
  { alt: 'Powered By NixOS', src: '/button/powered_by_nixos.gif', href: 'https://nixos.org' },
  { alt: 'Built With Nix!', src: '/button/built_with_nix.gif', href: 'https://nixos.org' },
  { alt: 'Teted on Firefox', src: '/button/tested_on_firefox.gif', href: 'https://firefox.com' },
  { alt: 'Build With Astro', src: '/button/build_with_astro.png', href: 'https://astro.build' },
  { alt: 'Build With Svelte', src: '/button/build_with_svelte.gif', href: 'https://svelte.dev' },
  { alt: 'neovim', src: '/button/neovim.gif', href: 'https://neovim.io' },
  { alt: 'Anything But Chrome', src: '/button/anything_but_chrome.gif', href: 'https://firefox.com' },
  { alt: 'I like pooters', src: '/button/i_like_computer.png' },
  { alt: 'Internet Privacy', src: '/button/internet_privacy.gif', href: 'https://eff.org' },
  { alt: 'Internet Archive', src: '/button/internet-archive.png', href: 'https://archive.org/' },
  { alt: 'Privacy Now!', src: '/button/privacy_now.gif', href: '/kathund-pgp-public.pgp' },
  { alt: 'qBittorrent', src: '/button/qbittorrent.png', href: 'https://www.qbittorrent.org/' },
  { alt: 'Seed Torrents! Please', src: '/button/seed-torrents.gif', href: 'https://www.qbittorrent.org/' },
  { alt: 'Best Viewed On Desktop!', src: '/button/best-on-desktop.gif' },
  { alt: "Don't feed AI", src: '/button/dont_feed_ai.gif' },
  { alt: 'AI is theft', src: '/button/ai_is_theft.webp' },
  { alt: 'No AI', src: '/button/anti_ai.gif' },
  {
    alt: 'Pride Progress',
    src: '/button/progress_button.png',
    href: 'https://en.pronouns.page/terminology?filter=progress'
  },
  {
    alt: 'Pansexual',
    src: '/button/pansexual_button.png',
    href: 'https://en.pronouns.page/terminology?filter=pansexual'
  },
  {
    alt: 'Transgender',
    src: '/button/transgender_button.png',
    href: 'https://en.pronouns.page/terminology?filter=transgender'
  }
];
