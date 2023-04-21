let homePage = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-200">
<div class="w-full max-w-xs mx-auto mt-36 ">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="/user">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Add new user
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Enter fullname">
    </div>
    <div class="flex items-center justify-between w-full">
      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 foxcode.io. All rights reserved.
  </p>
</div>
</body>
</html>
`;

// ---------------------------------------------------------------------

let userPage1 = `

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-200">
<div class="w-full max-w-xs mx-auto mt-12 ">
<div class="mt-32">
    <div class="px-4 sm:px-8 max-w-5xl m-auto">
        <h1 class="text-center font-semibold text-sm">Users List</h1>
        <p class="mt-2 text-center text-xs mb-4 text-gray-500 hover:text-blue-500"><a href="/">Add a new user</a></p>
        <ul id="list" class="border border-gray-200 rounded overflow-hidden shadow-md">
           `
           
           
let userPage2 = `       
       </ul>
        <a class="text-xs text-center block mt-4 ">&copy;2023 foxcode.io. All rights reserved.</a>
    </div>
</div>
</div>
</body>
</html>
`;

// ---------------------------------------------------------------------


module.exports = {
    homePage,
    userPage1,
    userPage2

}