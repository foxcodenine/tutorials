<?php include './code.php' ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Simple Calc</title>
</head>
<body>
    <div class="container">
        <div class="calc">
            <h1 class="calc__title">Simple calculator</h1>
            <form action="?" class="calc__form" method="POST">

                <div class="calc__row">
                    <input type="number" class="input__form" name="num1"
                    placeholder="<?php echo $placeholder1 ?>">
                </div>

                <div class="calc__row">
                    <input type="number" class="input__form" name="num2"
                    placeholder="<?php echo $placeholder2 ?>">
                </div>

                <div class="calc__row calc__row--3">
                    <select name="operator" id="operator">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                    <button class="calc__btn" name="calc_submit">Calc</button>
                </div>

                <div class="calc__row calc__row--4">
                    <div class="calc__result"><?php echo $result ?></div>
                </div>
            </form>
        </div>
    </div>

</body>
</html>