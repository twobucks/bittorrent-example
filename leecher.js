var Client = require('bittorrent-tracker')
var parseTorrent = require('parse-torrent')
var fs = require('fs')

var torrent = fs.readFileSync('foo.torrent')
var parsedTorrent = parseTorrent(torrent) // { infoHash: 'xxx', length: xx, announce: ['xx', 'xx'] }

var peerId = new Buffer('01234567890123456780')
var port = 7442

var client = new Client(peerId, port, parsedTorrent)

client.on('error', function (err) {
  console.log('error');
  // fatal client error!
  console.log(err.message)
})

client.on('warning', function (err) {
  console.log('warning');
  // a tracker was unavailable or sent bad data to the client. you can probably ignore it
  console.log(err.message)
})
client.on('update', function (data) {
  console.log('update')
  console.log(data)
  console.log('got an announce response from tracker: ' + data.announce)
  console.log('number of seeders in the swarm: ' + data.complete)
  console.log('number of leechers in the swarm: ' + data.incomplete)
})

client.once('peer', function (addr) {
  console.log('peer')
  console.log('found a peer: ' + addr)
})

client.on('scrape', function (data) {
  console.log('got a scrape response from tracker: ' + data.announce)
  console.log('number of seeders in the swarm: ' + data.complete)
  console.log('number of leechers in the swarm: ' + data.incomplete)
  console.log('number of total downloads of this torrent: ' + data.incomplete)
})

setInterval(function(){
  client.start()
}, 1000)
