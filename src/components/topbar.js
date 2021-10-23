import "../styles/topbar.scss";
import profileImg from "../img/profile.png";

// Icons
import {
  iconEmail,
  iconChat,
  iconTodo,
  iconCalendar,
  iconFavorite,
  iconNotifications,
  iconSearch,
  iconMenu,
} from "../helpers/icons.js";

export default function Topbar(props) {
  function sendFalse() {
    props.handleCloseNav(false);
  }

  return (
    <header className="topbar">
      <div className="topbarActions">
        <button
          className="mobileMenuButton"
          aria-label="Abrir menu de navegação"
          onClick={() => sendFalse()}
        >
          <img src={iconMenu} alt="" />
        </button>
        <button>
          <img src={iconTodo} alt="" />
        </button>
        <button>
          <img src={iconChat} alt="" />
        </button>
        <button>
          <img src={iconEmail} alt="" />
        </button>
        <button>
          <img src={iconCalendar} alt="" />
        </button>
        <button className="favorite">
          <img src={iconFavorite} alt="" />
        </button>
      </div>
      <div className="topbarUser">
        <button className="languageSelect">English</button>
        <button>
          <img src={iconNotifications} alt="" />
        </button>
        <button>
          <img src={iconSearch} alt="" />
        </button>
        <a href="/" className="userButton">
          <div className="userInfo">
            <div className="userName">Jane Doe</div>
            <div className="userActivityStatus">Available</div>
          </div>
          <img src={profileImg} alt="" />
        </a>
      </div>
    </header>
  );
}
