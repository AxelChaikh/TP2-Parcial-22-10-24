import Factory from "../models/Factory.js";

class CtaBancariaService {
    constructor() {
        this.model = Factory.get("MEM")
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