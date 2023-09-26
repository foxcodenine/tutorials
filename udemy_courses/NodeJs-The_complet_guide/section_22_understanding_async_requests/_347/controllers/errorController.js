exports.get404 = function (req, res, next) {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404', layout: false,});
};
exports.get500 = function (req, res, next) {
    res.status(500).render('500', { pageTitle: 'Error', path: '/500', layout: false,});
};