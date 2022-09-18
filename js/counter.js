const counterBtn = document.querySelectorAll('.items__control')
const counter = document.querySelector('[data-counter]')

counterBtn.forEach(btn => {
    btn.addEventListener('click', event => {
        if(event.target.dataset.action === 'minus') {
            counter.innerText === '0' ? counter.innerText = 0 : --counter.innerText
        } else {
            ++counter.innerText
        }
    })
})
