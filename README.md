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

<p><a href="https://p32929.github.io/share/?repo=ReduxCounter"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
