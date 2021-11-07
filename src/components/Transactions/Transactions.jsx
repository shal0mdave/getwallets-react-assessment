import { Container } from 'react-bootstrap'

import { Layout, Options } from '../General'
import TransactionsTable from './TransactionsTable'
import Styles from './Transactions.module.scss'

const Transactions = () => {

    return (
        <Layout>
            <section className={Styles.TransactionsSection}>
                <Container>
                    <div className={Styles.Header}>
                        <div className={Styles.Heading}>
                            <h1 className={Styles.Heading}>Transactions</h1>
                        </div>
                    </div>
                </Container>

                <Options />
                <TransactionsTable />
            </section>
        </Layout>
    )
}

export default Transactions