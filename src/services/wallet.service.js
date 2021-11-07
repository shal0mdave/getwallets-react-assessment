import http from "../utils/http-common";

class WalletService {
    create(data) {
        return http.post("/wallets", data);
    }

    fund(data) {
        return http.post("/wallets/funds/manual", data);
    }

    getAllTransactions(walletId) {
        return http.get(`/transactions/wallets/${walletId}`);
    }
}

export default new WalletService();