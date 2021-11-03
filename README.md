# favicon-fetch

This package quickly gives you a URL for any website's favicon.

Uses the [Icon Horse](https://icon.horse) service to fetch the icon.

## Installing

```
npm install favicon-fetch
```

or:


```
yarn add favicon-fetch
```

## Basic usage

```js
// First, import the package:
const faviconFetch = require('favicon-fetch')
// or:
import faviconFetch from 'favicon-fetch'

faviconFetch({ hostname: 'wikipedia.org' })
//-> The URI for an icon: https://icon.horse/icon/wikipedia.org

// Alternatively, use any URI:
faviconFetch({ uri: 'https://en.wikipedia.org/wiki/1986' })
//-> The URI for an icon: https://icon.horse/icon/wikipedia.org
```

The icon returned looks like this:

![Wikipedia icon](https://icon.horse/icon/wikipedia.org)

## Use with React

It's super easy to use with React. Here's a sample component:

```jsx
import faviconFetch from 'favicon-fetch'

export default ({ websiteUrl }) => {
  return (
    <a href={websiteUrl}>
      <img src={faviconFetch({ uri: websiteUrl })} />
    </a>
  )
}
```

## Additional options

Currently, both the fallback functionality and the `size` param require an `apikey` (read about getting one [here](https://icon.horse/pro)).

```js
faviconFetch({
  // hostname or uri

  // This will return a different sized icon if available
  size: 'small|medium|big',

  // If no icon is reachable, a fallback image is shown. These two options control the colour
  fallbackText: 'FFFFFF',
  fallbackBg: '000000',

  // If you have an Icon Horse API key
  apikey: ''
})
```
