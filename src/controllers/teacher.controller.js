const Teacher = require('../models/Teacher');

// @desc    Get teachers
// @route   GET /api/teachers
// @access  Public
const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Set teacher
// @route   POST /api/teachers
// @access  Private
const setTeacher = async (req, res) => {
    try {
        if (!req.body.name || !req.body.nip || !req.body.subject) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        let photoUrl = req.body.photoUrl || '';
        if (req.file) {
            photoUrl = req.file.path;
        }

        const teacher = await Teacher.create({
            name: req.body.name,
            nip: req.body.nip,
            subject: req.body.subject,
            photoUrl: photoUrl
        });

        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update teacher
// @route   PUT /api/teachers/:id
// @access  Private
const updateTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            res.status(400);
            throw new Error('Teacher not found');
        }

        let updateData = req.body;
        if (req.file) {
            updateData.photoUrl = req.file.path;
        }

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete teacher
// @route   DELETE /api/teachers/:id
// @access  Private
const deleteTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            res.status(400);
            throw new Error('Teacher not found');
        }

        await teacher.deleteOne();

        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTeachers,
    setTeacher,
    updateTeacher,
    deleteTeacher,
};
