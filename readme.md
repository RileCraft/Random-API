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
* `get8ball()`
* `getRandomNumber(smaller number, bigger number)`
* `getPassword(number)`
* `getRandomText(["option1", "option2", "option3" . . .])`
* `getRandomPersonData("option")`
<br>∟ `name , gender , city , state , street , country , postcode , timezone , email , phone , photo , birthday , age`

# Credits to
* [Some Random API](https://some-random-api.ml)
* [No Key API](http://no-api-key.com)
* [Cryptons API](https://cryptons.ga)
* [Random-D.uk](https://random-d.uk)
* [PopCatDev](https://popcat.xyz/api)
* [CatAAS API](https://cataas.com)
* [AWS Cat](http://aws.random.cat)
* [The Cat API](https://thecatapi.com)
* [Tenor](https://tenor.com)
* [AceGifs](https://acegif.com)
* [GifBurg](https://gifburg.com)
* [DogCeo](https://dog.ceo)
* [Random User API](https://randomuser.me/)
* [Xenith API](https://api.xenith.pl)
* [RandomFox API](https://randomfox.ca)
* [RandomQuotes Package](https://www.npmjs.com/package/random-quotes)

### Note (❗)
* Any abuse done to the API(s) using this package are NOT our responsibility. It is the responsibility of the person that was abusing using the package.