import "../styles/filters.scss";
import Typography from "./typography";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import categoryData from "../data/category.json";
import brandData from "../data/brand.json";
import { iconFavorite, iconFavoriteFilled } from "../helpers/icons";

function CheckboxList(props) {
  const items = props.items;
  const listItems = items.map((item) => (
    <div className="checkboxContainer" key={item.id}>
      <input type="checkbox" id={item.product} name={item.name} />
      <label for={item.product}>
        <span>{item.product}</span>
        <span>{item.quantity}</span>
      </label>
      <div className="checkboxSquare"></div>
    </div>
  ));
  return <div>{listItems}</div>;
}

export default function Filters() {
  return (
    <div className="filters">
      <Typography tag="h2">Multi Range</Typography>
      <div class="multiRange">
        <div className="radioContainer">
          <input type="radio" id="tier1" name="value" value="$10" />
          <label for="tier1">$10</label>
          <div className="radioCircle"></div>
        </div>
        <div className="radioContainer">
          <input type="radio" id="tier2" name="value" value="$10-$100" />
          <label for="tier2">$10-$100</label>
          <div className="radioCircle"></div>
        </div>
        <div className="radioContainer">
          <input type="radio" id="tier3" name="value" value="$100-$500" />
          <label for="tier3">$100-$500</label>
          <div className="radioCircle"></div>
        </div>
        <div className="radioContainer">
          <input type="radio" id="tier4" name="value" value="$500" />
          <label for="tier4">$500</label>
          <div className="radioCircle"></div>
        </div>
        <div className="radioContainer">
          <input type="radio" id="tier5" name="value" value="all" />
          <label for="tier5">All</label>
          <div className="radioCircle"></div>
        </div>
      </div>
      <div className="horizontalDivider"></div>
      <div className="sliderTitle">
        <Typography tag="h2">Slider</Typography>
        <Typography tag="h2">1.99 - 4098</Typography>
      </div>
      <div className="slider">
        <Range min={1.99} max={5000} defaultValue={[1.99, 4098]} />
      </div>
      <div className="horizontalDivider"></div>
      <Typography tag="h2">Category</Typography>
      <div className="category">
        <CheckboxList items={categoryData} />
      </div>
      <div className="horizontalDivider"></div>
      <Typography tag="h2">Brand</Typography>
      <div className="category">
        <CheckboxList items={brandData} />
      </div>
      <div className="horizontalDivider"></div>
      <Typography tag="h2">Rating</Typography>
      <div className="rating">
        <div className="ratingContainer">
          <input type="radio" id="5stars" name="rating" value="5stars" />
          <label for="5stars">
            <div className="starRating">
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <span>& Up</span>
            </div>
            <span>8500</span>
          </label>
          <div className="starSelected"></div>
        </div>
        <div className="ratingContainer">
          <input type="radio" id="4stars" name="rating" value="4stars" />
          <label for="4stars">
            <div className="starRating">
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavorite} alt="" />
              <span>& Up</span>
            </div>
            <span>3250</span>
          </label>
          <div className="starSelected"></div>
        </div>
        <div className="ratingContainer">
          <input type="radio" id="3stars" name="rating" value="3stars" />
          <label for="3stars">
            <div className="starRating">
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavoriteFilled} alt="" />
              <img src={iconFavorite} alt="" />
              <img src={iconFavorite} alt="" />
              <span>& Up</span>
            </div>
            <span>1120</span>
          </label>
          <div className="starSelected"></div>
        </div>
      </div>
    </div>
  );
}
