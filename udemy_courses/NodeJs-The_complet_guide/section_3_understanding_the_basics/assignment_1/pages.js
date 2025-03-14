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


let notFound = `
<style>
.emoji-404{

  position: relative;
  animation: mymove 2.5s infinite;
}

@keyframes mymove {
  33%   {top: 0px;}
  66%  {top: 20px;}
  100%  {top: 0px}



}
</style>
  <div class="bg-gray-100 h-screen justify-center">
    <center class="mt-24 m-auto">
  <svg class="emoji-404 " enable-background="new 0 0 226 249.135" height="249.135" id="Layer_1" overflow="visible" version="1.1" viewBox="0 0 226 249.135" width="226" xml:space="preserve" ><circle cx="113" cy="113" fill="#FFE585" r="109"/><line enable-background="new    " fill="none" opacity="0.29" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="88.866" x2="136.866" y1="245.135" y2="245.135"/><line enable-background="new    " fill="none" opacity="0.17" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="154.732" x2="168.732" y1="245.135" y2="245.135"/><line enable-background="new    " fill="none" opacity="0.17" stroke="#6E6E96" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" x1="69.732" x2="58.732" y1="245.135" y2="245.135"/><circle cx="68.732" cy="93" fill="#6E6E96" r="9"/><path d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z" enable-background="new    " fill="#FF9900" opacity="0.24"/><circle cx="156.398" cy="93" fill="#6E6E96" r="9"/><ellipse cx="67.732" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.372" ry="8.106"/><ellipse cx="154.88" cy="140.894" enable-background="new    " fill="#FF0000" opacity="0.18" rx="17.371" ry="8.106"/><path d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z" fill="#FFEFB5"/><circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" stroke-width="8"/></svg>
    <div class=" tracking-widest mt-4">
    <span class="text-gray-500 text-6xl block"><span>4  0  4</span></span>
    <span class="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>

    </div>
    </center>
    <center class="mt-6">
    <a href="/" class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </a>
    </center>
  </div>`;

// ---------------------------------------------------------------------

module.exports = {
    homePage,
    userPage1,
    userPage2,
    notFound,

}