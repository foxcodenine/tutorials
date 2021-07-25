<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table class='table'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <?php 
                foreach($books as $title=>$book) {
                    echo '<tr>';
                    echo "<td><a href='index.php?book=$book->id'>$book->title</a></td>";
                    echo "<td>$book->author</td>";
                    echo "<td>$book->description</td>";
                    echo '</tr>';
                }            
            ?>
        </tbody>
    </table>    
</body>
</html>