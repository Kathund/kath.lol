import { PeopleButtonsByAlt } from './about';

export function setTheme(isLight: boolean) {
  document.documentElement.classList.toggle('mocha', !isLight);
  document.documentElement.classList.toggle('latte', isLight);
  localStorage.setItem('light', String(isLight));

  document.querySelectorAll<HTMLImageElement>('img#customPersonButton').forEach((button) => {
    const buttonData = PeopleButtonsByAlt.get(button.alt);
    if (!buttonData) return;
    if (buttonData.src === undefined) buttonData.src = `/button/people/${buttonData.alt}.png`;
    buttonData.light ??= buttonData.src;
    buttonData.dark ??= buttonData.src;
    button.src = isLight ? buttonData.light : buttonData.dark;
  });
}
