const router = require('express').Router();
//db
const mysql = require('../db');
// Express files body
const multer = require('multer')
const path = require('path')


// Multer
// SET STORAGE
var storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname))
  }
})

router.use(multer({storage: storageConfig}).single('image'));
router.post("/add_doc", function (req, res, next) {
    if(!req.file) res.send("Ошибка при загрузке файла")
    else {
    	console.log("Request file: ", req.file);
    	console.log("Request body: ", req.body.author);

    	var sql = `INSERT INTO docs (
	    	author, 
		    img, 
		    textBody
	    ) VALUES (
		    '${req.body.author}', 
		    '${req.file.filename}', 
		    '${req.body.textBody}'
	    )`

	    mysql.query(sql, (err, result) => {
	    	console.log(result)
		});
		    res.redirect("/")
	}
});

// const upload = multer({
// 	storage,
// 	limits: { fileSize: 2 * 1024 * 1024 },
// 	fileFilter: (req, file, cb) => {
// 		const ext = path.extname(file.originalname)
// 		if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
// 			const err = new Error('Extention')
// 			err.code = "EXTENTION"
// 			return cb(err)
// 		}
// 		cb(null, true)
// 	}
// }).single('image')

// router.post('/add_img', (req, res) => {
// 	upload(req, res, err => {
// 		let error = ''
// 		if (err.code === 'LIMIT_FILE_SIZE') {
// 			error = "Изображение не более 2 мб."
// 		}
// 		if (err.code === 'EXTENTION') {
// 			error = "Не допустимый формат изображения (только .jpg, .jpeg, .png)"
// 		}

// 		console.log('Изображение: ', req.body)
// 	})
// 	res.redirect('/')
// });


router.get('/', (req, res) => {
mysql.query(`SELECT * FROM docs`, (err, result) => {
	// console.log('Документы обнаруже/нные в БД:', result)
	res.render('index', {
		docs: result
	});
});

	
});


module.exports = router;

// Реализуй функцию добавления документов