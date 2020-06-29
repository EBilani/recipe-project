let app = require('express');
let multer = require('multer');
let router = app.Router();
let Model = require('../models/recipe');
let Category=require('../models/category');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../recipe-frontend/src/assets/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg or .png files are accepted'), false);
    }
};

let upload = multer({
    storage: storage,
     limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

// INSERT A RECIPE 
router.post('/recipe', upload.single('image'), async (req, res) => {
    try {

        let file = new Model({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            cat_name: req.body.cat_name,
            ingrediends:req.body.ingrediends
        });
        if (!file) { return res.status(403).send('not found file') }
        let data = await file.save();

        res.send({
            message: 'Content inserted in database 😀',
            data: data
        });
    }

    catch (ex) {
        res.send(ex.message);
    }
});

// A LIST OF RECIPES
router.get('/allRecipes',Model.findAll  = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Model.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving recipes."
        });
      });
  });
  //FIND RECIPES BY CATEGORY NAME
  router.get('/recipeByCat', (req, res) => {
   const cat_name=req.query.cat_name;
   var condition=cat_name ? { cat_name: { $regex: new RegExp(cat_name), $options: "i" } } : {};
   Model.find(condition)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while retrieving tutorials."
     });
   });
});

//RETRIEVE ALL RECIPES BY SEARCHING WITH TITLE 
router.get('/searchByTitle', (req,res)=>{
  const name=req.query.name;
  var condition=name ? {name: { $regex:new RegExp(name), $options:"i"}}: {};
  Model.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
})
  // LIST OF CATEGORIES
  router.get('/categoryName',Category.findAll  = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
    Category.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving recipes."
        });
      });
  });
  //GET A DETAIL RECIPE BY ID
  router.get('/getById/:id', Model.findOne, (req,res)=>{
    const id=req.params.id;
    Model.findById(id)
    .then(data=>{
      if(!data)
       res.status(404).send({message:"Not found recipe with id " +id});
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving recipe with id=" + id });
    });

  })

module.exports = router;