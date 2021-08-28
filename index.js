const app = require('express')()

app.get('/', (req, res) => res.json({message: 'Docker is easy! 🐳'}))

app.listen(process.env.PORT || 8080)