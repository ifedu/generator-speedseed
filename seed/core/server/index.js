const config = require('../config.js')

const fs = require('fs')
const express = require('express')

const app = express()

const methods = ['post', 'get', 'put', 'patch', 'delete']

for (let i = 0, l = methods.length; i < l; i++) {
    app[methods[i]]('*', (req, res) => {
        if (req.url.indexOf(`${config.server.request}/`) !== -1) {
            const filePath = `server${req.url}/index.json`

            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res
                    .status(404)
                    .json({ error: 'mock not found' })
                } else {
                    setTimeout(() =>
                        res.json(JSON.parse(data)),
                        1000
                    )
                }
            })
        } else {
            res.redirect('/')
        }
    })
}

app.listen(config.server.port, () => console.log(`Connected on port ${config.server.port}`))