const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require("fs")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/:invite_code', (req, res) => {
  let invite_code = req.params.invite_code

  video_path = path.join(__dirname, 'assets', 'videos', `${invite_code}.mp4`)

  if( fs.existsSync( video_path ) ){
    res.render('index', { video_path: `videos/${invite_code}.mp4` })
  } else {
    res.send('404')
  }
})

app.use( express.static(path.join(__dirname, 'assets') ) )
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
