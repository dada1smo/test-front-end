import "../styles/button.scss";

export function Button({ color, shape, onClick, label, icon, iconAlt }) {
  return (
    <button className={`btn ${[color]} ${[shape]}`} onClick={onClick}>
      {icon && <img src={icon} alt={iconAlt} />}
      {label && <span>{label}</span>}
    </button>
  );
}
