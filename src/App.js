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
import Breadcrumbs from "./components/breadcrumbs";
import { Button } from "./components/button";
import { iconMenu, iconSettings, iconTable } from "./helpers/icons";
import Typography from "./components/typography";
import Filters from "./components/filters";
import Dropdown from "./components/dropdown";

function App() {
  const [isNavOpen, openNav] = useOpenNav(false);
  const size = useWindowSize();
  const mobileDevice = size.width < 768;

  function handleCloseNav() {
    openNav();
  }

  const viewOptions = [
    {
      id: 1,
      name: "List",
    },
    {
      id: 2,
      name: "Grid",
    },
  ];

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
        <div className="dashboardBreadcrumbs">
          <Breadcrumbs />
          <Button color="btnPrimaryDark" shape="btnRound" icon={iconSettings} />
        </div>
        <div className="dashboardGrid">
          <div className="dashboardFilter">
            <Typography tag="h2">Filters</Typography>
            <div className="filtersCard">
              <Filters />
            </div>
          </div>
          <div className="dashboardSearch">
            <div className="dashboardResults">
              <Typography tag="h2">7,618 results found in 5ms</Typography>
              <div className="viewOptions">
                <Dropdown options={viewOptions} selectName="Default" />
                <Button
                  color="btnPrimaryLight"
                  shape="btnSquare"
                  icon={iconTable}
                />
                <Button
                  color="btnPrimaryLight"
                  shape="btnSquare"
                  icon={iconMenu}
                />
              </div>
            </div>
            <div className="productCard"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
