<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/4798a03daf.js" crossorigin="anonymous"></script>
</head>
<body>
    
    <header>
        <h2 class="page__title">Useful Tools</h2>

        <h1 class="tool__name">

        </h1>

        <button type="button" class="openMenu">
            <i class="fa-solid fa-bars"></i>
        </button>
    </header>

    <main>
        <nav>
            <div class="nav__wrapper">
                <button type="button" class="closeMenu">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <a href="?page=boxshadow" class="toolBtn">Box Shadow</a>
                <a href="?page=textshadow" class="toolBtn">Text Shadow</a>
                <a href="?page=borderradius" class="toolBtn">Border Radius</a>
                <a href="?page=gradient" class="toolBtn">Gradient</a>
                <a href="?page=flexbox" class="toolBtn">Flexbox</a>
                <a href="?page=transition" class="toolBtn">Transition</a>
                <a href="?page=transform" class="toolBtn">Transform</a>
                <a href="?page=background" class="toolBtn">Background</a>
            </div>
        </nav>

        <?php
            error_reporting(0);

            if($_GET['page']){
                $allowed_pages = array("boxshadow", "textshadow", "borderradius", "gradient",
                "flexbox", "transition", "transform", "background");

                $page = filter_var($_GET['page'], FILTER_SANITIZE_STRING);

                if(!empty($page)){
                    if(!in_array($page, $allowed_pages)){
                        include("404/404.php");

                        echo "<style>";
                        include("404/404.css");
                        echo "</style>";

                        echo "<script>document.querySelector('nav').remove()</script>";
                    } else {
                        if(is_file("$page/".$page.".php")){
                            include("$page/".$page.".php");

                            echo "<style>";
                            include("$page/".$page.".css");
                            echo "</style>";

                            echo "<script>";
                            include("$page/".$page.".js");
                            echo "</script>";

                            echo "<script>document.title = '{$GLOBALS['head_title']}'
                                        document.querySelector('.tool__name').textContent = '{$GLOBALS['head_title']}'</script>";
                        
                        } else{
                            echo "strona w budowie";
                        }
                    }
                }
            } else {
                header("Location: ../index.php");
            }
        ?>
    </main>

    <footer>
        <a href="https://elmaccho.github.io/react-portfolio-page/index.html" target="_blank">Check my portfolio!</a>
    </footer>

    <script src="script.js"></script>
</body>
</html>