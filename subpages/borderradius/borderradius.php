<?php
    $GLOBALS['head_title'] = "Border Radius";
?>

<div class="tool__wrapper">
    <div class="output__wrapper">
        <div class="output">
            <div class="target"></div>
        </div>

        <form class="settings">
            <h2 class="tool__title">Border Radius</h2>

            <div class="sett__row">
                <span class="radiusStyle__wrapper">
                    <button type="button" class="pixelBtn styleActive">Pixels</button>
                    <button type="button" class="perecentBtn">Perecents</button>
                </span>
            </div>
            <div class="sett__row">
                <p>Top Left</p>
                <div class="sett__position">
                    <input class="input__number input__topleft-number" type="number" name="" id="" value="20" max="125"><input class="input__range input__topleft-range" type="range" name="" id="" min="0" max="125" value="20">
                </div>
            </div>
            <div class="sett__row">
                <p>Top Right</p>
                <div class="sett__position">
                    <input class="input__number input__topright-number" type="number" name="" id="" value="20" max="125"><input class="input__range input__topright-range" type="range" name="" id="" min="0" max="125" value="20">
                </div>
            </div>
            <div class="sett__row">
                <p>Bottom Right</p>
                <div class="sett__position">
                    <input class="input__number input__bottomright-number" type="number" name="" id="" value="20" max="125"><input class="input__range input__bottomright-range" type="range" name="" id="" min="0" max="125" value="20">
                </div>
            </div>
            <div class="sett__row">
                <p>Bottom Left</p>
                <div class="sett__position">
                    <input class="input__number input__bottomleft-number" type="number" name="" id="" value="20" max="125"><input class="input__range input__bottomleft-range" type="range" name="" id="" min="0" max="125" value="20">
                </div>
            </div>
        </form>
    </div>

    <div class="code__wrapper">
        <div class="code__text">
            <span class="code__line">
                        <span class="line-header">Border-radius:</span>
                        <span class="line-value"></span>
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