window.addEventListener('click', event => {
    let counter;
    
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        counter = event.target.closest('.counter-wrapper').querySelector('[data-counter]')
    }

    if(event.target.dataset.action === 'minus') {
        if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove()
        }

        if(parseInt(counter.innerText) > 1) {
            --counter.innerText
        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove()
        }
    } 

    if(event.target.dataset.action === 'plus') {
        ++counter.innerText
    } 
})
