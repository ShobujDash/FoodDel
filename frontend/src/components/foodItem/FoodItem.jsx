import React ,{useState,useContext} from 'react'
import './FoodItem.css'
import { asstes } from '../../assets/asstes'
import { StoreContext } from '../../context/StoreContext';

function FoodItem({ id, name, price, description, image }) {
  
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, setCartItems, addToCart, removeFromCart ,url} =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={url+"/images/"+image} alt="" className="food-item-image" />
        <div>
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={asstes.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={()=>removeFromCart(id)}
                src={asstes.remove_red_minus}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={asstes.add_green_plus}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={asstes.Star_Rating} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem
