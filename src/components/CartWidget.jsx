import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (<div className='carty'>
    <span className='fontAwesomeCart'><FontAwesomeIcon icon={faShoppingCart} /></span>
    <span className='superUp'>0</span>
  </div>);
};

export default CartWidget;
