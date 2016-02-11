import test from 'ava'
import hr from './'

test('hr', t => {
	t.is(hr('starting'), '----starting----')
	t.is(hr(), '----------------')
})
