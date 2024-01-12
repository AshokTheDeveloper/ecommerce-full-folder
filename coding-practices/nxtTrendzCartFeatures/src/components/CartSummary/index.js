// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const numberOfItemsInCart = cartList.length
      let total = 0

      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="summary-heading">
              Order Total: <span className="total">{total}/-</span>
            </h1>
            <p className="summary-quantity">
              {numberOfItemsInCart} items in cart
            </p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
