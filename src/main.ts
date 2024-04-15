import './app.css'
import App from './App.svelte'
// import { initializeScene } from './lib/utils/threeScene'
// function runOnSmallScreen() {
//   if (window.innerWidth > 768) { 
//     initializeScene()
//     console.log('render 3d scene')
//   }
// }
// runOnSmallScreen()
const app = new App({
  target: document.getElementById('app')!,
})
export default app
