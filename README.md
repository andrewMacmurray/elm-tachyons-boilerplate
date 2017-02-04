# Elm Tachyons Boilerplate

A simple setup for two fantastically functional frontend technologies

## Why?

[Elm](http://elm-lang.org/) and [Tachyons](http://tachyons.io/) are both brilliant technologies to build robust and beautiful UIs

> Tachyons - "Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible."

> Elm - "A delightful language for reliable webapps."

They also both have *very* quick start setups (which is great)

for elm:

```sh
> elm reactor
```

and go visit `localhost:8080`

and for tachyons:

add this to your html file

```html
<link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
```

Super simple right?

However

One problem I encountered was once you've played around a bit with the elm-reactor and want to start getting serious about building something there's a bit more setup involved (for both technologies)

This boilerplate is a relatively minimal setup, designed to get you off to a quick start using both of them together but with finer control over customising each

## How?

#### For Elm: `chokidar`

One thing I dislike about some SPA (single page app) boilerplates is how complex the setup is (large and confusing `webpack.config.js` files, opinionated file structures etc). Although it may seem like more work in the long run, increasing the complexity of your build environment as your project grows I feel is much more sustainable.

[`chokidar`](https://github.com/paulmillr/chokidar) I think is a nice middle ground (inspired by [this article](https://maximilianhoffmann.com/posts/how-to-compile-elm-files-on-save))

> Chokidar - "A neat wrapper around node.js fs.watch / fs.watchFile / fsevents"

Chokidar will watch for changes in your elm files and recompile on save

#### For Tachyons: `postCSS`

> PostCSS - "A tool for transforming CSS with JavaScript"

Tachyons has some fantastic default styles, but changing some of them is not as straightforward as adding a script tag.

The boilerplate uses [`postCSS`](http://postcss.org/) to bundle all the individual tachyons modules together in `app/css/main.css` and apply custom variables from the other files in `app/css/`. The boilerplate also uses a fork of Tachyons called [Tachyons Custom](https://github.com/tachyons-css/tachyons-custom) - which moved the custom variables into one file (I have however chosen to put them in multiple files to make editing them a little clearer).


## Get Started

To compile the CSS run:

```sh
$ npm run watch:css
```

To compile the Elm run:

```sh
$ npm run watch:elm
```

To compile both at the same time run:

```sh
$ npm run watch:css-elm
```

and then open `public/index.html` in your browser to see the app running

Contributions / suggestions are welcome, please leave an [issue](https://github.com/andrewMacmurray/elm-tachyons-boilerplate/issues)
