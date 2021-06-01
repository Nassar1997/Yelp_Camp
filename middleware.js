<<<<<<< HEAD
module.exports.isLoggedIn = (req, res, next) => {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must be signed in first');
        return res.redirect('/login');
    }
    next();
=======
module.exports.isLoggedIn = (req, res, next) => {
    req.session.returnTo = req.originalUrl;
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must be signed in first');
        return res.redirect('/login');
    }
    next();
>>>>>>> 91607ee047482d3094d78fdb590f227112346a6c
}