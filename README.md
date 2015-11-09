## Resumetring

A simple library to resume a string.

### Install

```
npm install resumetring
```

### Usage

```
require('resumetring');

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

str.resume(); // Lorem ipsu...

str.resume(20); // Lorem ipsum dolor si...

str.resume(20, ' [read more]'); // Lorem ipsum dolor si [read more]
```

### Testing

Tests made with `jest`

```
npm test
```

### License

MIT