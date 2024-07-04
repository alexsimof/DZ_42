

export function Button({ text, disabled, className, onClick }) {

  return (
    <button disabled={disabled} onClick={onClick} className={className}>{text}</button>
  );
}