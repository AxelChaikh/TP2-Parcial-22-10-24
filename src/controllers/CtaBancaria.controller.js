import CtaBancariaService from '../services/CtaBancaria.service.js';

class CtaBancariaController {
    constructor() {
        this.service = new CtaBancariaService();
    }

    getAllTransactions = async (req, res) => {
        const transaction = await this.service.getAllTransactions()
        res.status(200).send(transaction)
    }

    postTransaction = async (req, res) => {
        const transaction = req.body
        if(req.body === "{}"){
            res.status(400).send("El objeto se encuentra vacio")
        } else {
            const newtransaction = await this.service.postTransaction(transaction)
            res.status(200).send(newtransaction)
        }
    }

    getTotalTransactions = async (req, res) => {
        const totalTransactions = await this.service.getTotalTransactions()
        res.status(200).send(totalTransactions)
    }

    deleteTransaction = async (req, res) => {
        const { id } = req.params

        const deletedTransaction = await this.service.deleteTransaction(id)
        res.status(200).send(deletedTransaction)
    }




}

export default CtaBancariaController;