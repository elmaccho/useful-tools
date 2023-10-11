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

const copyBtn = document.querySelector('.copyBtn')
const checkIcon = document.querySelector('.checkIcon')
const innerText = document.querySelector('.innerText')

    inputHorNumber.value = '0'
    inputVerNumber.value = '0'
    inputSpreadNumber.value = '5'
    inputBlurNumber.value = '20'
    inputColor.value = '#232323'
    for(const lineValue of lineValues){
        lineValue.textContent =  ` ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};`
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

const SpreadRange = () => {
    inputSpreadRange.value = inputSpreadNumber.value;
    setValues();
}
const SpreadNumber = () => {
    inputSpreadNumber.value = inputSpreadRange.value;
    setValues();
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

        let insetChecked = 'inset'

        targetBox.style.boxShadow = `${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`

        for(const lineValue of lineValues){
            lineValue.textContent =  `${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
        }

    } else {

        let insetChecked = ''

        targetBox.style.boxShadow = `${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
 
        for(const lineValue of lineValues){
            lineValue.textContent =  `${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value}`
        }
    }
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
    if(inputRadioInset.checked == true){
        let insetChecked = 'inset'

            let toClipBoard = `
            -webkit-box-shadow:${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};
            -moz-box-shadow:${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};
            box-shadow:${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};
            `

            try{
                await navigator.clipboard.writeText(toClipBoard)
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
    } else {
        let insetChecked = ''

           let toClipBoard = `-webkit-box-shadow:${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};
            -moz-box-shadow:${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};
            box-shadow:${insetChecked} ${inputHorNumber.value}px ${inputVerNumber.value}px ${inputBlurNumber.value}px ${inputSpreadNumber.value}px ${inputColor.value};
            `

            try{
                await navigator.clipboard.writeText(toClipBoard)
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
    }
}



inputHorNumber.addEventListener('input', HorizontalRange)
inputHorRange.addEventListener('input', HorizontalNumber)

inputVerNumber.addEventListener('input', VerticalRange)
inputVerRange.addEventListener('input', VerticalNumber)

inputBlurNumber.addEventListener('input', BlurRange)
inputBlurRange.addEventListener('input', BlurNumber)

inputSpreadNumber.addEventListener('input', SpreadRange)
inputSpreadRange.addEventListener('input', SpreadNumber)

inputColor.addEventListener('input', ColorValue)

inputRadioInset.addEventListener('input', ShadowType)
inputRadioOutset.addEventListener('input', ShadowType)

copyBtn.addEventListener('click', CopyAnimation)
copyBtn.addEventListener('click', copyClipboard)