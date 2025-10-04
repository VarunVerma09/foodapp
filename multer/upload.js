import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "client/public/images/uploads"); 
  },
  filename: function (req, file, cb) {
    const fn = crypto.randomBytes(16).toString("hex") + path.extname(file.originalname);
    cb(null, fn);
  },
});

// Export multer 
const upload = multer({ storage: storage });
export default upload;
