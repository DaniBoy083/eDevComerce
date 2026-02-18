// Importa a biblioteca axios, que é usada para fazer requisições HTTP
import axios from "axios";

// Cria uma instância personalizada do axios.
// Isso é melhor do que usar axios direto,
// porque você pode configurar baseURL, headers, interceptors etc.
// json-server --watch db.json
export const api = axios.create({
    // baseURL define a URL base da sua API.
    // Toda requisição feita com essa instância
    // vai usar esse endereço como prefixo.
    // Exemplo:
    // api.get("/products")
    // vira -> http://localhost:3000/products
    baseURL: "http://localhost:3000",
});
