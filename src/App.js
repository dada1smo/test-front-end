import "normalize.css";
import "./styles/global.scss";
import "./styles/typography.scss";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import { useOpenNav } from "./hooks/use-open-nav";
import useWindowSize from "./hooks/use-window-size";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [isNavOpen, openNav] = useOpenNav(false);
  const size = useWindowSize();
  const mobileDevice = size.width < 768;

  function handleCloseNav() {
    openNav();
  }

  return (
    <div className="dashboard">
      <AnimatePresence exitBeforeEnter initial={false}>
        {(!mobileDevice || isNavOpen) && (
          <Sidebar handleCloseNav={handleCloseNav} />
        )}
      </AnimatePresence>
      <main>
        {isNavOpen && (
          <AnimatePresence>
            <motion.button
              className="backdrop"
              onClick={handleCloseNav}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            ></motion.button>
          </AnimatePresence>
        )}
        <Topbar handleCloseNav={handleCloseNav} />
      </main>
    </div>
  );
}

export default App;
