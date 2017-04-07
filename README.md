
  A distributed cron with cli and web ui

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Build Status][shippable-image]][shippable-url]

## Installation

```bash
npm install tilloo-plugin-mandrill --save
```

## Features

  * Sends email on job failure via Mandrill/MailChimp
  * Sends email on job recovery via Mandrill/MailChimp
  
## Background

This used to be built directly into Tilloo.  We recently had a need to add some additional notification types and decided to break the notification types out into plugins to not clutter the core project with various SDKs, etc.  

## Getting Started

This package is included in Tilloo by default.  Only thing to do is configure it.

### Configuration

The configuration for the plugin lives inside the Tilloo config.json.

```json
  "notification": {
    "threshold":3600,
    "plugins":{
      "tilloo-plugin-mandrill": {
        "key": "<MANDRILL API KEY>",
        "from_name": "Tilloo Notification",
        "from_email": "<from_email@example.com>",
        "to_email": "<to_email@example.com>"
      }
    }
  }
```

## People

The author is [Chris Kinsman](https://github.com/chriskinsman)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/tilloo-plugin-mandrill.svg?style=flat
[npm-url]: https://npmjs.org/package/tilloo-plugin-mandrill
[downloads-image]: https://img.shields.io/npm/dm/tilloo-plugin-mandrill.svg?style=flat
[downloads-url]: https://npmjs.org/package/tilloo-plugin-mandrill
[shippable-image]: https://api.shippable.com/projects/58e7c1820738ca070057bbb3/badge?branch=master
[shippable-url]: https://app.shippable.com/github/chriskinsman/tilloo-plugin-mandrill
