export default class Likes {
    
    // Init a new empty list:
    constructor() {
        this.likes = [];
    }
    

    // Add recipe to list:
    addLike(id, title, img) {

        const like = {id, title, img};
        this.likes.push(like);
        return like;
    }


    // Remove from list:
    deleteLike(id) {

        const index = this.likes.findIndex(el => el.id === id );
        this.likes.splice(index, 1);
    }


    // Check if recipe is liked:
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id)    !==    -1;
    }


    // Get number of likes:
    getNumLikes() {
        return this.likes.length;
    }
}