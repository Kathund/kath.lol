export function randomCase(str: string): string {
  return str.replace(/[a-z]/gi, (char) => (Math.random() < 0.5 ? char.toLowerCase() : char.toUpperCase()));
}

export interface ButtonProps {
  alt: string;
  src: string;
  href?: string;
  id?: string;
}
