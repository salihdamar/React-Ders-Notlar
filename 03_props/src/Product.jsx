import React from 'react'

function Product(props) {
    // const {productName, price}=props;
  return (
    <div>
        <div>Ürün Bilgileri</div>
        <div>İsim: {props.productName}</div>
        <div>Fiyat: {props.price}</div>
        </div>
  )
}

export default Product