'use strict'

const yo = require('./../.yo-rc.json')

console.log(yo['generator-speedseed']['core-version'])

const $ = require('./config.js')

$.setParams()

$.readFolder($.tasks)