import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import useValidator from '../../hooks/useValidator'
import { getWallet } from '../../redux/slices/wallet'
import { fund } from '../../redux/slices/transactions'
import Invoice from './Invoice';
import Styles from './Fund.module.scss'

const FundForm = () => {
    const [currency, setCurrency] = useState('')
    const [amount, setAmount] = useState('')
    const [transaction, setTransaction] = useState('')
    const [showInvoice, setShowInvoice] = useState(false)
    const wallet = useSelector(getWallet)
    const [validator, showValidationMessage] = useValidator({}, {})
    const dispatch = useDispatch()

    const fundWalletHandler = async () => {

        let isValid = validator.allValid()

        if(isValid){

            let newTransaction = {
                wallet_id: wallet[0].meta_data.id,
                currency,
                amount,
                meta_data: {
                    transaction_type: 'Fund',
                    email: wallet[0].customer_email,
                    name: wallet[0].meta_data.name,
                    date: new Date().toLocaleString(),
                    transaction_id: uuidv4()
                }
            }

            await dispatch(fund(newTransaction)).unwrap()
            .then((data) => {
                // console.log(data)
                toast.success('Wallet successfully funded')
                setTransaction(newTransaction)
                setShowInvoice(true)
                setAmount('')
            })
            .catch(e => {
                // console.log(e)
                toast.error(e.message)
            })

        } else {
            showValidationMessage(true)
            toast.error("Invalid input");
        }
    }

    return (
        <Container>
            <div className={Styles.FundForm}>
                <div className={Styles.FundFormInner}>
                    <h1>Fund my wallet</h1>

                    <Form>
                        <Row className="align-items-center">
                            <Col md={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Wallet ID</Form.Label>
                                    <Form.Control type="text" placeholder={wallet[0].meta_data.id || ''} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder={wallet[0].customer_email || ''} readOnly/>
                                </Form.Group>
                            </Col>
                            <Col md={2}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control 
                                        name="amount"
                                        onChange={(e) => setAmount(e.target.value)} 
                                        onBlur={(e) => validator.showMessageFor('amount')}
                                        type="number" 
                                        placeholder="2000"/>
                                    <Form.Text className={Styles.ErrorMessage}>
                                        {validator.message('amount', amount, 'required|numeric|min:1,num')}
                                    </Form.Text>
                                </Form.Group>                   
                            </Col>
                            <Col md={2}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Currency</Form.Label>
                                    <Form.Select
                                        name="currency"
                                        onChange={(e) => setCurrency(e.target.value)} 
                                        onBlur={(e) => validator.showMessageFor('currency')}
                                    >
                                        <option>Choose</option>
                                        <option value="$">USD ($)</option>
                                        <option value="₦">NGN (₦)</option>
                                    </Form.Select>
                                    <Form.Text className={Styles.ErrorMessage}>
                                        {validator.message('currency', currency, 'required')}
                                    </Form.Text>
                                </Form.Group>                    
                            </Col>
                            <Col md={2}>
                                <Button onClick={() => fundWalletHandler()} className="mt-3">
                                    Fund
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    {showInvoice&&(<Invoice t={transaction}  />)}
                </div>
            </div>
        </Container>
    )
}

export default FundForm