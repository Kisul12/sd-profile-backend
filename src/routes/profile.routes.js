const express = require('express')
const router = express.Router()

const {
    getProfiles,
    setProfile,
    updateProfile,
    deleteProfile,
} = require('../controllers/profile.controller')

const { protect } = require('../middleware/auth')

// public
router.get('/', getProfiles)

// admin
router.post('/', protect, setProfile)
router.put('/', protect, updateProfile)
router.delete('/', protect, deleteProfile)

module.exports = router
