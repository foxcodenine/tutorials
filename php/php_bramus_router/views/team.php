<?php require './data/team.php'?>
<?php include 'views/parts/head.php'?>
<?php include 'views/parts/header.php'?>
<section id="team" class="padd-section text-center wow fadeInUp">

<div class="container">
  <div class="section-title text-center">

    <h2>Team Member</h2>
    <p class="separator">Integer cursus bibendum augue ac cursus .</p>

  </div>
</div>

<div class="container">
  <div class="row">

    <?php foreach($team as $k => $v):?>

    <div class="col-md-6 col-md-4 col-lg-3">
      <div class="team-block bottom">
        <img src="./static/img/team/<?= $k ?>.jpg" class="img-responsive" alt="img">
        <div class="team-content">
          <ul class="list-unstyled">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
          </ul>
          <span><?= $v['position']?></span>
          <h4><?= $v['name'] . ' ' . $v['surname'] ?></h4>
        </div>
      </div>
    </div>

    <?php endforeach ?>
    

  </div>
</div>
</section>
<?php include 'views/parts/foot.php'?>