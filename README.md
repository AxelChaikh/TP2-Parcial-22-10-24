# Instalacion

Se debe contar con todas las dependecias: 

 - Node.js 
 - Express


El mismo corre en http://localhost:8080


# Comandos

- **npm start**
- **npm run watch**


## Rutas

### Obtener todas las transacciones
- **Método:** `GET`
- **Ruta:** `http://localhost:8080/transactions`
- **Descripción:** Retorna todas las transacciones registradas.
- **Respuesta:** 
    ```json
    {
        "id": 1,
        "tipo": "retiro",
        "monto": 12000,
        "destinatario": "Axel Chaikh"
    },
    {
        "id": 2,
        "tipo": "deposito",
        "monto": 2000,
        "destinatario": "Gaston Laguna"
    },
    {
        "id": 3,
        "tipo": "depostio",
        "monto": 35000,
        "destinatario": "Ezequiel Vena"
    },
    {
        "id": 4,
        "tipo": "retiro",
        "monto": 5000,
        "destinatario": "Manuel Gonzalez"
    }





### Obtener el total de transacciones
- **Método:** `GET`
- **Ruta:** `http://localhost:8080/transactions/total`
- **Descripción:** Retorna el total de todas las transacciones registradas.
- **Respuesta:**
      Cantidad de transacciones en cuenta: 4



### Crear una nueva transacción
- **Método:** `POST`
- **Ruta:** `http://localhost:8080/transactions`
- **Descripción:** Permite crear una nueva transacción.
- **Body (JSON):** Debe incluir los detalles de la transacción.
- **Ejemplo de Body:**
  ```json
  {
    "monto": 1000,
    "descripcion": "Compra en tienda"
  }

### Eliminar una transaccion
- **Método:** `DELETE`
- **Ruta:** `http://localhost:8080/transactions/delete/L:id`
- **Descripción:** Elimina una transacción en función del id proporcionado.
- **Respuesta:**
  La transaccion ha sido eliminada.