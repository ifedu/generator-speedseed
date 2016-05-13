'use strict'

const yo = require('./.yo-rc.json')

console.log(yo['generator-speedseed']['-core_version'])

const $ = require('./-/config.js')

$.setParams()

$.readFolder($.tasks)