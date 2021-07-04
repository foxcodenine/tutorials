
<header class="header">
        <ul class="header__list">
            <?php 

            preg_match('/lesson_\d/', $_SERVER['PHP_SELF'], $l);
            $isNotApp = preg_match('/lesson_\d\/index.php/', $_SERVER['PHP_SELF']);
            $l =  implode('', $l);
            // echo $lesson == $l;
            
            $lessons =range(2, 8);
            $placeholders =range(9, 12);
            
            // ---- lessons
            foreach($lessons as $lesson) {
                $active = "lesson_{$lesson}"== $l && $isNotApp;
                echo "<li class='header__item";
                if($active) echo ' header__item--selected';
                echo "'><a href='/practical_exercises/lesson_{$lesson}/index.php'>";
                echo "lesson {$lesson}</a></li>";
            }
            // ---- placeholders
            foreach($placeholders as $lesson) {
                echo "<li class='header__item placeholder'><a>lesson {$lesson}</a></li>";
            }
            
            ?>
            <li class='header__item placeholder'><a>final</a></li>

            <!-- app1 -->
            <li class="header__item
            <?php if(preg_match('/simpleCalc/', $_SERVER['PHP_SELF']))echo 'header__item--selected'; ?>
            "><a href="/practical_exercises/lesson_4/simpleCalc/index.php">app1</a></li>

            <!-- app2 -->
            <li class="header__item
            <?php if(preg_match('/student_management/', $_SERVER['PHP_SELF']))echo 'header__item--selected'; ?>
            "><a href="/practical_exercises/lesson_7/student_management/index.php">app2</a></li>


        </ul>
        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script src="https://unpkg.com/tippy.js@6"></script>
        <script>
        tippy('.placeholder', {
            content: "...not yet complete!",
        });
        </script>
</header>
