export default class Likes {
    
    // Init a new empty list:
    constructor() {
        this.likes = [];
    }
    

    // Add recipe to list:
    addLike(id, title, img) {

        const like = {id, title, img};
        this.likes.push(like);

        // Perist data in localStorage
        this.persistData();

        return like;
    }


    // Remove from list:
    deleteLike(id) {

        const index = this.likes.findIndex(el => el.id === id );
        this.likes.splice(index, 1);

        // Perist data in localStorage
        this.persistData();
    }


    // Check if recipe is liked:
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id)    !==    -1;
    }


    // Get number of likes:
    getNumLikes() {
        return this.likes.length;
    }

    // Insert likes to localStorage
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    // Restore likes from localStorage
    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));

        if (storage) this.likes  = storage;
    }
}