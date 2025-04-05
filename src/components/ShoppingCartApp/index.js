import {useState, useEffect} from 'react'
import './index.css'

const PRODUCTS = [
  {id: 1, name: 'Laptop', price: 500},
  {id: 2, name: 'Smartphone', price: 300},
  {id: 3, name: 'Headphones', price: 100},
  {id: 4, name: 'Smartwatch', price: 150},
]

const FREE_GIFT = {id: 99, name: 'Wireless Mouse', price: 0}

const THRESHOLD = 1000

const ShoppingCartApp = () => {
  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    )
    setSubtotal(newSubtotal)
    const hasFreeGift = cart.some(item => item.id === FREE_GIFT.id)
    if (newSubtotal >= THRESHOLD && !hasFreeGift) {
      setCart(prevCart => [...prevCart, {...FREE_GIFT, quantity: 1}])
    } else if (newSubtotal < THRESHOLD && hasFreeGift) {
      setCart(prevCart => prevCart.filter(item => item.id !== FREE_GIFT.id))
    }
  }, [cart])

  const addToCart = products => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === products.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === products.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        )
      }
      return [...prevCart, {...products, quantity: 1}]
    })
  }

  const updateQuantity = (id, amount) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? {...item, quantity: Math.max(1, item.quantity + amount)}
            : item,
        )
        .filter(item => item.quantity > 0),
    )
  }

  const removeFromCart = id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  return (
    <div className="ShoppingCartAppContainer">
      <h1 className="ShoppingCartHeading">Shopping Cart</h1>
      <h2 className="productsHeading">Products</h2>
      <div className="productsList">
        {PRODUCTS.map(products => (
          <div className="productsListContainer">
            <p>{products.name}</p>
            <p>${products.price}</p>
            <button
              type="button"
              className="AddtoCartButton"
              onClick={() => addToCart(products)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <h2>Cart Summary</h2>
      <div className="cartSummary">
        <div className="subtotalContainer">
          <p className="subtotalPara">Subtotal:</p>
          <p className="subtotalPrice">${subtotal}</p>
        </div>
        <hr />
        {subtotal < 1000 ? (
          <div className="subtoatalAnimation">
            <div className="animation">
              <p>Add $1000 more to get a FREE Wireless Mouse!</p>
              <div
                style={{
                  borderRadius: '20px',
                  background: '#ddd',
                  height: '10px',
                  width: '100%',
                  marginBotton: '10px',
                }}
              >
                <div
                  style={{
                    borderRadius: '20px',
                    background: 'rgb(45, 173, 224)',
                    width: `${Math.min((subtotal / THRESHOLD) * 100, 100)}%`,
                    height: '100%',
                  }}
                >
                  {null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p>You got a free Wireless Mouse!</p>
            {subtotal < THRESHOLD ? <p>FREE GIFT </p> : null}
          </>
        )}
      </div>

      <div className="cartDetails">
        {cart.length === 0 ? (
          <div className="emptyCart">
            <p>Your cart is empty</p>
            <p>Add some Products to see them here!</p>
          </div>
        ) : (
          <div className="cartItemsContainer">
            <h2>Cart Items</h2>
            {cart.map(item => (
              <div key={item.id} className="cartItemDetails">
                <div>
                  <p>{item.name}</p>
                  <p>
                    ${item.price} x {item.quantity} = $
                    {item.price * item.quantity}
                  </p>
                </div>
                {item.id !== FREE_GIFT.id && (
                  <div className="buttons">
                    <button
                      type="button"
                      className="subButton"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      type="button"
                      className="addButton"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="removeButton"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCartApp
