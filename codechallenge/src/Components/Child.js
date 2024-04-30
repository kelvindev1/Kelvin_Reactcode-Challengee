import React from "react";

function Child({ props }) {
  return props.map(({ id, name, price, image, quantity }) => (
    <div key={id}>
      <ul>
        <h4>Name = {name}</h4>
        <p>Price = ${price}</p>
        <img src={image} />
        <p>Quantity = {quantity}</p>
      </ul>
    </div>
  ));
}

export default Child;
