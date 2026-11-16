# ReduxCounter

A tiny counter app that shows how `react-redux` fits together: actions, a reducer, a store and a connected component, with nothing else in the way. Handy if you are learning Redux and every tutorial you found came with a whole build setup attached.

It was made with Create React App and the Redux style of its time (before Redux Toolkit), so treat it as a learning example.

## What's in it

```
src/redux/Actions.js   the action creators
src/redux/Reducer.js   the reducer
src/components/Counter.js   the connected component
src/App.js             wires the Provider and the store
```

Five dependencies total: `react`, `react-dom`, `react-redux`, `redux`, `react-scripts`.

## Run it

```bash
git clone https://github.com/p32929/ReduxCounter.git
cd ReduxCounter
npm install
npm start
```

Then open http://localhost:3000 and watch the counter go.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not wasted on something that might not fit. Thanks for helping make this example better.

## Share

<a href="https://p32929.github.io/share/?repo=ReduxCounter"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
