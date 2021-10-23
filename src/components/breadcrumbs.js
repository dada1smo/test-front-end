import { iconChevronsRight, iconHome } from "../helpers/icons";
import Typography from "./typography";
import "../styles/breadcrumbs.scss";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs">
      <Typography tag="h1">Card Actions</Typography>
      <div className="verticalDivider"></div>
      <div className="breadcrumbsTrail">
        <a href="/">
          <img src={iconHome} alt="" />
        </a>
        <img src={iconChevronsRight} alt="" className="chevronsRight" />
        <a href="/">eCommerce</a>
        <img src={iconChevronsRight} alt="" className="chevronsRight" />
        <a href="/">Electronics</a>
      </div>
    </div>
  );
}
