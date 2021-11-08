import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { getWallet } from '../redux/slices/wallet'

const PrivateRoute = props => {

    const wallet = useSelector(getWallet)

   if(wallet.length === 0) return <Navigate to="/" /> 
   else return props.children;

}

export default PrivateRoute;