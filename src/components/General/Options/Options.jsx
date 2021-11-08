import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { GiWallet } from 'react-icons/gi'
import { GiDisc, GiTwoCoins } from 'react-icons/gi'
import { IoLogInSharp } from 'react-icons/io5'

import { deleteState } from '../../../hooks/useLocalStorage' 
import { deleteAllWallets } from '../../../redux/slices/wallet'
import { deleteAllTransactions } from '../../../redux/slices/transactions'
import Styles from './Options.module.scss'



const Options = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const logoutHandler = () => {
        dispatch(deleteAllWallets())
        dispatch(deleteAllTransactions())
        deleteState()
        navigate('/')
    }

    return (
        <section className={Styles.OptionsSection}>
            <Container>
                <button className={Styles.AuthButton} onClick={logoutHandler}>
                    Logout <IoLogInSharp />
                </button>

                <div className={Styles.OptionsGrid}>
                    <Link to="/wallet">
                        <div className={Styles.OptionsOption}>
                            <div className={Styles.Card}>
                                <h1 className={Styles.CardIcon}><GiWallet /></h1>
                                <div className={Styles.CardDetails}>
                                    <h3>Wallet Balance</h3>
                                    <p>In NGN/USD</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/transactions">
                        <div className={Styles.OptionsOption}>
                            <div className={Styles.Card}>
                                <h1 className={Styles.CardIcon}><GiDisc /></h1>
                                <div className={Styles.CardDetails}>
                                    <h3>Transactions</h3>
                                    <p>View transactions</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/fund">
                        <div className={Styles.OptionsOption}>
                            <div className={Styles.Card}>
                                <h1 className={Styles.CardIcon}><GiTwoCoins /></h1>
                                <div className={Styles.CardDetails}>
                                    <h3>Fund wallet</h3>
                                    <p>Fund your Wallet</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default Options