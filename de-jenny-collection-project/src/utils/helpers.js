import { STORE_INFO } from '../data/storeData';

export const formatNaira = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(amount).replace('NGN', '₦');
};

export const getWhatsAppOrderLink = (product, selectedSize) => {
  const sizeText = selectedSize ? ` (Size: ${selectedSize})` : '';
  const message = `Hello De Jenny Collection!\nI am visiting your website and I would love to order:\n\n*${product.name}*${sizeText}\nPrice: ${formatNaira(product.price)}\n\nPlease confirm availability and delivery to my location in Nigeria. Thank you!`;
  return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
};

export const getCartWhatsAppCheckoutLink = (cartItems, total) => {
  if (cartItems.length === 0) {
    return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent("Hello De Jenny Collection! I would like to inquire about your latest collection.")}`;
  }

  const itemsList = cartItems
    .map((item, index) => `${index + 1}. *${item.name}* (Size: ${item.selectedSize}) x${item.quantity} - ${formatNaira(item.price * item.quantity)}`)
    .join('\n');

  const message = `Hello De Jenny Collection!\nI would like to place an order from your website:\n\n${itemsList}\n\n*Estimated Total: ${formatNaira(total)}*\n\nPlease confirm stock availability and send payment / delivery details.`;
  return `https://wa.me/${STORE_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
};