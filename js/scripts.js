const btn = document.querySelector('button')
const inputNumber = document.querySelector('#number')

function arrayTransform(str) {
    const cleanStr = str.replace(/[^0-9,]/g, '')
    const array = cleanStr.split(',')
    console.log(array)
    return array.sort((a, b) => a - b)
}

btn.addEventListener('click', () => {
    const inputNumber = document.querySelector('#number').value
    console.log(inputNumber)
    const result = document.querySelector('#result').innerText = `${arrayTransform(inputNumber)}`
    const p = document.querySelector('p')
    p.style.opacity = '1'
    p.style.transition = '.5s ease-in-out'
})

inputNumber.addEventListener('focus', () => {
    const label = document.querySelector('label')
    label.style.top = '-10px'
    label.style.zIndex = '1'
})
inputNumber.addEventListener('blur', () => {
    const label = document.querySelector('label')
    label.style.top = '-10px'
    if (inputNumber.value === '') {
        label.style.top = '13px'
    }
    
})