import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaAt, FaUserTie } from 'react-icons/fa'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

import useValidator from '../../hooks/useValidator'
import { createWallet } from '../../redux/slices/wallet'
import Styles from './Landing.module.scss'

const FormSection = () => {
    const [email, setEmail]  = useState('')
    const [name, setName]    = useState('')
    const [validator, showValidationMessage] = useValidator({}, {})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createWalletHandler = async () => {

        let isValid = validator.allValid()

        if (isValid) {

            let newWallet = {
                customer_email: email,
                meta_data: {
                    name, 
                    date: new Date().toLocaleString(),
                    id: uuidv4()
                }
            }

            await dispatch(createWallet(newWallet)).unwrap()
            .then((data) => {
                // console.log(data)
                navigate('/wallet')
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })

        } else {
            showValidationMessage(true)
            toast.error("Invalid input");
        }
    }

    return (
        <section className={Styles.ActionSection}>
            <div>
                <div className={Styles.ActionGreeting}>
                    <h3>Start for free</h3>
                    <h1>Create a wallet</h1>
                </div>

                <Form className={Styles.Form}>    
                    <Form.Group className={Styles.InputContainer}>            
                        <InputGroup>
                            <FormControl 
                                name="email"
                                onChange={(e) => setEmail(e.target.value)} 
                                onBlur={(e) => validator.showMessageFor('email')}
                                placeholder="Enter your email" />
                            <InputGroup.Text className={Styles.AddonContainer}>
                                <FaAt />
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Text className={Styles.ErrorMessage}>
                            {validator.message('email', email, 'required|email')}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className={Styles.InputContainer}>            
                        <InputGroup>
                            <FormControl 
                                name="name"
                                onChange={(e) => setName(e.target.value)} 
                                onBlur={() => validator.showMessageFor('name')}
                                placeholder="Enter wallet owner name" />
                            <InputGroup.Text className={Styles.AddonContainer}>
                                <FaUserTie />
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Text className={Styles.ErrorMessage}>
                            {validator.message('name', name, 'required')}
                        </Form.Text>
                    </Form.Group>

                    <InputGroup className={Styles.InputContainerButton}>
                        <Button 
                            onClick={() => createWalletHandler()}
                            className={Styles.Button}>
                            Create a wallet
                        </Button>
                    </InputGroup>
                </Form>
            </div>
        </section>
    )
}

export default FormSection