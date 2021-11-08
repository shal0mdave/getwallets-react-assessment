import { createRef, Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Pdf from 'react-to-pdf'

import { amountFormatter } from '../../utils/formatters';
import Styles from './Fund.module.scss'

const ref = createRef();

const Invoice = props => {
    
    return (
        <Fragment>
            <section className={Styles.InvoiceContainer} ref={ref}>
                <Card style={{ width: 'auto' }}>
                    <Card.Body>
                        <img 
                            src="https://files.readme.io/e00a6a5-GetWallets_icon_WHITE.svg" 
                            alt="GetWallets"
                            style={{backgroundColor: '#0079ff', padding: 6}}         
                            height="100" width="100" /><br />
                            
                        <Card.Title className={Styles.CardTitle}>Transaction Invoice</Card.Title>
                        <Card.Subtitle className={Styles.CardAmount}>Amount: {props.t.currency} {amountFormatter(props.t.amount)}</Card.Subtitle><br />

                        <Card.Text className={Styles.CardText}>
                            Transaction ID: <b>{props.t.meta_data.transaction_id}</b><br />
                            Email: <b>{props.t.meta_data.email}</b><br />
                            Wallet ID: <b>{props.t.wallet_id}</b><br />
                            User's Name: <b>{props.t.meta_data.name}</b><br />
                            Date: <b>{props.t.meta_data.date}</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
            <Pdf targetRef={ref} filename="invoice.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="btn" style={{width: 'auto', color: '#fff'}}>Download Invoice</button>}
            </Pdf>
        </Fragment>
    );
}

export default Invoice;