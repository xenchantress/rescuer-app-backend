const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
},
filename: function (req, file, cb) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  cb(null, uniqueSuffix + '-' + file.originalname); 
}
});

const fileFilter = (req, file, cb) => {
    if (
        //I'm not sure about the image type yet
file.type === 'image/jpg' ||
file.type === 'image/jpg' ||
file.type === 'image/jpg'  
 ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB file size limit
      },
      fileFilter: fileFilter
    });
    
    module.exports = upload;