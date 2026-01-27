const Gallery = require('../models/Gallery');


// @desc    Get gallery items
// @route   GET /api/gallery
// @access  Public
const getGallery = async (req, res) => {
    try {
        const gallery = await Gallery.find();
        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get gallery item by ID
// @route   GET /api/gallery/:id
// @access  Public
const getGalleryById = async (req, res) => {
    try {
        const gallery = await Gallery.findById(req.params.id);

        if (!gallery) {
            return res.status(404).json({ message: 'Gallery item not found' });
        }

        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// @desc    Set gallery item
// @route   POST /api/gallery
// @access  Private
const setGallery = async (req, res) => {
    try {
        let imageUrl = req.body.imageUrl;
        if (req.file) {
            imageUrl = req.file.path;
        }

        if (!req.body.title || !imageUrl) {
            return res.status(400).json({ message: 'Please add required fields (title and image)' });
        }

        const gallery = await Gallery.create({
            title: req.body.title,
            description: req.body.description,
            imageUrl: imageUrl,
        });

        res.status(200).json(gallery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update gallery item
// @route   PUT /api/gallery/:id
// @access  Private
const updateGallery = async (req, res) => {
    try {
        const gallery = await Gallery.findById(req.params.id);

        if (!gallery) {
            res.status(400);
            throw new Error('Gallery item not found');
        }

        let updateData = req.body;
        if (req.file) {
            updateData.imageUrl = req.file.path;
        }

        const updatedGallery = await Gallery.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.status(200).json(updatedGallery);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete gallery item
// @route   DELETE /api/gallery/:id
// @access  Private
const deleteGallery = async (req, res) => {
    try {
        const gallery = await Gallery.findById(req.params.id);

        if (!gallery) {
            res.status(400);
            throw new Error('Gallery item not found');
        }

        await gallery.deleteOne();

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getGallery,
    getGalleryById,
    setGallery,
    updateGallery,
    deleteGallery,
};
