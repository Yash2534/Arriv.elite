import { createContext, useContext, useState } from 'react';

const OrderModalContext = createContext();

export function OrderModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderProduct, setOrderProduct] = useState(null);

  const openOrderModal = (product) => {
    setOrderProduct(product);
    setIsModalOpen(true);
  };

  const closeOrderModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setOrderProduct(null), 300); // clear after exit animation
  };

  return (
    <OrderModalContext.Provider value={{ isModalOpen, orderProduct, openOrderModal, closeOrderModal }}>
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
}
