'use strict'

const $ = require('./config.js')

console.log($.yo.coreVersion)

$.setParams()

$.readFolder($.tasks)