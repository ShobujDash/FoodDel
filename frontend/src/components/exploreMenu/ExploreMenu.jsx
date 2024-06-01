import React from "react";
import { menu_list } from "../../assets/asstes";
import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes . Our
        mission is to satisty your craving and elevate your dining experience
        .Our delicious meal at a time
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.nemu_name ? "All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
