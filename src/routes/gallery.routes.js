const express = require('express');
const router = express.Router();
const {
    getGallery,
    getGalleryById,
    setGallery,
    updateGallery,
    deleteGallery,
} = require('../controllers/gallery.controller');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/uploadMiddleware');

router.route('/').get(getGallery).post(protect, upload.single('image'), setGallery);
router.route('/:id').get(getGalleryById).put(protect, upload.single('image'), updateGallery).delete(protect, deleteGallery);

module.exports = router;
