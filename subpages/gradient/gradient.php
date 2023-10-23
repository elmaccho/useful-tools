<?php
    $GLOBALS['head_title'] = "Gradient";
?>

<div class="tool__wrapper">
            <div class="output__wrapper">
                <div class="output">
                    <div class="target"></div>
                </div>
                <form class="settings">
                    <h2 class="tool__title">Gradient</h2>


                    <div class="sett__row">
                        <span class="gradientStyle__wrapper">
                            <button type="button" class="linearBtn styleActive">Linear</button>
                            <button type="button" class="radialBtn">Radial</button>
                        </span>
                    </div>
                    <div class="sett__row">
                        <p>Angle</p>
                        <div class="sett__position">
                            <input class="input__number input__angle-number" type="number" name="" id="" value="90" min="0" max="360"><input class="input__range input__angle-range" type="range" name="" id="" min="0" max="360" value="90">
                        </div>
                    </div>

                    <span class="colors__wrapper">
                        <div class="sett__row">
                            <p>Color 1</p>
                            <div class="sett__position">
                                <input class="input__number input__color1-number" type="number" name="" id="" value="35">
                                <input type="color" name="" id="" class="input__color input__color1" value="#e8783e">
                                <input class="input__range input__color1-range" type="range" name="" id="" min="0" max="100" value="35">
                            </div>
                        </div>
                    </span>

                    <span class="colors__wrapper">
                        <div class="sett__row">
                            <p>Color 2</p>
                            <div class="sett__position">
                                <input class="input__number input__color2-number" type="number" name="" id="" value="100">
                                <input type="color" name="" id="" class="input__color input__color2" value="#ebebeb">
                                <input class="input__range input__color2-range" type="range" name="" id="" min="0" max="100" value="100">
                            </div>
                        </div>
                    </span>

                    <span class="colors__sett">
                        <button type="button" class="addBtn styleActive">Add</button>
                        <button type="button" class="removeBtn">Remove</button>
                    </span>

                </form>
            </div>

            <div class="code__wrapper">
                <div class="code__text">
                    <span class="code__line">
                        <span class="line-header">-webkit-box-shadow:</span>
                        <span class="line-values"></span>
                    </span>
                    <span class="code__line">
                        <span class="line-header">-moz-box-shadow:</span>
                        <span class="line-values"></span>
                    </span>
                    <span class="code__line">
                        <span class="line-header">box-shadow:</span>
                        <span class="line-values"></span>
                    </span>
                        <button class="copyBtn" type="button">
                            <span class="checkIcon">
                                <i class="fa-regular fa-circle-check"></i>
                            </span>
                            <span class="innerText">Copy</span>
                        </button>
                </div>
            </div>
</div>