const assert = require('assert/strict')
const getFavicon = require('../lib/index.js')

const runner = (name, { input, output }) => {
  try {
    console.log(`Running: '${name}':\n`)

    const result = getFavicon(input)
    assert.strictEqual(result, output)

    console.log('Passed!\n')
  } catch (error) {
    console.error(error.message)
  }
}

runner('Simple usage with { hostname }', {
  input: { hostname: 'youtube.com' },
  output: 'https://icon.horse/icon/youtube.com'
})

runner('Simple usage with { uri }', {
  input: { uri: 'https://en.wikipedia.org/wiki/1986' },
  output: `https://icon.horse/icon/?uri=${encodeURIComponent('https://en.wikipedia.org/wiki/1986')}`
})

runner('With custom size <small:medium:big>', {
  input: { hostname: 'youtube.com', size: 'small' },
  output: 'https://icon.horse/icon/youtube.com?size=small'
})

runner('With custom size <int>', {
  input: { hostname: 'youtube.com', size: 86 },
  output: 'https://icon.horse/icon/youtube.com?size=medium'
})

runner('Usage with { apikey }', {
  input: { hostname: 'youtube.com', apikey: 'wow' },
  output: 'https://icon.horse/icon/youtube.com?apikey=wow'
})

runner('Usage with { fallbackText, fallbackBg }', {
  input: { hostname: 'youtube.com', fallbackText: 'ffffff', fallbackBg: '000000' },
  output: 'https://icon.horse/icon/youtube.com?fallback_text=ffffff&fallback_bg=000000'
})

runner('Kitchen sink', {
  input: {
    hostname: 'youtube.com',
    fallbackText: 'ffffff',
    fallbackBg: '000000',
    apikey: 'wow',
    size: 86
  },
  output: 'https://icon.horse/icon/youtube.com?apikey=wow&fallback_text=ffffff&fallback_bg=000000&size=medium'
})
