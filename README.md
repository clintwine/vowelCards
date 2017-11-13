## Packages Included

Build: Webpack, Babel (es2015 and React), webpack-dev-server, react-hot-loader

Front-end: React, React-Dom

## How to Run Things

Install all dependencies:

```
npm install
```

Run webpack:

```
npm run webpack
```

Automatically run webpack when files change:

```
npm run webpack:watch
```



Run webpack-dev-server (`master` branch is configuration for Cloud9. `local` branch has configuration for running on localhost).

You don't need to run `webpack:watch` if you are running the dev server.

```
npm run webpack-dev-server
```

then go to your workspace web link https://your-workspace.c9users.io/

I was able to adapt https://github.com/eloquently/react-boilerplate to my own needs