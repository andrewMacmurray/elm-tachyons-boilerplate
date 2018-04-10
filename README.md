# Elm Tachyons Boilerplate

Simple setup for Elm and Tachyons

## Why?

[Elm](http://elm-lang.org/) and [Tachyons](http://tachyons.io/) are great for building UIs

> Tachyons - "Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible."

> Elm - "A delightful language for reliable webapps."

Both also have low setup requirements to start developing with

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

These setups are great for playing around with ideas, but once you need more control you're left with a few caveats

+ elm reactor doesn't support adding ports (i.e. no external JavaScript)
+ adding a custom stylesheet means appending it at runtime inside the body
+ customising tachyons properties like colors and spacing means manually overriding classes

This boilerplate is a relatively minimal setup, designed to get you off to a quick start using both of them together but with finer control over customising each

## How?

#### For Elm: [`elm live`](https://github.com/tomekwi/elm-live)

> A flexible dev server for Elm, Live reload included

elm live compiles elm code, watches for changes and serves the app from the `public` folder on `localhost:8000`

#### For Tachyons: [`postCSS`](http://postcss.org/)

> PostCSS - "A tool for transforming CSS with JavaScript"

Tachyons has some fantastic default styles, but sometimes you want to customise those defaults.

The boilerplate uses [`postCSS`](http://postcss.org/) to bundle all the individual tachyons modules together in `app/css/index.css` and apply custom variables from the other files in `app/css/`. The boilerplate uses a fork of Tachyons called [Tachyons Custom](https://github.com/tachyons-css/tachyons-custom) to give easy access to all the css variables (like colors, widths etc).


## Get Started

Run css and elm in watch mode:

```sh
$ npm run dev
```

Build css and elm bundles once:

```sh
$ npm run build
```

In dev mode the browser will open if there are no compile errors, and show `localhost:8000` with your app running

Contributions / suggestions are welcome, please leave an [issue](https://github.com/andrewMacmurray/elm-tachyons-boilerplate/issues)
