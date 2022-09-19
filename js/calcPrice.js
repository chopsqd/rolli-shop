function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item')
    const totalpriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const deliveryCostInfo = document.querySelector('.delivery-cost-info')
    const cartDelivery = document.querySelector('.cart-delivery')
    let totalPrice = 0

    cartItems.forEach(item => {
        const amountEl = item.querySelector('[data-counter]').textContent
        const priceEl = item.querySelector('.price__currency').textContent

        const currentPrice = parseInt(amountEl) * parseInt(priceEl)

        totalPrice += currentPrice
    })
    totalpriceEl.innerText = totalPrice 

    if(totalPrice > 0) {
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.add('none')
    }

    if(totalPrice >= 600) {
        deliveryCost.classList.add('free')
        deliveryCostInfo.classList.add('none')
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCostInfo.classList.remove('none')
        deliveryCost.innerText = '120 ₽'
    }
}