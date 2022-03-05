import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {products &&
                products.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        nombre={item.title}
                        descripcion={item.description}
                        precio={item.price}
                        imagen={item.image}
                    />
                ))}
        </div>
    );
};

export default ItemList;
