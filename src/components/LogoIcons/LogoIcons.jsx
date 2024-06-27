

export function LogoIcons({ text, className }) {

  return (
    <li className={className}>
      <img src={text} alt="sponsor-logo" />
    </li>
  );
}