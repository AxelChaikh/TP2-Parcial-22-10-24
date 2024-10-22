import CtaBancariaMemModel from '../models/CtaBancaria.model.mem.js';

class CtaBancariaService {
    constructor() {
        this.model = new CtaBancariaMemModel();
    }

    getAllTransactions = async () => {
        return this.model.getAllTransactions()
    }

    postTransaction = async (transaction) => {
        const newTransaction = await this.model.postTransaction(transaction)
        return newTransaction
    }

    getTotalTransactions = async () => {
        return await this.model.getTotalTransactions()
    }

    deleteTransaction = async (id) => {
        return await this.model.deleteTransaction(id)
    }

}

export default CtaBancariaService;