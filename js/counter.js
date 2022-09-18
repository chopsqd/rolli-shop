window.addEventListener('click', event => {
    let counter;
    
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        counter = event.target.closest('.counter-wrapper').querySelector('[data-counter]')
    }

    if(event.target.dataset.action === 'minus') {
        counter.innerText === '1' ? counter.innerText = 1 : --counter.innerText
    } 

    if(event.target.dataset.action === 'plus') {
        ++counter.innerText
    }
})
