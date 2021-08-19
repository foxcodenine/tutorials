<section>

<h3>API Overview</h3>

<p class="info">The following API perform basic CRUD operation to three 
database tables,  student, course and register tables.</p>

<img class="api__image" src="./static/image/img1.jpg" alt="123">

</section>
<section>
<h3>API URL format:</h3>
<?php 
$url1 =  htmlentities ('Base-endpoint/<api-key>/api/<endpoint>');
$url2 =  htmlentities('Base-endpoint/<api-key>/api/<endpoint>/<student_id | course_id>');
$url3 =  htmlentities('Base-endpoint/<api-key>/api/<endpoint>/<course_id>/<student_id>');

echo "<p class='info'>{$url1}</p>";
echo "<p class='info'>{$url2}</p>";
echo "<p class='info'>{$url3}</p>";

?>



<br><br>The API url is made of 3 to 4 parts:
<p class="info">
<br>     &nbsp;&nbsp; 1. &nbsp;the base-endpoint
<br><br> &nbsp;&nbsp; 2. &nbsp;API-keys	
<br><br> &nbsp;&nbsp; 3. &nbsp;the Endpoint
<br><br> &nbsp;&nbsp; 4. &nbsp;and 1 to 2 optional IDs
</p>
<br>
</section>




<section>
    <h3>Base-endpoint:</h3>
    <p class="info">The  base endpoint is: &nbsp; &nbsp; &nbsp; <b>http://foxcodes.co/ice_malta/php/lesson_12/</b> </p>
    <br>
</section>

<section>
    <h3>API key</h3>
    <p class="info">The API Key come after the Base endpoint. It always start with: &nbsp; &nbsp; <b>'key_'</b>  </p>
</section>
