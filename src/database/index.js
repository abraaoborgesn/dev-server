import mongoose from "mongoose";

import config from "../config/database";

class Database {
  constructor() {
    this.connection = mongoose
      .connect(config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("conectei à base de dados");
      })
      .catch((e) => console.log(e));
  }
}

export default new Database(); // Como os parametros estão dentro do contructor, na hr que a class é instanciada ela já executa o que está dentro
