# timespent

[![Build Status](https://travis-ci.org/announce/timespent.svg?branch=master)](https://travis-ci.org/announce/timespent)

## Prerequisite

* Docker
  * Verified with: Version 18.06.0-ce-mac70
* Node v8.11.x
* Yarn v1.9.x

## Development

Run the command below:

```bash
./pj start
```

For the release:

```bash
export FIREBASE_API_KEY="__YOURS_HERE__"
./pj release
```

Then you will get the crx zipfile in `./var`.

## Project Links

* Task tracker: [trello](https://trello.com/c/WGVCIKVj/32-app-implementation)
* Upstream work: [trunk](https://github.com/announce/timespent/compare/master...ymkjp:master)
* Demo app: [crx](https://chrome.google.com/webstore/detail/timespent/plbhlfecmbmkphfgcpoijlidjapddidj?utm_source=github)
* Release: [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)

## Documents

* CRX
  * [Declare Permissions](https://developer.chrome.com/extensions/declare_permissions)
  * [chrome\.i18n](https://developer.chrome.com/extensions/i18n)
* ImageMagick
  * [Text Handling \- IM v6](http://www.imagemagick.org/Usage/text/#label_bestfit)
