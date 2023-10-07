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

const settings = document.querySelector('.settings')


const lineValues = document.querySelectorAll('.line-values')

    inputHorNumber.value = '0'
    inputVerNumber.value = '0'
    inputSpreadNumber.value = '5'
    inputBlurNumber.value = '20'
    inputColor.value = '#232323'
    for(const lineValue of lineValues){
        lineValue.textContent =  ` ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
    }

const HorizontalValue = () => {
    inputHorNumber.value = inputHorRange.value

    setValues()
}

const VerticalValue = () => {
    inputVerNumber.value = inputVerRange.value

    setValues()
}

const BlurValue = () => {
    inputBlurNumber.value = inputBlurRange.value

    setValues()
}

const SpreadValue = () => {
    inputSpreadNumber.value = inputSpreadRange.value

    setValues()
}

const ColorValue = () => {

    setValues()
}

const ShadowType = () => {
    if(inputRadioInset.checked == true){
        setValues()
    }
    if(inputRadioOutset.checked == true){
        setValues()
    }
}

const setValues = () => {
    if(inputRadioInset.checked == true){
        targetBox.style.boxShadow = `inset ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`

        for(const lineValue of lineValues){
            lineValue.textContent =  `inset ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
        }

    } else {
        targetBox.style.boxShadow = ` ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
 
        for(const lineValue of lineValues){
            lineValue.textContent =  ` ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
        }
    }
}

console.log(inputColor.value);

inputHorNumber.addEventListener('input', HorizontalValue)
inputHorRange.addEventListener('input', HorizontalValue)

inputVerNumber.addEventListener('input', VerticalValue)
inputVerRange.addEventListener('input', VerticalValue)

inputBlurNumber.addEventListener('input', BlurValue)
inputBlurRange.addEventListener('input', BlurValue)

inputSpreadNumber.addEventListener('input', SpreadValue)
inputSpreadRange.addEventListener('input', SpreadValue)

inputColor.addEventListener('input', ColorValue)

inputRadioInset.addEventListener('input', ShadowType)
inputRadioOutset.addEventListener('input', ShadowType)