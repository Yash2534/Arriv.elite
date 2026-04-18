import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useOrderModal } from '../context/OrderModalContext';
import { generateWhatsAppLink } from '../utils/whatsapp';

function WhatsAppOrderModal() {
  const { isModalOpen, orderProduct, closeOrderModal } = useOrderModal();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    size: 'M',
  });

  const [isRedirecting, setIsRedirecting] = useState(false);

  // Initialize size from product if available
  useEffect(() => {
    if (orderProduct?.selectedSize) {
      setFormData((prev) => ({ ...prev, size: orderProduct.selectedSize }));
    }
  }, [orderProduct]);

  if (!isModalOpen || !orderProduct) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    setTimeout(() => {
      const link = generateWhatsAppLink(orderProduct, formData);
      window.open(link, '_blank', 'noopener,noreferrer');
      
      setTimeout(() => {
        setIsRedirecting(false);
        closeOrderModal();
        // Reset form
        setFormData({ name: '', phone: '', address: '', size: 'M' });
      }, 500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center sm:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOrderModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-t-[2rem] bg-white text-black shadow-2xl sm:rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-cream bg-white px-6 py-4">
              <h3 className="font-display text-xl font-bold">Checkout</h3>
              <button
                type="button"
                onClick={closeOrderModal}
                className="rounded-full bg-cream p-2 text-black/60 transition-colors hover:bg-black/10 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[80vh] p-6">
              {/* Product Summary */}
              <div className="mb-6 flex gap-4 rounded-xl border border-cream bg-cream/30 p-3">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={orderProduct.image || orderProduct.images?.[0]}
                    alt={orderProduct.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-semibold">{orderProduct.name}</p>
                  <p className="mt-1 text-gold font-bold">₹{orderProduct.price}</p>
                </div>
              </div>

              {/* Form */}
              <form id="whatsapp-order-form" onSubmit={handleSubmit} className="space-y-4">
                {!orderProduct.selectedSize && (
                  <div className="space-y-1">
                    <label htmlFor="size" className="text-sm font-medium text-black/80">Select Size</label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      required
                    >
                      <option value="S">Small (S)</option>
                      <option value="M">Medium (M)</option>
                      <option value="L">Large (L)</option>
                      <option value="XL">Extra Large (XL)</option>
                      <option value="XXL">Double XL (XXL)</option>
                    </select>
                  </div>
                )}
                
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-black/80">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-medium text-black/80">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    required
                    pattern="[0-9]{10,12}"
                    className="w-full rounded-xl border border-cream bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="address" className="text-sm font-medium text-black/80">Delivery Address</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House no, Street, Landmark, City, Pincode"
                    required
                    rows={3}
                    className="w-full resize-none rounded-xl border border-cream bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="border-t border-cream bg-white p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
              <button
                type="submit"
                form="whatsapp-order-form"
                disabled={isRedirecting}
                className="group relative w-full overflow-hidden rounded-full bg-black px-6 py-4 text-center font-semibold uppercase tracking-wider text-white transition-all disabled:opacity-90"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {isRedirecting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Redirecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      <Check size={18} className="transition-transform group-hover:scale-110" />
                      Confirm & Send via WhatsApp
                    </>
                  )}
                </div>
                {!isRedirecting && (
                  <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-gold transition-transform duration-300 group-hover:translate-y-0" />
                )}
                {!isRedirecting && (
                  <div className="absolute inset-0 z-10 hidden items-center justify-center transition-opacity duration-300 group-hover:flex group-hover:text-black font-semibold uppercase tracking-wider">
                    Confirm & Send via WhatsApp
                  </div>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default WhatsAppOrderModal;
