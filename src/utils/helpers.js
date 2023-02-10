export const formatPrice = (price) => {
    return new Intl.NumberFormat('INR', {
        style: 'currency',
        currency: "INR"
    }).format(price);
}
