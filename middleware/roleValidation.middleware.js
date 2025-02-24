  const roleValidation = (roles) => (req, res, next) => {
    // ['ADMIN', 'COMPANY']
      if(req.session.user && roles.includes(req.session.user.role)) {
        next();
      } else {
        res.redirect('/iniciar-sesion');
      }
    }
    
    module.exports = {
      roleValidation
    }