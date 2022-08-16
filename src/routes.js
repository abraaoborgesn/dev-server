import { Router } from "express";

import HelloController from "./controllers/HelloController";
import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";

import auth from "./middlewares/auth";

const routes = new Router();

//controller público
routes.post("/sessions", SessionsController.create); // COMPARA SE O USUARIO E A SENHA ESTÁ CORRETO
routes.get("/hello", HelloController.index);

// middlewares
routes.use(auth) // aqui vai liberar se as outras rotas estarão disponível ou não

// controllers privados

//RESTFuLL
routes.get("/users", UsersController.index);
routes.get("/users/:id", UsersController.show);
routes.post("/users", UsersController.create);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

routes.get("/users/:user_id/repositories", RepositoriesController.index);
routes.post("/users/:user_id/repositories", RepositoriesController.create);
routes.delete(
  "/users/:user_id/repositories/:id",
  RepositoriesController.destroy
);

export default routes;
