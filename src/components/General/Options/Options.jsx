
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import { GiWallet } from 'react-icons/gi'
import { GiDisc, GiTwoCoins } from 'react-icons/gi'

import { getWallet } from '../../../redux/slices/wallet'
import Styles from './Options.module.scss'

const Options = () => {
    const navigate = useNavigate()
    const wallet = useSelector(getWallet)

    useEffect(() => {
        // redirect if no wallet
        if(wallet.length === 0) {
            navigate('/')
        }
    }, [wallet, navigate])

    return (
        <section className={Styles.OptionsSection}>
            <Container>
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