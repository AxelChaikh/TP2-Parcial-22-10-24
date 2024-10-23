import fs from 'fs';

class CtaBancariaFsModel {
    constructor() {

        this.transactions = "transactions.json"
    }

    //Metodos de la clase

    getAllTransactions = async () => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const transactionsJson = JSON.parse(allTransactions)
        if(transactionsJson.length > 0){
            return await transactionsJson
        } else {
            return "No hay transacciones registradas"
        }
    }

    postTransaction = async (transaction) => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const transactionsJson = JSON.parse(allTransactions)

        console.log(transaction)

        transaction.id = this.transactions[this.transactions.length -1].id + 1;

        const transactionsToString = JSON.stringify(transactionsJson)
        await fs.promises.writeFile(this.transactions, transactionsToString, "utf-8")
        return transaction;
    }

    getTotalTransactions = async () => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const transactionsJson = JSON.parse(allTransactions)

        let total = 0;
        if(this.transactions.length > 0){
            total = transactionsJson.length;
            return `Cantidad de transacciones en cuenta: ${total}`
        }else {
            return 'No hay transacciones para mostrar por el momento.'
        }
    }

    deleteTransaction = async (id) => {
        const allTransactions = await fs.promises.readFile(this.transactions, "utf-8")
        const transactionsJson = JSON.parse(allTransactions)

        const index = transactionsJson.findIndex(transaction => transaction.id == id)

        if (index === -1) {
            throw new Error('El id de la transaccion no existe.')
        } else {
            await transactionsJson.splice(index, 1);
            return 'La transaccion ha sido eliminada.'
        }
    }




}

export default CtaBancariaFsModel;