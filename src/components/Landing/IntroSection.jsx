import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import Styles from './Landing.module.scss'

const IntroSection = () => {
    return (
        <section className={Styles.IntroSection}>
            <div className={Styles.IntroContent}>
                <Logo />
                <h1>The Wallet Infrastructure You Need</h1>
                <p>Building virtual wallets for your applications just got easier! GetWallets provides developers easy API and tools to integrate wallets into their applications in seconds.</p>
            </div>
        </section>
    )
}

export default IntroSection