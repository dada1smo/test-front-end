import "../styles/sidebar.scss";
import LinkMenu from "./link-menu";
import Typography from "./typography";
import { motion } from "framer-motion";

// Logo
import sidebarLogo from "../img/logo-gran-cursos.svg";

// Icons
import {
  iconHome,
  iconArrowDown,
  iconArrowRight,
  iconEcommerce,
  iconEmail,
  iconChat,
  iconTodo,
  iconCalendar,
  iconGrid,
  iconColors,
  iconCard,
  iconComponents,
  iconTable,
  iconFormElements,
  iconFormLayouts,
  iconFormValidation,
  iconFormWizard,
} from "../helpers/icons.js";

export default function Sidebar(props) {
  // function sendFalse() {
  //   props.handleCloseNav(false);
  // }

  return (
    <motion.aside
      className="sidebar"
      initial={{ x: "-100%" }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "-100%",
      }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
    >
      <section className="sidebarLogo">
        <img src={sidebarLogo} alt="Logo Gran Cursos" />
      </section>
      <section className="dashboardSelect">
        {/* <button
          aria-label="Abrir menu de navegação"
          onClick={() => sendFalse()}
        >
          Menu
        </button> */}
        <LinkMenu
          whereTo="/"
          iconLeft={iconHome}
          iconLeftAlt=""
          label="Dashboard"
          variant="selectedArea"
          hasIconRight
          iconRight={iconArrowDown}
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconEcommerce}
          iconLeftAlt=""
          label="eCommerce"
        />
      </section>
      <section className="apps">
        <Typography tag="h6">Apps</Typography>
        <LinkMenu
          whereTo="/"
          iconLeft={iconEmail}
          iconLeftAlt=""
          label="Email"
        />
        <LinkMenu whereTo="/" iconLeft={iconChat} iconLeftAlt="" label="Chat" />
        <LinkMenu whereTo="/" iconLeft={iconTodo} iconLeftAlt="" label="Todo" />
        <LinkMenu
          whereTo="/"
          iconLeft={iconCalendar}
          iconLeftAlt=""
          label="Calendar"
        />
      </section>
      <section className="uiElements">
        <Typography tag="h6">UI Elements</Typography>
        <LinkMenu
          whereTo="/"
          iconLeft={iconGrid}
          iconLeftAlt=""
          label="Grid"
          hasIconRight
          iconRight={iconArrowRight}
          iconRightAlt=""
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconColors}
          iconLeftAlt=""
          label="Colors"
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconCard}
          iconLeftAlt=""
          label="Card"
          hasIconRight
          iconRight={iconArrowRight}
          iconRightAlt=""
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconTable}
          iconLeftAlt=""
          label="Table"
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconComponents}
          iconLeftAlt=""
          label="Components"
          hasIconRight
          iconRight={iconArrowRight}
          iconRightAlt=""
        />
      </section>
      <section className="forms">
        <Typography tag="h6">Forms</Typography>
        <LinkMenu
          whereTo="/"
          iconLeft={iconFormElements}
          iconLeftAlt=""
          label="Form Elements"
          hasIconRight
          iconRight={iconArrowRight}
          iconRightAlt=""
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconFormLayouts}
          iconLeftAlt=""
          label="Form Layouts"
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconFormWizard}
          iconLeftAlt=""
          label="Form Wizard"
        />
        <LinkMenu
          whereTo="/"
          iconLeft={iconFormValidation}
          iconLeftAlt=""
          label="Form Validation"
        />
      </section>
    </motion.aside>
  );
}
