# Bittorrent example

A simple example of file transfer using Bittorrent protocol.

It uses [bittorrent-tracker](https://github.com/feross/bittorrent-tracker) and [webtorrent](https://github.com/feross/webtorrent) under the hood.

## Steps

1. Install dependencies: `npm install`
2. Start a Bittorrent tracker server on port 8000: `bittorrent-tracker`
3. Open another terminal and start seeding *hello world* with: `node seeder.js`
4. Run this in another terminal: `node leecher.js`

## FAQ

#### How did you generate the magnet hash?

Use `create-torrent` and `magnet-link`.

```
npm install -g create-torrent magnet-link
```

Magnet hash is generated with the following command

```
create-torrent message | magnet-link
```

and then appending the other params like download name and tracker to it. So the above command gives us `magnet:?xt=urn:btih:b8e8adbee320fc312e5fd71479329c3d53c40aea` and we append more params to it so it uses our tracker on port 8000: 
```
magnet:?xt=urn:btih:b8e8adbee320fc312e5fd71479329c3d53c40aea&dn=message&tr=http%3A%2F%2Flocalhost%3A8000%2Fannounce
```

You also get the same magnet link printed to the console if you run the seeder first with `node seeder.js`.

## License 

MIT

## Sponsors

Two Bucks Ltd © 2017

![https://twobucks.co](https://twobucks.co/assets/images/logo-small.png)
