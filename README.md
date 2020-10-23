# InvoiceRobot

[![CircleCI](https://circleci.com/gh/BjoernKW/InvoiceFetcher.svg?style=shield)](https://circleci.com/gh/BjoernKW/InvoiceFetcher)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/github/package-json/v/BjoernKW/InvoiceFetcher.svg?style=shield)

InvoiceRobot is a [Node.js](https://nodejs.org/) script that uses [Puppeteer](https://pptr.dev/) for triggering invoice
delivery from password-protected customer portals and member sites.

Currently, only the [Deutsche Bahn](https://www.bahn.de/) website is supported.

For more information about this tool and the rationale behind it pleaee have a look at
[this blog post](https://bjoernkw.com/2020/08/02/automating-fetching-incoming-invoices-with-puppeteer/).

## Usage

In order to install and use *InvoiceRobot* all you have to do is clone this repository
and then run ```npm link``` in the project's root folder.

This will create a symlink to the main ```index.js``` script under the name ```invoice-fetcher``` in your global
```node_modules``` folder, which in turn will allow you to run the ```invoice-fetcher``` command from anywhere on your
machine.

Afterwards, you can simply run 

```shell script
$ invoice-fetcher $DB_USERNAME $DB_PASSWORD $DB_INVOICE_NUMBERS
```

in order for *InvoiceRobot* to retrieve the Deutsche Bahn invoices specified by whitespace-delimited invoice numbers
under ```$DB_INVOICE_NUMBERS```.

## Built With

* JavaScript
* [Node.js](https://nodejs.org/)
* [Puppeteer](https://pptr.dev/)

## License

MIT License

## Authors

* **[Björn Wilmsmann](https://bjoernkw.com)**
