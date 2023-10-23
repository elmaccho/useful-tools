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
                            <button type="button" class="radiusBtn">Radius</button>
                        </span>
                    </div>
                    <div class="sett__row">
                        <p>Angle</p>
                        <div class="sett__position">
                            <input class="input__number input__hor-number" type="number" name="" id="" value="0"><input class="input__range input__hor-range" type="range" name="" id="" min="-100" max="100" value="0">
                        </div>
                    </div>

                    <span class="colors__wrapper">
                        <div class="sett__row">
                            <p>Color 1</p>
                            <div class="sett__position">
                                <input class="input__number input__ver-number" type="number" name="" id="" value="0">
                                <input type="color" name="" id="" class="input__color">
                                <input class="input__range input__ver-range" type="range" name="" id="" min="-100" max="100" value="0">
                            </div>
                        </div>
                    </span>

                    <span class="colors__sett">
                        <button class="addBtn styleActive">Add</button>
                        <button class="removeBtn">Remove</button>
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

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia ab exercitationem, deleniti tenetur eum voluptas assumenda vitae reprehenderit, corporis ipsa, placeat perferendis incidunt repellendus!