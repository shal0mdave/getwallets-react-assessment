import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from '../App'
import PrivateRoute from './PrivateRoute';

import Landing from '../components/Landing';
import Wallet from '../components/Wallet';
import Transactions from '../components/Transactions';
import Fund from '../components/Fund';
import NotFound from '../components/NotFound'

const AppRouter = (props) => {

    const routes = [
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
                    <Route path="/" element={<Landing />} />
                    {routes.map((route) => (
                        <Route 
                            path={route.path} 
                            element={<PrivateRoute><route.component /></PrivateRoute>} 
                            key={route.path} 
                            exact={route.exact} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;