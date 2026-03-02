# LightningChart JS × React Template

Minimal template for using [LightningChart JS](https://lightningchart.com/js-charts/) in React + TypeScript, built with [Vite](https://vite.dev/).

## Getting started

```sh
npm install
npm run dev
```

## License key

Supply your LightningChart JS license key in [`.env`](./.env):

```
VITE_LCJS_LICENSE="your-license-key-here"
```

## Files of interest

| File                                                                           | Description                                                                                  |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| [`src/LC.tsx`](./src/LC.tsx)                                                   | `LCHost` component and `LCContext` — manages a shared LC instance for all charts on the page |
| [`src/Components/MyChartComponent.tsx`](./src/Components/MyChartComponent.tsx) | Example chart component using `LCContext`                                                    |
| [`src/App.tsx`](./src/App.tsx)                                                 | Usage example with two charts                                                                |

## Learn more

- [LightningChart JS + React docs](https://lightningchart.com/js-charts/docs/frameworks/react/)

## react-time-series-chart

For a plug-and-play React time series chart component, see [`react-time-series-chart`](./react-time-series-chart/).
