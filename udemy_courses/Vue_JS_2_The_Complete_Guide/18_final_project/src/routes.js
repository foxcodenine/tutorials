import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio";
import Stocks from  "./components/stocks/Stocks"

export const routes = [
    {path:'/', component: Home},
    {path:'/portfolio', component: Portfolio},
    {path:'/stocks', component: Stocks}
];