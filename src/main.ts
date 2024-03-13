import './app.css'
import App from './App.svelte'
import { initializeScene } from './lib/utils/threeScene'
initializeScene()
const app = new App({
  target: document.getElementById('app')!,
})
export default app
