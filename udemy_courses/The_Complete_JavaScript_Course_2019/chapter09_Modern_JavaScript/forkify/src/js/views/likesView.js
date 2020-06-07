import { elements } from './base';
import { limitRecipeTitle } from './searchView'

export const toggleLikeBtn = isLiked => {

    
    const iconString = isLiked ? 'img/icons.svg#icon-heart' : 'img/icons.svg#icon-heart-outlined';

    document.querySelector('.recipe__love use').setAttribute('href', iconString);
    

};

export const toggleLikeIcon = (likesNum=0) => {

    elements.likeIcon.style.visibility = likesNum > 0 ? 'visible' : 'hidden';
};



export const renderLike = like => {

    const markup = `    
                    <li>
                        <a class="likes__link" href="#${like.id}">
                            <figure class="likes__fig">
                                <img src="${like.img}" alt="${(like.title)}">
                            </figure>
                            <div class="likes__data">
                                <h4 class="likes__name">${limitRecipeTitle(like.title, 17)}</h4>                                
                            </div>
                        </a>
                    </li> `
    
    elements.likeContainer.insertAdjacentHTML('beforeend', markup);    

}

export const deleteLike = id => {

    const el = document.querySelector(`.likes__link[href="#${id}"]`).parentElement

    if (el) el.parentElement.removeChild(el);
};



export const clearLikes = () => {
    elements.likeContainer.innerHTML = '';
};