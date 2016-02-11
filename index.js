'use strict'

module.exports = function (text, width, char) {
	text = text || ''
	width = width || 15
	char = char || '-'
	var length = Math.ceil((width - text.length) / 2)
	var wrapper = char.repeat(length)
	return wrapper + text + wrapper
}
