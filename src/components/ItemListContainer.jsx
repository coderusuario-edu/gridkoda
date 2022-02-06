import React from 'react';
import tree1 from '../imgs/tree1.png'


const ItemListContainer = ({greeting}) => {
  return (<div>
      <h2>{greeting}</h2>
      <h3>tendida por sus propios dueños</h3>
      <div className="row mt-3">
          <div className="col-md-2 p-3">
              <div className="card bg-bk mx-3">
                <img className="card-img-top p-3"src={tree1} alt=''/>
                <div className="card-body">
                  <h4 className="card-title">Producto</h4>
                  <p className="card-text">Precio</p>
                </div>
              </div>
          </div>
      </div>
  </div>);
};

export default ItemListContainer;
