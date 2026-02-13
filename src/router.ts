import Home from "./pages/Home"
import PinKeyboard from "./pages/PinKeyboard"
import SplashScreen from "./pages/SplashScreen"
import Welcome from "./pages/Welcome"

const routes =  [
    { path: '/', component: SplashScreen },
    { path: '/welcome', component: Welcome },
    { path: '/home', component: Home },
    {path: '/pinKeyboard', component: PinKeyboard}
]

    export {routes}