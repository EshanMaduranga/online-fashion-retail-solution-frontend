import React from 'react'
import NavBarTest from '../../Components/NavBarTest/NavBarTest'
import CartRowTest from './CartRowTest'
import FooterTest from '../../Components/Footer/FooterTest'

const CartTest = () => {
  return (
    <div className="cartTest">
      <NavBarTest/>
      <div className="cartTestCont">
        <CartRowTest/>
        <CartRowTest/>
        <CartRowTest/>
      </div>
      <FooterTest/>
    </div>
  )
}

export default CartTest
