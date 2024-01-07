import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../../hooks/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                discountedPriceProduct:
                  cartItem.discountedPriceProduct + cartItem.discountedPrice,
              }
            : cartItem
        );
      } else {
        return [
          ...prevCart,
          {
            ...item,
            quantity: 1,
            discountedPriceProduct: item.discountedPrice,
          },
        ];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === itemId
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
                discountedPriceProduct:
                  cartItem.discountedPriceProduct - cartItem.discountedPrice,
              }
            : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPriceProduct,
    0
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
