import App from "./app"

const port = process.env.PORT || "3000"

let app = new App()

app.start(port)
