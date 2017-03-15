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

#### For Elm: [`elm live`](https://github.com/tomekwi/elm-live)

> A flexible dev server for Elm, Live reload included!

elm live compiles elm code, watches for changes and serves the app from the `public` folder on `localhost:8000` :sparkles: :ok_hand:

#### For Tachyons: [`postCSS`](http://postcss.org/)

> PostCSS - "A tool for transforming CSS with JavaScript"

Tachyons has some fantastic default styles, but changing some of them is not as straightforward as adding a script tag.

The boilerplate uses [`postCSS`](http://postcss.org/) to bundle all the individual tachyons modules together in `app/css/main.css` and apply custom variables from the other files in `app/css/`. The boilerplate also uses a fork of Tachyons called [Tachyons Custom](https://github.com/tachyons-css/tachyons-custom) - which moved the custom variables into one file (I have however chosen to put them in multiple files to make editing them a little clearer).


## Get Started

To compile the CSS run:

```sh
$ npm run css
```

To compile the Elm and run the dev server run:

```sh
$ npm run elm
```

To run both at the same time run:

```sh
$ npm run watch
```

the browser will open if there are no errors in your elm app and load `localhost:8000` with your app running

Contributions / suggestions are welcome, please leave an [issue](https://github.com/andrewMacmurray/elm-tachyons-boilerplate/issues)
