class CtaBancariaMemModel {
    constructor() {

        this.transactions = [
            {id: 1, tipo: "retiro", monto: 12000, destinatario: "Axel Chaikh"},
            {id: 2, tipo: "deposito", monto: 2000, destinatario: "Gaston Laguna"},
            {id: 3, tipo: "depostio", monto: 35000, destinatario: "Ezequiel Vena"},
            {id: 4, tipo: "retiro", monto: 5000, destinatario: "Manuel Gonzalez"}
        ]
    }
    
    //Metodos de la clase
    
    getAllTransactions = async () => {
        return await this.transactions
    }

    postTransaction = async (transaction) => {
        console.log(transaction)

        transaction.id = this.transactions[this.transactions.length -1].id + 1;
        this.transactions.push(transaction);
        return transaction;
    }

    getTotalTransactions = async () => {
        let total = 0;
        if(this.transactions.length > 0){
            total = this.transactions.length;
            return `Cantidad de transacciones en cuenta: ${total}`
        }else {
            return 'No hay transacciones para mostrar por el momento.'
        }
    }

    deleteTransaction = async (id) => {
        const index = this.transactions.findIndex(transaction => transaction.id == id)

        if (index === -1) {
            throw new Error('El id de la transaccion no existe.')
        } else {
            await this.transactions.splice(index, 1);
            return 'La transaccion ha sido eliminada.'
        }
    }
    
    
    
    
}

export default CtaBancariaMemModel;