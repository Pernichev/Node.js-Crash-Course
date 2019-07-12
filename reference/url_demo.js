const url = require('url');

const myUrl = new URL('https://examplewsite.com:8000/hello.html?id=9000&status=online');

// Serialized URL

console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (doesn't get port)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params obj
console.log(myUrl.searchParams);

// Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
