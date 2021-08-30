<?php

function active($current) {
  global $endpoint;
  if($endpoint && $endpoint == $current) {
    return "menu-active";
  }
}

?>
<header id="header" class="header header-hide">
    <div class="container">

      <nav id="nav-menu-container">
        <ul class="nav-menu">

          <li class='<?=active('home')?>' ><a href="<?=$_ENV['BASE_URL'] . '/'?>">Home</a></li>
          <li class='<?=active('about')?>'><a href="<?=$_ENV['BASE_URL'] . '/about'?>">About</a></li>
          <li class='<?=active('team')?>'> <a href="<?=$_ENV['BASE_URL'] . '/team'?>">Team</a></li>

          <li class="menu-has-children <?=active('members')?>"><a href="">Members</a>

            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>

          <li  class='<?=active('contact')?>' ><a href="<?=$_ENV['BASE_URL'] . '/contact'?>">Contact</a></li>
        </ul>
      </nav><!-- #nav-menu-container -->
    </div>
  </header><!-- #header -->



 