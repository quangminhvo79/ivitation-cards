const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fs = require("fs")

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/ivitation-card',(req, res) => {
  let invite_code = req.query.invite_code
  let card_path = path.join(__dirname, 'assets', 'images', 'cards', `${invite_code}.png`)

  if( fs.existsSync( card_path ) ){
    res.render('ivitation_card', { card_path: `/images/cards/${invite_code}.png`, invite_code: invite_code })
  } else {
    res.render('ivitation_card', { card_path: null })
  }
})

app.get('/invite/:folder/:invite_code', (req, res) => {
  let invite_code = req.params.invite_code
  let folder      = req.params.folder

  video_path = path.join(__dirname, 'assets', 'videos', folder, `${invite_code}.mp4`)

  if( fs.existsSync( video_path ) ){
    res.render('index', { video_path: `/videos/${folder}/${invite_code}.mp4`, title: 'Banca Night 2022 - Prudential' })
  } else {
    res.send('404')
  }
})

app.use( express.static(path.join(__dirname, 'assets') ) )
app.set('views', __dirname + '/views');
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
