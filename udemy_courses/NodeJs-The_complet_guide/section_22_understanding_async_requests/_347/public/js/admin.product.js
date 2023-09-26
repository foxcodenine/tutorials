class AdminProduct {
    // ----- Constructor -----------------------------------------------

    
    deleteBtns = document.querySelectorAll('#admin-products-delete-btn');
    constructor () {
        this.events();
    }

    // ----- Events ----------------------------------------------------

    events () {        
        this.deleteBtns.forEach((btn)=>{
            btn.addEventListener('click', this.deleteProduct)
        })
    }

    // ----- Methods ---------------------------------------------------

    async deleteProduct(e) {

        try {

            const id = e.target.dataset.productId;
            const parentNode = e.target.parentNode;
            const csrfToken = parentNode.querySelector('[name=_csrf]').value;
            
    
            const result = await fetch(`/admin/api/product/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'csrf-token': csrfToken 
                }
            });  
            
            const data = await result.json()

            console.log(data)
           
            const productEl = e.target.closest('article'); 
            productEl.remove()
            
            // productEl.parentNode.removeChild(productEl);
        } 
        catch (error) {
            console.info(`! admin.products deleteProduct !`)
        }
        

    }

    // -----------------------------------------------------------------
}

new AdminProduct;