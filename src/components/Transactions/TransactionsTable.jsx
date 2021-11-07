import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { GiEmptyMetalBucketHandle } from 'react-icons/gi'

import { getTransactionsLocal } from '../../redux/slices/transactions'
import { dateFormatter, amountFormatter } from '../../utils/formatters'
import Styles from './Transactions.module.scss'

const TransactionsTable  = () => {
    const transactions = useSelector(getTransactionsLocal)

    return (
        <Container>
            <div className={Styles.Transactions}>
                <div className={Styles.TransactionsInner}>
                    <h1>My transactions</h1>

                    <Table responsive striped>
                        <thead>
                            <tr>     
                                <th></th>                           
                                <th>id</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Transaction type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(t => (
                                <tr key={t.meta_data.transaction_id}>
                                    <td></td>
                                    <td title={t.meta_data.transaction_id}>{t.meta_data.transaction_id.substring(0, 20) + '...'}</td>
                                    <td>{dateFormatter(t.meta_data.date)}</td>
                                    <td>{t.currency} {amountFormatter(t.amount)}</td>
                                    <td>{t.meta_data.transaction_type}</td>
                                </tr>
                            ))}

                            {transactions.length === 0 && (
                                <tr>
                                    <td colSpan={5} className={Styles.Empty}> 
                                        <GiEmptyMetalBucketHandle /> 
                                        <p>No transactions to display</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}

export default TransactionsTable