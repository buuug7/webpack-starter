import "@babel/polyfill";
import sum from './sum'

import './app.scss'

console.log(sum(1, 3))

async function getNameFuck () {
  console.log(22222)
}


getNameFuck()
