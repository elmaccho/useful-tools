<?php
    $head_title = "Text Shadow"
?>

<div class="tool__wrapper">
            <div class="output__wrapper">
                <div class="output">
                    <span class="target">Text Shadow</span>
                </div>
                <form class="settings">
                    <h2 class="tool__title">Text Shadow</h2>


                    <div class="sett__row">
                        <p>Text</p>
                        <div class="sett__position">
                            <input class="input__text" type="text" name="" id="" maxlength="21" value="Text Shadow">
                        </div>
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
                        <span class="line-header">text-shadow: </span>
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