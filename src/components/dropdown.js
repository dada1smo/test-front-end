import "../styles/dropdown.scss";
import { useDropdown } from "../hooks/use-dropdown";
import { motion, AnimatePresence } from "framer-motion";
import { iconArrowDown } from "../helpers/icons";

export default function Dropdown(props) {
  const [isDropdown, openDropdown] = useDropdown(false);
  const options = props.options;
  const listOptions = options.map((option) => (
    <button key={option.id} onClick={openDropdown}>
      {option.name}
    </button>
  ));
  return (
    <div className="dropdown">
      <button className="dropdownSelect" onClick={openDropdown}>
        {props.selectName}
        <img
          src={iconArrowDown}
          alt=""
          className={isDropdown ? "arrowUp" : ""}
        />
      </button>
      <AnimatePresence>
        {isDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            className="dropdownOptions"
          >
            {listOptions}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
