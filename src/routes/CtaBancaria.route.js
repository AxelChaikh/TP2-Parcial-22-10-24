import CtaBancariaController from '../controllers/CtaBancaria.controller.js';
import express from 'express'

class Router {
    constructor() {
        this.router = express.Router()
        this.controller = new CtaBancariaController()
    }

    start() {

        this.router.get("/transactions", this.controller.getAllTransactions)
        this.router.post("/transactions", this.controller.postTransaction)
        this.router.get("/transactions/total", this.controller.getTotalTransactions)
        this.router.delete("/transactions/delete/:id", this.controller.deleteTransaction)

        return this.router
    }

}

export default Router;