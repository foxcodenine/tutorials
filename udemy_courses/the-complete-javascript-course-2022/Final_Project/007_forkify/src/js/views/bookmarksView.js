// NOTE: This class redundated and now we are using previewsView.js 
// NOTE: For both bookmarks and results

// import AbstractView from './_abstractView.js';
// import icons from 'url:../../img/icons.svg'; // Parcel 2



// class BookmarksView extends AbstractView {

//     _parentElement = document.querySelector('.bookmarks__list');                // <- update
//     _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';    // <- update
//     _successMessage = '';                                                       // <- update

//     // _____________________________________________

//     _generateMarkup() {

//         const id = window.location.hash.slice(1); 

//         const markupArray = this._data.map(item => {
    
//             const activeClass = id == item.id ? 'preview__link--active' : '';

//             return `
//                 <li class="preview">
//                     <a class="preview__link ${activeClass}" href="#${item.id}">
//                         <figure class="preview__fig">
//                             <img src="${item.image}" alt="${item.title}" />
//                         </figure>
//                         <div class="preview__data">
//                             <h4 class="preview__title">${item.title}</h4>
//                             <p class="preview__publisher">${item.publisher}</p>
//                         </div>
//                     </a>
//                 </li>
//             `;
//         })

//         const markup = markupArray.join('');

//         return markup;
//     }
// }


// export default new BookmarksView();                                             // <- update