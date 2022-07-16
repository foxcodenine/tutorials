<!DOCTYPE html>
<html>
<body>

<h2>Text input fields</h2>

<form method="POST" action="/fun/request?name=chris">
    @csrf
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe">
    <button type="submit">Submit</button>
</form>

</body>
</html>