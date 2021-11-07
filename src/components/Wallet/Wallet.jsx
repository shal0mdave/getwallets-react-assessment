import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { Layout, Options } from '../General'
import { getWallet } from '../../redux/slices/wallet'
import { getTransactionsLocal } from '../../redux/slices/transactions'
import { returnTotal } from '../../utils/formatters'
import Styles from './Wallet.module.scss'

const Wallet = () => {
    const wallet = useSelector(getWallet)
    const transactions = useSelector(getTransactionsLocal)

    const totalUSD = returnTotal(transactions, '$');
    const totalNGN = returnTotal(transactions, '₦');


    console.log(totalUSD)

    return (
        <Layout>
            <section className={Styles.WalletSection}>
                <Container>
                    <div className={Styles.Header}>
                        <div className={Styles.Heading}>
                            <h1 className={Styles.Heading}>My wallet</h1>
                        </div>
                    </div>
                </Container>

                <Options />

                <Container>
                    <div className={Styles.Wallet}>

                        <div className={Styles.WalletInner}>
                            <h1>Wallet ID: <small>{wallet[0].meta_data.id}</small></h1>
                            <div className={Styles.WalletBalanceGrid}>
                                <div className={Styles.WalletBalance}>
                                    <h3>USD Balance</h3>
                                    <h1>${totalUSD}</h1>
                                </div>

                                <div className={Styles.WalletBalance}>
                                    <h3>NGN Balance</h3>
                                    <h1>₦{totalNGN}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default Wallet