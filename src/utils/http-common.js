import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-staging.getwallets.co/v1/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'sk_live_615d856adfdf251803d6a3ff615d856adfdf251803d6a400'
    }
})