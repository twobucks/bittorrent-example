# Bittorrent example

A simple example of file transfer using Bittorrent protocol.

It uses [bittorrent-tracker](https://github.com/feross/bittorrent-tracker) and [webtorrent](https://github.com/feross/webtorrent) under the hood.

# Steps

1. Install dependencies: `npm install`
2. Start a Bittorrent tracker server on port 8000: `bittorrent-tracker`
3. Open another terminal and start seeding *hello world* with: `node seeder.js`
4. Run this in another terminal: `node leecher.js`

# License 

MIT
