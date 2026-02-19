import express from "express"
import path from "path"
import fs from "fs"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

// Caminho do db.json
const dbPath = path.join(__dirname, "db.json")

app.get("/products", (req, res) => {
  const data = fs.readFileSync(dbPath, "utf-8")
  const json = JSON.parse(data)
  res.json(json.products)
})


// 🔥 SERVIR O FRONT
app.use(express.static(path.join(__dirname, "../client/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
})

app.listen(PORT, () => {
  console.log("Servidor rodando 🚀")
})
