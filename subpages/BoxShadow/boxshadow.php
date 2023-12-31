<?php
    $GLOBALS['head_title'] = "Box Shadow";
?>

<div class="tool__wrapper">
            <div class="output__wrapper">
                <div class="output">
                    <div class="target"></div>
                </div>
                <form class="settings">
                    <h2 class="tool__title">Box Shadow</h2>

                    <div class="sett__row">
                        <p>Shadow Type</p>
                            <span>
                                <label for="inset"><input class="input__radio-inset" type="radio" name="shadowType" id="inset"> Inset</label>
                            </span>
                            <span>
                                <label for="outset"><input class="input__radio-outset" type="radio" name="shadowType" id="outset" checked> Outset</label>
                            </span>
                    </div>
                    <div class="sett__row">
                        <p>Horizontal</p>
                        <div class="sett__position">
                            <input class="input__number input__hor-number" type="number" name="" id="" value="0"><input class="input__range input__hor-range" type="range" name="" id="" min="-100" max="100" value="0">
                        </div>
                    </div>
                    <div class="sett__row">
                        <p>Vertical</p>
                        <div class="sett__position">
                            <input class="input__number input__ver-number" type="number" name="" id="" value="0"><input class="input__range input__ver-range" type="range" name="" id="" min="-100" max="100" value="0">
                        </div>
                    </div>
                    <div class="sett__row">
                        <p>Blur</p>
                        <div class="sett__position">
                            <input class="input__number input__blur-number" type="number" name="" id="" value="20"><input class="input__range input__blur-range" type="range" name="" id="" min="0" max="100" value="20">
                        </div>
                    </div>
                    <div class="sett__row">
                        <p>Spread</p>
                        <div class="sett__position">
                            <input class="input__number input__spread-number" type="number" name="" id="" value="5"><input class="input__range input__spread-range" type="range" name="" id="" min="-100" max="100" value="5">
                        </div>
                    </div>
                    <div class="sett__row">
                        <div class="sett__position">
                            <p>Color</p>
                            <input class="input__color" type="color" name="" id="">
                        </div>
                    </div>
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