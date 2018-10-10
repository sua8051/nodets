import * as express from 'express'

export default class App {
  public express = null

  constructor () {
    this.express = express()
    this.init()
  }

  private init(): void {
    const router = express.Router()

    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })

    this.express.use('/', router)
  }

  start(port: string) {
    this.express.listen(port, (err) => {
      if (err) {
        return console.log(err)
      }
      return console.log(`server is listening on ${port}`)
    })
  }
}
