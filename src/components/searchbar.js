import { iconSearch } from "../helpers/icons";
import "../styles/searchbar.scss";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search here"
      />
      <img src={iconSearch} alt="" />
    </div>
  );
}
