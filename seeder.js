var Client = require('bittorrent-tracker')
var parseTorrent = require('parse-torrent')
var fs = require('fs')

var torrent = fs.readFileSync('foo.torrent')
var parsedTorrent = parseTorrent(torrent) // { infoHash: 'xxx', length: xx, announce: ['xx', 'xx'] }

var peerId = new Buffer('13234567890123456789')
var port = 7444

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
  console.log('found a peer: ' + addr) // 85.10.239.191:48623
})

client.on('scrape', function (data) {
  console.log('got a scrape response from tracker: ' + data.announce)
  console.log('number of seeders in the swarm: ' + data.complete)
  console.log('number of leechers in the swarm: ' + data.incomplete)
  console.log('number of total downloads of this torrent: ' + data.incomplete)
  console.log(data)
})

client.complete() // start seeding?
client.scrape()
setInterval(function(){
  client.start()
})
