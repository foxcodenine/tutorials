<section>

<h3>API Overview</h3>

<p class="info">The following API perform basic CRUD operation to three 
database tables,  student, course and register tables.</p>

<img class="api__image" src="./static/image/img1.jpg" alt="img1">

</section>


<section>
<h3>API URL format:</h3>
<?php 
$url1 =  htmlentities('Server-URL/<API-Key>/api/<Endpoint>');
$url2 =  htmlentities('Server-URL/<API-Key>/api/<Endpoint>/<student_id | course_id>');
$url3 =  htmlentities('Server-URL/<API-Key>/api/<Endpoint>/<course_id>/<student_id>');

echo "<p class='info'>{$url1}</p>";
echo "<p class='info'>{$url2}</p>";
echo "<p class='info'>{$url3}</p>";

?>
<br><br><p class="info">The API url is made of 3 to 4 parts:</p> 
<p class="info">
<pre class="info">
        1. &nbsp;the Server-URL
        2. &nbsp;API-Keys	
        3. &nbsp;the Endpoint
        4. &nbsp;and 1 to 2 optional IDs
</pre>
</p>
<br>
</section>


<section>
    <h3>Server-URL:</h3>
    <p class="info">The Server URL is: &nbsp; &nbsp; &nbsp; <b>http://foxcodes.co/ice_malta/php/lesson_12/</b> </p>
    <br>
</section>


<section>
    <h3>API key</h3>
    <p class="info">The API-Key come after the Server-URL. It always start with: &nbsp; &nbsp; <b>'key_'</b>  </p>
    <p class="info">Ex:	&nbsp; &nbsp; <b>key_VBeiUvaq6UrUShwIr5MRK1FSe8eq+Zya+mogRt5OBI=</b></p>
    <p class="info">
    <br><br>
    API Keys has two level of permission:
    <br><br>
    User  level &nbsp; &nbsp; &nbsp; -   &nbsp;   can perform only 'GET' http request. <br>
    Admin level	&nbsp; -   &nbsp;   can perform 'GET', 'POST', 'PUT' and 'DELETE' http request.
    </p>
</section>

<section>
    <h3>Endpoints</h3>
    <p class="info">There are 3 different Endpoint: </p>
    <pre class="info">
        student  - use to fetch, add,  delete, and update student/s data to database.
        course   - use to fetch, add,  delete, and update course/s data to database.
        register - use to register or remove students from courses.
    </pre>
</section>

<section>
    <h3>Optional IDs</h3>
    <p class="info">IDs are used in 'GET', 'PUT'  and 'DELETE' http request. </p>
    <p class="info">'POST' request doesn't require an ID. And 'GET' only need an ID when fetch data of a single course or student.</p>
    <br>
    <p class="info">
    When  using the register endpoint and performing a Delete request two ids are required. 
    A Student id <b>‘s_\d’</b> and a course id <b>‘c_\d’</b>. <br> (<b>\d</b> is to be replased with the course or student id).
    </p>
    <br>
    <p class="info">Ex: &nbsp; &nbsp; ../register/c_1/s_2 &nbsp; &nbsp; or &nbsp; &nbsp; ../register/s_2/c_1</p>
    <br><p class="info">To remove all student form a course or remove all course from a student the ‘<b>all</b>’ keyword can be use.</p>
    <br>
    <p class="info">Ex: &nbsp; &nbsp; ../register/c_all/s_2 &nbsp; or &nbsp;&nbsp; ../register/s_all/c1</p>
</section>

<section>
    <h3>Examples</h3>

    <h4>GET:</h4>

    <p class="info">Student Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/student'?></p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/student/2'?></p>
    <br>
    <p class="info">Course Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/course'?></p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/course/1'?></p>
    <br>
    <p class="info">Register Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/register'?></p>
    <br><br>
    <h4>POST:</h4>
    <p class="info">Student Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/student'?></p>
    <img class="api__image" src="./static/image/img2.jpg" alt="img2">
    <br>
    <p class="info">Course Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/course '?></p>
    <img class="api__image" src="./static/image/img3.jpg" alt="img3">
    <p class="info">&#x25CB; &nbsp; '<b>startDate</b>' to be enterd as ‘DD-MM-YYYY‘ &nbsp; or &nbsp; ‘D-M-YY’ &nbsp; or &nbsp; ‘D-M-YYYY’ &nbsp; format.</p>
    <p class="info">&#x25CB; &nbsp; '<b>days</b>' are to be enterd as 3 letter word, with space seperations as ’Mon Tue Wed Thu Fri’.</p>
    <p class="info">&#x25CB; &nbsp; '<b>timeTo</b>' and '<b>timeFrom</b>' are to be  enterd as ‘HH:MM’ format format.</p>
    <br><br><br>
    <p class="info">Register Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/register'?></p>
    <img class="api__image" src="./static/image/img4.jpg" alt="img4">
    <br><br><br><br>
    <h4>PUT / PATCH:</h4>
    <p class="info">&#x25CB; &nbsp; To update a student or coure,  you can do both PUT or PATCH request.</p>
    <p class="info">&#x25CB; &nbsp; The API url should end with the coure or student id number.</p>
    <p class="info">&#x25CB; &nbsp; Any field to be update are to be submited in the request body in json as in POST .</p>
    <p class="info">&nbsp; &nbsp; &nbsp; (Only the field to be update are requied).</p>
    <br>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/course/1'?></p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/student/9'?></p>
    <img class="api__image" src="./static/image/img5.jpg" alt="img5">
    <br><br><br><br>
    <h4>Delete</h4>
    <p class="info">Student Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/student/2'?></p>
    <br>
    <p class="info">Course Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/course/1'?></p>
    <br>
    <p class="info">Register Endpoint:</p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/register/s_2/c_1'?></p>
    <p class="info"><?= '&nbsp; &nbsp; &nbsp;http://foxcodes.co/ice_malta/php/lesson_12/<span id="danger">'. htmlentities('<api-key>') . '</span>/api/register/s_2/c_all'?></p>
    <br>
</section>
