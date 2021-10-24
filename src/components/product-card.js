import productImg from "../img/product-img.png";
import Typography from "./typography";
import "../styles/product-card.scss";
import {
  iconFavorite,
  iconHeart,
  iconShipping,
  iconShoppingBag,
} from "../helpers/icons";
import { Button } from "../components/button";

export default function ProductCard(props) {
  const products = props.products;
  const listProducts = products.map((product) => (
    <div className="productCard" key={product.id}>
      <div className="productDetails">
        <img src={productImg} alt="" />
        <div className="productBody">
          <Typography tag="h3">{product.name}</Typography>
          <p className="productManufacturer">
            <span>By</span> {product.manufacturer}
          </p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="productAside">
        <div className="productRating">
          <div>
            {product.rating}
            <img src={iconFavorite} alt="" />
          </div>
        </div>
        <Typography tag="h4">{product.price}</Typography>
        <div className="productShipping">
          <img src={iconShipping} alt="" />
          <p>{product.shipping}</p>
        </div>
        <div className="productActions">
          <Button
            color="btnPrimaryLight"
            shape="btnFull"
            label="Wishlist"
            icon={iconHeart}
          />
          <Button
            color="btnPrimaryBlue"
            shape="btnFull"
            label="Add to cart"
            icon={iconShoppingBag}
          />
        </div>
      </div>
    </div>
  ));
  return <div>{listProducts}</div>;
}
