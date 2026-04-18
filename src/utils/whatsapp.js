export const generateWhatsAppLink = (product, userDetails) => {
  if (!product) return '';
  
  const phoneNumber = '919723653140';
  const priceString = typeof product.price === 'number' ? `₹${product.price}` : product.price;
  const imageURL = product.image || (product.images && product.images[0]) || '';
  
  const message = `Hi Arriv.Elite 👗

🛍 Order Details:

📦 Product Name: ${product.name}
🆔 Product ID: ${product.id}
💰 Price: ${priceString}
📏 Size: ${userDetails.size}

🖼 Product Image:
${imageURL}

🛒 Quantity: 1

---

📍 Delivery Address:
👤 Name: ${userDetails.name}
📞 Phone: ${userDetails.phone}
🏠 Address: ${userDetails.address}

---

💰 Total Amount: ${priceString}

Please confirm availability and delivery time.

Thank you 🙏`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

// Kept for backward compatibility if any stragglers remain, but shouldn't be used
export const sendToWhatsApp = () => {
   console.warn("sendToWhatsApp deprecated. Use Whatsapp API Modal Context instead.");
};