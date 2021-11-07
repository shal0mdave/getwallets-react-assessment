import { Container } from 'react-bootstrap'

import { Layout, Options } from '../General'
import FundForm from './FundForm'
import Styles from './Fund.module.scss'

const Funding = () => {
    return (
        <Layout>
            <section className={Styles.FundSection}>
                <Container>
                    <div className={Styles.Header}>
                        <div className={Styles.Heading}>
                            <h1 className={Styles.Heading}>Fund wallet</h1>
                        </div>
                    </div>
                </Container>

                <Options />
                <FundForm />
            </section>
        </Layout>
    )
}

export default Funding