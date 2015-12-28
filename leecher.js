var WebTorrent = require('webtorrent')

var client = new WebTorrent()
var magnetUri = "magnet:?xt=urn:btih:b8e8adbee320fc312e5fd71479329c3d53c40aea&dn=message&tr=http%3A%2F%2Flocalhost%3A8000%2Fannounce"

client.add(magnetUri, function (torrent) {
  // Got torrent metadata!
  console.log('Client is downloading:', torrent.infoHash)

  torrent.files.forEach(function (file) {
    file.getBuffer(function (er, buf) {
      console.log(buf.toString())
    })
  })
})
