const express = require('express');
const router = express.Router();
const {
    getTeachers,
    setTeacher,
    updateTeacher,
    deleteTeacher,
} = require('../controllers/teacher.controller');
const { protect } = require('../middleware/auth');
const upload = require('../middleware/uploadMiddleware');

router.route('/').get(getTeachers).post(protect, upload.single('photo'), setTeacher);
router.route('/:id').put(protect, upload.single('photo'), updateTeacher).delete(protect, deleteTeacher);

module.exports = router;
