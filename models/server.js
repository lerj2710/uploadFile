const express = require("express");
const cors = require("cors");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.arhivosPath = "/upload/archivo";

    // //conectar a base de datos

    //Middlewares
    this.middlewares();

    //Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    //cors
    this.app.use(cors());
    //habilitar pug
    this.app.set("view engine", "pug");
    //añadir a la carpeta de las vistas
    this.app.set("views", path.join(__dirname, "../views"));
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    //devolver la vista pug
    this.app.get("/", (req, res) => res.render("index"));

    this.app.use(this.arhivosPath, require("../routes/archivo-routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
