import express from "express";
import { registerController,loginController,testController, isAdmin,uploadController } from '../controllers/authController.js'
import { requireSignIn } from "../middleware/authMidd.js";
import Post from '../models/postModel.js'
import upload from "../multer/upload.js";
const router = express.Router()

//register route
router.post('/register',registerController);

//Login route
router.post('/login',loginController);

//test route
router.post('/test',requireSignIn , isAdmin,testController);


router.post("/api/v1/auth/upload", (req, res) => {
  console.log("Received body:", req.body);  // 👀 Check this
});
router.post("/upload", upload.single("img"), async (req, res) => {
  try {
    console.log("File:", req.file);
    console.log("Body:", req.body);

    const { name, price, desc, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newPost = new Post({
      img: req.file.path.replace(/\\/g, "/"),
      name,
      price,
      desc,
      category,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Upload Error:", error.message); // ✅ log exact issue
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
});



export default router;