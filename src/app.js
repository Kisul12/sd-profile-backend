const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const profileRoutes = require('./routes/profile.routes')
const teacherRoutes = require('./routes/teacher.routes')
const galleryRoutes = require('./routes/gallery.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/teachers', teacherRoutes)
app.use('/api/gallery', galleryRoutes)

module.exports = app