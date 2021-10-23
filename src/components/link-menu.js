import "../styles/link-menu.scss";

export default function LinkMenu({
  whereTo,
  variant,
  iconLeft,
  iconLeftAlt,
  label,
  hasIconRight,
  iconRight,
  iconRightAlt,
}) {
  return (
    <div className={`linkMenu ${variant}`}>
      <a href={whereTo}>
        <img src={iconLeft} alt={iconLeftAlt} />
        <span>{label}</span>
      </a>
      {hasIconRight && (
        <button>
          <img src={iconRight} alt={iconRightAlt} />
        </button>
      )}
    </div>
  );
}
