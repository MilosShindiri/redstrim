import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import PinKeyboard from "./pages/PinKeyboard"
import Settings from "./pages/Settings"
import SplashScreen from "./pages/SplashScreen"
import Welcome from "./pages/Welcome"

const routes =  [
    { path: '/', component: SplashScreen, options: { inHistory: false } },
    { path: '/welcome', component: Welcome, options: { inHistory: false } },
    { path: '/home', component: Home, options: { keepAlive : true } },
    { path: '/pinKeyboard', component: PinKeyboard},
    { path: '/settings', component: Settings},
    { path: '/login', component: LoginPage}
]

    export {routes}