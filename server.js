const express = require('express')
const app = express()
const cors = require('cors')

const controller = require('./routes/characterRoutes')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', controller)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))