const ICON_SIZES = {
  small: [ 0, 64 ],
  medium: [ 65, 192 ],
  big: [ 193, 1000 ]
}

module.exports = ({ hostname, uri, size, apikey, fallbackText, fallbackBg } = {}) => {
  const params = []
  let favicon = 'https://icon.horse/icon/'

  if (hostname) favicon += hostname
  if (uri && !hostname) params.push(`uri=${encodeURIComponent(uri)}`)
  if (apikey) params.push(`apikey=${apikey}`)
  if (fallbackText) params.push(`fallback_text=${fallbackText}`)
  if (fallbackBg) params.push(`fallback_bg=${fallbackBg}`)

  if (size && typeof size === 'string') params.push(`size=${size}`)
  else if (size && typeof size === 'number') {
    let sizeKey = 'big'

    for (const sizeSlug of Object.keys(ICON_SIZES)) {
      const row = ICON_SIZES[sizeSlug]

      if (row[0] < size && row[1] >= size) sizeKey = sizeSlug
    }

    params.push(`size=${sizeKey}`)
  }

  if (params.length > 0) favicon += `?${params.join('&')}`

  return favicon
}
