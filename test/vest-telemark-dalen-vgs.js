'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3850,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Dalen returns false from 3960 Stathelle')
