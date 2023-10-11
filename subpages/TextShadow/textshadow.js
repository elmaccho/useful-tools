const inputHorNumber = document.querySelector('.input__hor-number')
const inputHorRange = document.querySelector('.input__hor-range')

const inputVerNumber = document.querySelector('.input__ver-number')
const inputVerRange = document.querySelector('.input__ver-range')

const inputBlurNumber = document.querySelector('.input__blur-number')
const inputBlurRange = document.querySelector('.input__blur-range')

const inputColor = document.querySelector('.input__color')

const target = document.querySelector('.target')
const inputText = document.querySelector('.input__text')

const lineValue = document.querySelector('.line-value')

const copyBtn = document.querySelector('.copyBtn')
const checkIcon = document.querySelector('.checkIcon')
const innerText = document.querySelector('.innerText')

inputHorNumber.value = '10'
inputVerNumber.value = '10'
inputBlurNumber.value = '10'
inputColor.value = '#232323'

lineValue.textContent = ` ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputColor.value};`


const InputValue = () => {
    target.textContent = inputText.value
}

const HorizontalRange = () => {
    inputHorRange.value = inputHorNumber.value;
    setValues();
}
const HorizontalNumber = () => {
    inputHorNumber.value = inputHorRange.value;
    setValues();
}

const VerticalRange = () => {
    inputVerRange.value = inputVerNumber.value;
    setValues();
}
const VerticalNumber = () => {
    inputVerNumber.value = inputVerRange.value;
    setValues();
}

const BlurRange = () => {
    inputBlurRange.value = inputBlurNumber.value;
    setValues();
}
const BlurNumber = () => {
    inputBlurNumber.value = inputBlurRange.value;
    setValues();
}

const ColorValue = () => {

    setValues()
}

const setValues = () => {
    target.style.textShadow = `${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputColor.value}`
    lineValue.textContent = ` ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputColor.value};`
}

const CopyAnimation = () => {
    checkIcon.style.display = 'block'
    innerText.style.display = 'none'
    copyBtn.style.transform = "translateY(10px)"
    
    setTimeout(() => {
        copyBtn.style.transform = "translateY(0px)"
    }, 100);
    
    setTimeout(() => {
        copyBtn.style.transform = "translateY(-10px)"
        checkIcon.style.display = 'none'
        innerText.style.display = 'block'

        setTimeout(() => {
            copyBtn.style.transform = "translateY(0px)"
        }, 100);
    }, 2000);
}

const copyClipboard = async () => {
    let toClipBoard = `Text-shadow: ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputColor.value};`

    try{
        await navigator.clipboard.writeText(toClipBoard)
    } catch (err) {
        console.error('Failed to copy: ', err);
    }

}

inputText.addEventListener('input', InputValue)
inputHorNumber.addEventListener('input', HorizontalRange)
inputHorRange.addEventListener('input', HorizontalNumber)

inputVerNumber.addEventListener('input', VerticalRange)
inputVerRange.addEventListener('input', VerticalNumber)

inputBlurNumber.addEventListener('input', BlurRange)
inputBlurRange.addEventListener('input', BlurNumber)

inputColor.addEventListener('input', ColorValue)

copyBtn.addEventListener('click', CopyAnimation)
copyBtn.addEventListener('click', copyClipboard)