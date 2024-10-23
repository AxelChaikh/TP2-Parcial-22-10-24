import CtaBancariaFsModel from "./DAO/CtaBancaria.model.fs.js";
import CtaBancariaMemModel from "./DAO/CtaBancaria.model.mem.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new CtaBancariaMemModel()
            case "FS":
                console.log("Persistiendo en la memoria del servidor")
                return new CtaBancariaFsModel()
            default:
                console.log("Opcion default")
                return new CtaBancariaMemModel()
        }
    }
}

export default Factory