import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Layout } from '../General'
import IntroSection from './IntroSection'
import FormSection from './FormSection'
import { getWallet } from '../../redux/slices/wallet'
import Styles from './Landing.module.scss'


const Landing = () => {
    const navigate = useNavigate()
    const wallet = useSelector(getWallet)

    useEffect(() => { 
        if(wallet.length > 0) {
            navigate('/wallet')
        }
    }, [wallet, navigate])

    return (
        <Layout>
            <main className={Styles.Landing}>
                <IntroSection />
                <FormSection />
            </main>
        </Layout>
    )
}

export default Landing