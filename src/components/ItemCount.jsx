import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {

    const [cantidad, setCantidad] = useState(initial);
    const [queda, setQueda] = useState(stock - 1);

    const addItem = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
            setQueda(queda - 1);
        }
    }

    const substractItem = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            setQueda(queda + 1)
        }

    }
    return (
        <>
            <div className="btn-group" role="group" >
                <button type="button" className="btn btn-bk" onClick={() => { substractItem() }}>-</button>
                <span className="btn btn-outline-bk"> {cantidad} </span>
                <button type="button" className={cantidad === stock ? 'btn btn-bk disabled' : 'btn btn-bk'} onClick={() => { addItem() }}>+</button>
            </div>
            {
            queda > 0 ?
                (<small className="small">Quedan {queda} productos</small>) 
                :
                (<small className="small">Sin stock</small>) 
            }
            <button className="btn btn-outline-bk mt-1"> <small> Agregar al carrito</small></button>
        </>
    );
}

export default ItemCount;