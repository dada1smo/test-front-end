import "../styles/button.scss";

export function Button({ color, shape, onClick, label, icon, iconAlt }) {
  return (
    <button className={`btn ${[color]} ${[shape]}`} onClick={onClick}>
      {label && <span>{label}</span>}
      {icon && <img src={icon} alt={iconAlt} />}
    </button>
  );
}
