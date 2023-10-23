const target = document.querySelector('.target')
const inputAngleNumber = document.querySelector('.input__angle-number')
const inputAngleRange = document.querySelector('.input__angle-range')

let color1 = "rgba(232,120,62,1)"
let color1per = "20"

let color2 = "rgb(235, 235, 235)"
let color2per = "80"

target.style.background = `linear-gradient(${inputAngleNumber.value}deg, ${color1} ${color1per}%, ${color2} ${color2per}%)`

const AngleNumber = () => {
    inputAngleNumber.value = inputAngleRange.value
    setValues()
}

const AngleRange = () => {
    inputAngleRange.value = inputAngleNumber.value
    setValues()
}

const setValues = () => {
    target.style.background = `linear-gradient(${inputAngleNumber.value}deg, ${color1} ${color1per}%, ${color2} ${color2per}%)`
}

inputAngleNumber.addEventListener('input', AngleRange)
inputAngleRange.addEventListener('input', AngleNumber)