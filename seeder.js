var WebTorrent = require('webtorrent')
var client = new WebTorrent()
client.seed('message', {announceList: [["http://localhost:8000/announce"]]}, function(torrent){
  console.log('Client is seeding:', torrent.magnetURI)
})
