# Random API Package
### This packages is made of many APIs and manually selected gifs array. This package will include things like images , facts etc. We try our best to keep it updated and easy to use.

# Example Usage:
## In Async
```js
(async () => {
const animals = require("@rilecraft/random-api")
const duck = await animals.getDuck()
console.log(duck)
})()
```

## Without Async
```js
const animals = require("@rilecraft/random-api")
animals.getDuck().then(res => {
console.log(res)
})
```

# Avaliable Functions List
## Random Animal Images
* `getDog()`
* `getCat()`
* `getFox()`
* `getDuck()`
* `getPanda()`
* `getBird()`
* `getBear()`
* `getKoala()`
## Random Animal Facts
* `getDogFacts()`
* `getCatFacts()`
* `getFoxFacts()`
* `getDuckFacts()`
* `getPandaFacts()`
* `getBirdFacts()`
* `getBearFacts()`
* `getKoalaFacts()`
## Anime Gifs 
* `getHug()`
* `getSleep()`
* `getPunch()`
* `getSlap()`
* `getPat()`
* `getPout()`
* `getKiss()`
* `getWasted()`
## Misc 
* `getQotd()`
* `getQuotes()`

# Credits to
* [Some Random API](https://some-random-api.ml)
*


### Note (❗)
* Any abuse done to the API(s) using this package are NOT our responsibility. It is the responsibility of the person that was abusing using the package.