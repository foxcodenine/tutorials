
// element.scrollTop
// https://www.w3schools.com/jsref/prop_element_scrolltop.asp
// test:
// window.document.addEventListener('scroll', ()=>{
//     console.log(document.documentElement.scrollTop)
// })

// element.scrollHeight;
// element.scrollWidth; 
// https://www.w3schools.com/jsref/prop_element_scrollheight.asp
// test:
// console.log(document.documentElement.scrollHeight)

// element.clientHeight
// https://www.w3schools.com/jsref/prop_element_clientheight.asp
// test:
// window.document.addEventListener('click', ()=>{
//     console.log(document.documentElement.clientHeight)
// })

// Test All Three:
// window.document.addEventListener('click', ()=>{
//     console.log('scrollTop',document.documentElement.scrollTop);
//     console.log('scrollHieght',document.documentElement.scrollHeight);
//     console.log('clientHieght',document.documentElement.clientHeight);
// })


// _____________________________________________________________________

const elem = {
    postContainer: document.getElementById('post-container'),
    filter: document.getElementById('filter'),
    loader: document.querySelector('.loader')
}

// _____________________________________________________________________


// Fetch post from API
async function getPost(limit, page ) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    const data = await res.json()
    return data
}

// ______________________

// Show post in DOM
function showPost(dataArray) {



             
    dataArray.forEach(post => {
        
        let markup = `  
                    <div class="post-number">${post.id}</div>
                    <div class="post-info">
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-body">
                            ${post.body}
                        </p>
                    </div>`;
  
        const postEl = document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML = markup;
        elem.postContainer.appendChild(postEl);
        
    });   

    if (elem.filter.value.trim() === null) {
        
    }
}

// ______________________

function showLoader() {
    elem.loader.classList.add('show');
}

function removeLoader() {
    elem.loader.classList.remove('show');
}

// ______________________

function filterPost(e) {
    const term = e.target.value.toUpperCase();
    
    const myPost = Array.from(document.querySelectorAll('.post'));

    myPost.forEach(post => {
        const postTitle = post.querySelector('.post-title').innerText.toUpperCase();
        const postBody = post.querySelector('.post-body').innerText.toUpperCase();

        if (postTitle.includes(term) || postBody.includes(term)){
            post.style['display'] = 'flex';
        } else {
            post.style['display'] = 'none';
        }
    });
}

// _____________________________________________________________________


async function init (limit=5, page=1) {

    // _____________________

    const mylimit = limit;
    let mypage = page;

    // _____________________

    const data = await getPost(mylimit, mypage);
    showPost(data);

   // _____________________

    window.document.addEventListener('scroll', async ()=>{
        
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight ) {
            
            showLoader();
            mypage++;

            const data = await getPost(mylimit, mypage);

            setTimeout(()=>{

                removeLoader();

                setTimeout(()=>{                   
                    showPost(data);
                }, 500)

            }, 1000)
        }
    });
    // _____________________

    elem.filter.addEventListener('input', filterPost);
};


init();