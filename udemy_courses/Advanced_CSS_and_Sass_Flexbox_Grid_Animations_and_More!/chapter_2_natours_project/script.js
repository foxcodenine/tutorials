window.addEventListener('click', e=>{
    const mainBtn = e.target.matches('.btn-animated, .btn-animated *')

    if (mainBtn) setTimeout(()=>{
        window.location.reload();
    }, 100);
});