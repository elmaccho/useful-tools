const inputRadioInset = document.querySelector('.input__radio-inset')
const inputRadioOutset = document.querySelector('.input__radio-outset')

const inputHorNumber = document.querySelector('.input__hor-number')
const inputHorRange = document.querySelector('.input__hor-range')

const inputVerNumber = document.querySelector('.input__ver-number')
const inputVerRange = document.querySelector('.input__ver-range')

const inputBlurNumber = document.querySelector('.input__blur-number')
const inputBlurRange = document.querySelector('.input__blur-range')

const inputSpreadNumber = document.querySelector('.input__spread-number')
const inputSpreadRange = document.querySelector('.input__spread-range')

const inputColor = document.querySelector('.input__color')

const targetBox = document.querySelector('.target')

const HorizontalValue = () => {
    inputHorNumber.value = inputHorRange.value
}

const VerticalValue = () => {
    inputVerNumber.value = inputVerRange.value
}

const BlurValue = () => {
    inputBlurNumber.value = inputBlurRange.value
}

const SpreadValue = () => {
    inputSpreadNumber.value = inputSpreadRange.value
}

const setValues = () => {
    
}

inputHorNumber.addEventListener('input', HorizontalValue)
inputHorRange.addEventListener('input', HorizontalValue)

inputVerNumber.addEventListener('input', VerticalValue)
inputVerRange.addEventListener('input', VerticalValue)

inputBlurNumber.addEventListener('input', BlurValue)
inputBlurRange.addEventListener('input', BlurValue)

inputSpreadNumber.addEventListener('input', SpreadValue)
inputSpreadRange.addEventListener('input', SpreadValue)