function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item')
    const totalpriceEl = document.querySelector('.total-price')
    let totalPrice = 0

    cartItems.forEach(item => {
        const amountEl = item.querySelector('[data-counter]').textContent
        const priceEl = item.querySelector('.price__currency').textContent

        const currentPrice = parseInt(amountEl) * parseInt(priceEl)

        totalPrice += currentPrice
    })
    totalpriceEl.innerText = totalPrice 
}