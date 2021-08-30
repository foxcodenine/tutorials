<?php 

require 'data/team.php';
include 'views/parts/head.php';
include 'views/parts/header.php';

$cm = $team[$id];

?>
<section id="team" class="padd-section text-center wow fadeInUp">

<div class="container">
  <div class="section-title text-center">

    <h2><?php echo $cm['name'] . ' ' . $cm['surname'] ?></h2>
    <p class="separator"><?php echo $cm['position'] ?></p>

  </div>
</div>

<div class="container" style="display: flex; flex-direction:column;">

  <div class="team-block bottom" style="display: flex; flex-direction:column; width: 500px; margin: 0 auto; height: 500px; ">
    <img src="<?= $_ENV['BASE_DIR']?>/static/img/team/<?= $id;?>.jpg" class="img-responsive" alt="img" style="width: 500px;">
  </div>
      
</div>
</section>
<?php include 'views/parts/foot.php'?>