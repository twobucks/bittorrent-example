# Bittorrent example

A simple example of file transfer using Bittorrent protocol.

It uses [bittorrent-tracker](https://github.com/feross/bittorrent-tracker) under the hood.

# Steps

1. Install dependencies: `npm install`
2. Create torrent file: `create-torrent package.json -o foo.torrent --announce http://localhost:8000/announce`
3. Start a Bittorrent tracker server on port 8000: `bittorrent-tracker`
4. Open another temrinal and start seeding that torrent with: `node seeder.js`
5. Download contents of that torrent and write it as `package.json.copy`, make sure it's the same as original
`package.json` file. Run this in another terminal: `node leecher.js`

# License 

MIT
