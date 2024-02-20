const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/multer');


router.post('/upload-avatar', upload.single('avatar'), (req, res) => {

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const filename = req.file.filename;
  
  res.json({ message: 'File uploaded successfully', filename: filename });
});

module.exports = router;