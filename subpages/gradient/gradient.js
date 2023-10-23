const target = document.querySelector('.target')
const inputAngleNumber = document.querySelector('.input__angle-number')
const inputAngleRange = document.querySelector('.input__angle-range')

const inputColor1Number = document.querySelector('.input__color1-number')
const inputColor1Range = document.querySelector('.input__color1-range')
const inputColor1 = document.querySelector('.input__color1')

const inputColor2Number = document.querySelector('.input__color2-number')
const inputColor2Range = document.querySelector('.input__color2-range')
const inputColor2 = document.querySelector('.input__color2')

const linearBtn = document.querySelector('.linearBtn')
const radialBtn = document.querySelector('.radialBtn')


let backgroundType = "linear-gradient"

target.style.background = `${backgroundType}(${inputAngleNumber.value}deg, ${inputColor1.value} ${inputColor1Number.value}%, ${inputColor2.value} ${inputColor2Number.value}%)`

const AngleNumber = () => {
    inputAngleNumber.value = inputAngleRange.value
    setValues()
}

const AngleRange = () => {
    inputAngleRange.value = inputAngleNumber.value
    setValues()
}

const Color1Number = () => {
    inputColor1Number.value = inputColor1Range.value
    setValues()
}
const Color1Range = () => {
    inputColor1Range.value = inputColor1Number.value
    setValues()
}

const Color2Number = () => {
    inputColor2Number.value = inputColor2Range.value
    setValues()
}
const Color2Range = () => {
    inputColor2Range.value = inputColor2Number.value
    setValues()
}

const inputColor1Value = () => {
    setValues()
}
const inputColor2Value = () => {
    setValues()
}


const switchToLinear = () => {
    linearBtn.classList.add('styleActive')
    radialBtn.classList.remove('styleActive')

    backgroundType = "linear"

    console.log(backgroundType);

    setValues()
}

const switchToRadius = () => {
    linearBtn.classList.remove('styleActive')
    radialBtn.classList.add('styleActive')

    backgroundType = "radial"

    setValues()
}

const setValues = () => {
    if(backgroundType == "radial"){
        target.style.background = `radial-gradient(circle, ${inputColor1.value} ${inputColor1Number.value}%, ${inputColor2.value} ${inputColor2Number.value}%)`
    } else if(backgroundType == "linear") {
        target.style.background = `linear-gradient(${inputAngleNumber.value}deg, ${inputColor1.value} ${inputColor1Number.value}%, ${inputColor2.value} ${inputColor2Number.value}%)`
    }
}

inputAngleNumber.addEventListener('input', AngleRange)
inputAngleRange.addEventListener('input', AngleNumber)

inputColor1.addEventListener('input', inputColor1Value)
inputColor1Range.addEventListener('input', Color1Number)
inputColor1Number.addEventListener('input', Color1Range)

inputColor2.addEventListener('input', inputColor2Value)
inputColor2Range.addEventListener('input', Color2Number)
inputColor2Number.addEventListener('input', Color2Range)

linearBtn.addEventListener('click', switchToLinear)
radialBtn.addEventListener('click', switchToRadius)