import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = {
  items: [],
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // Check if product already in cart
      const existing = state.items.find(item => item.id === action.product.id)
      if (existing) {
        // Increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      // Add new product
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
      }
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      }
    }
    case 'CLEAR_CART': {
      return initialState
    }
    default:
      return state
  }
}


export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product })
  }
  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // Derived values
  const cart = state.items
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)

  return (
    <CartContext.Provider value={{ cart, cartCount, cartTotal, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
