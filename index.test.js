'use strict'

const tap = require('tap')
const asn1 = require('./index')

tap.test('exports BerReader', async t => {
  const { BerReader } = asn1
  t.ok(BerReader)

  const reader = new BerReader(Buffer.from([0x00]))
  t.type(reader, BerReader)
  t.equal(Object.prototype.toString.call(reader), '[object BerReader]')
})
