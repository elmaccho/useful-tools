const inputTopLeftNumber = document.querySelector('.input__topleft-number')
const inputTopLeftRange = document.querySelector('.input__topleft-range')

const inputTopRightNumber = document.querySelector('.input__topright-number')
const inputTopRightRange = document.querySelector('.input__topright-range')

const inputBottomRightNumber = document.querySelector('.input__bottomright-number')
const inputBottomRightRange = document.querySelector('.input__bottomright-range')

const inputBottomLeftNumber = document.querySelector('.input__bottomleft-number')
const inputBottomLeftRange = document.querySelector('.input__bottomleft-range')

const pixelBtn = document.querySelector('.pixelBtn')
const perecentBtn = document.querySelector('.perecentBtn')


const targetBox = document.querySelector('.target')


const lineValue = document.querySelector('.line-value')

const copyBtn = document.querySelector('.copyBtn')
const checkIcon = document.querySelector('.checkIcon')
const innerText = document.querySelector('.innerText')

let radiusStyle = "px"
let topLeft = "20"
let topRight = "20"
let BottomRight = "20"
let BottomLeft = "20"

lineValue.textContent = `${inputTopLeftNumber.value}${radiusStyle} ${inputTopRightNumber.value}${radiusStyle} ${inputBottomRightNumber.value}${radiusStyle} ${inputBottomLeftNumber.value}${radiusStyle};`

const TopLeftRange = () => {
    inputTopLeftRange.value = inputTopLeftNumber.value;
    setValues();
}
const TopLeftNumber = () => {
    inputTopLeftNumber.value = inputTopLeftRange.value;
    setValues();
}

const TopRightRange = () => {
    inputTopRightRange.value = inputTopRightNumber.value;
    setValues();
}
const TopRightNumber = () => {
    inputTopRightNumber.value = inputTopRightRange.value;
    setValues();
}

const BottomRightRange = () => {
    inputBottomRightRange.value = inputBottomRightNumber.value;
    setValues();
}
const BottomRightNumber = () => {
    inputBottomRightNumber.value = inputBottomRightRange.value;
    setValues();
}

const BottomLeftRange = () => {
    inputBottomLeftRange.value = inputBottomLeftNumber.value;
    setValues();
}
const BottomLeftNumber = () => {
    inputBottomLeftNumber.value = inputBottomLeftRange.value;
    setValues();
}


const switchToPixel = () => {
    pixelBtn.classList.add('styleActive')
    perecentBtn.classList.remove('styleActive')

    radiusStyle = "px"
    setValues();
}
const switchToPerecent = () => {
    perecentBtn.classList.add('styleActive')
    pixelBtn.classList.remove('styleActive')
    
    radiusStyle = "%"
    setValues();
}


const setValues = () => {
    targetBox.style.borderRadius = `${inputTopLeftNumber.value}${radiusStyle} ${inputTopRightNumber.value}${radiusStyle} ${inputBottomRightNumber.value}${radiusStyle} ${inputBottomLeftNumber.value}${radiusStyle}`
    lineValue.textContent = `${inputTopLeftNumber.value}${radiusStyle} ${inputTopRightNumber.value}${radiusStyle} ${inputBottomRightNumber.value}${radiusStyle} ${inputBottomLeftNumber.value}${radiusStyle};`
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
    let toClipBoard = `Border-radius: ${inputTopLeftNumber.value}${radiusStyle} ${inputTopRightNumber.value}${radiusStyle} ${inputBottomRightNumber.value}${radiusStyle} ${inputBottomLeftNumber.value}${radiusStyle};`

    try{
        await navigator.clipboard.writeText(toClipBoard)
    } catch (err) {
        console.error('Failed to copy: ', err);
    }

}

inputTopLeftNumber.addEventListener('input', TopLeftRange)
inputTopLeftRange.addEventListener('input', TopLeftNumber)

inputTopRightNumber.addEventListener('input', TopRightRange)
inputTopRightRange.addEventListener('input', TopRightNumber)

inputBottomRightNumber.addEventListener('input', BottomRightRange)
inputBottomRightRange.addEventListener('input', BottomRightNumber)

inputBottomLeftNumber.addEventListener('input', BottomLeftRange)
inputBottomLeftRange.addEventListener('input', BottomLeftNumber)

pixelBtn.addEventListener('click', switchToPixel)
perecentBtn.addEventListener('click', switchToPerecent)

copyBtn.addEventListener('click', CopyAnimation)
copyBtn.addEventListener('click', copyClipboard)