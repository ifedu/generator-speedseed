'use strict'

const util = require('gulp-util')
console.log(util.env)

const yo = require('./.yo-rc.json')

console.log(yo['generator-speedseed']['-ss_version'])

const $ = require('./-ss/config.js')

$.readFolder($.tasks)