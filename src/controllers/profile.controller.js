const Profile = require('../models/Profile')

// @desc    Get profile
// @route   GET /api/profile
// @access  Public
const getProfiles = async (req, res) => {
    try {
        const profile = await Profile.findOne()
        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// @desc    Create / Update profile
// @route   POST /api/profile
// @access  Private
const setProfile = async (req, res) => {
    try {
        const { history, vision, mission } = req.body

        if (!history || !vision || !mission) {
            return res.status(400).json({ message: 'Please add all fields' })
        }

        // hanya satu profile sekolah
        let profile = await Profile.findOne()

        if (profile) {
            profile.history = history
            profile.vision = vision
            profile.mission = mission
            await profile.save()
        } else {
            profile = await Profile.create({
                history,
                vision,
                mission
            })
        }

        res.status(200).json(profile)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// @desc    Update profile
// @route   PUT /api/profile
// @access  Private
const updateProfile = async (req, res) => {
    try {
        const { history, vision, mission } = req.body

        if (!history || !vision || !mission) {
            return res.status(400).json({ message: 'Please add all fields' })
        }

        const profile = await Profile.findOne()

        if (profile) {
            profile.history = history
            profile.vision = vision
            profile.mission = mission
            const updatedProfile = await profile.save()
            res.status(200).json(updatedProfile)
        } else {
            res.status(404).json({ message: 'Profile not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// @desc    Delete profile
// @route   DELETE /api/profile
// @access  Private
const deleteProfile = async (req, res) => {
    try {
        await Profile.deleteMany()
        res.status(200).json({ message: 'Profile deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProfiles,
    setProfile,
    updateProfile,
    deleteProfile,
}
