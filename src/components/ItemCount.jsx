import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {

    const [maximo, setMaximo] = useState(stock);
    const [cantidad, setCantidad] = useState(initial);

    const onAdd = () => {
        setCantidad(cantidad + 1);
        setMaximo(maximo - 1);
    }

    const onSubstract = () => {
        setCantidad(cantidad - 1);
        setMaximo(stock);
    }
    return (
        <div className="btn-group" role="group" >
            <button type="button" className="btn btn-bk" onClick={() => { if (cantidad > 1) { onSubstract() } }}>-</button>
            <span className="btn btn-outline-bk"> {cantidad} </span>
            <button type="button" className="btn btn-bk" onClick={() => { if (cantidad < stock) { onAdd() } }}>+</button>
        </div>
    );
}

export default ItemCount;