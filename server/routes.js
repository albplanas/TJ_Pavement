const passport    = require('passport');


module.exports = function (app,Users) {
      
    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/desAuth');
      };
    
/***********************************************************
*                  ROUTES
************************************************************/
      app.route('/desAuth')
        .get((req, res) => {
     
            res.json({login:false, username:""});
       
        });
    
      app.route('/login')
        .post(passport.authenticate('local', { failureRedirect: '/desAuth' }),(req,res) => {
           
             res.redirect('/profile');
        });
    
      app.route('/editProfile')
        .post( (req, res) => {
            
            Users.update({ username: req.body.username }, { $set: { profile: req.body }},function (err, user) {
                   
                res.json({mess:"Done"})

            });

        });

        app.route('/saveProject')
                .post( (req, res) => {
                    
                    //Updatear todo el projecto
                    Users.update({ username: req.body.username }, { $set: { worksheet: req.body.arr }},function (err, user) {
                   
                            res.json({mess:"Done"})
        
                    });

        });
    
        app.route('/profile')
        .get(ensureAuthenticated, (req, res) => {

            Users.findOne({ username: req.user.username }, function (err, user) {
                   
                    res.json({ login:true , username:req.user.username , profile : user.profile , papers : user.worksheet});

                }
            )
         
         
        });


      app.route('/register')
        .post((req, res, next) => {
            
           Users.findOne({ username: req.body.username }, function (err, user) {
               
                if(err) {
                    next(err);
                } else if (user) {
                    res.redirect('/desAuth');
                } else {

                  Users.create( {
                      username: req.body.username,
                      password: req.body.password ,
                      worksheet:[],
                      profile: {username: req.body.username,
                                src           : "",
                                email         : "",
                                status        : "",
                                location      : ""

                }}, (err, doc) => {
                          if(err) {
                              res.redirect('/desAuth');
                          } else {
                              next(null, user);
                          }
                      });
                }
            })},
          passport.authenticate('local', { failureRedirect: '/desAuth' }),
          (req, res, next) => {
              res.redirect('/profile');
          }
      );
    
      app.route('/logout')
        .get((req, res) => {
           
            req.logout();
            
            res.redirect('/desAuth');
        });

/****************************************************
 *               Catch some errors
 * ***************************************************/          
        app.use((req, res, next) => {
            res.status(404)
            .type('text')
            .send('Not Found');
        });
  
}