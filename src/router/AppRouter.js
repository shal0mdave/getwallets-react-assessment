import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App'
import Landing from '../components/Landing';
import Wallet from '../components/Wallet';
import Transactions from '../components/Transactions';
import Fund from '../components/Fund';
import NotFound from '../components/NotFound'

const AppRouter = (props) => {

    const routes = [
        {
            path: '/',
            exact: true,
            component: Landing
        },
        {
            path: '/wallet',
            component: Wallet,
        },
        {
            path: '/transactions',
            component: Transactions,
        },
        {
            path: '/fund',
            component: Fund,
        },
        {
            path: '*',
            component: NotFound
        },
    ];

    return ( 
        <BrowserRouter>

            {props.children}

            <Routes>
                <Route path="/" element={<App />}>
                    {routes.map((route) => (
                        <Route 
                            element={<route.component />} 
                            key={route.path} 
                            path={route.path} 
                            exact={route.exact} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;