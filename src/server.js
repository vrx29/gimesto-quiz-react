import { Model, RestSerializer, Server } from "miragejs";

import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";

//
import { quizzes } from "backend/db/quiz";
import {
  getAllQuizzesHandler,
  getQuizHandler,
} from "backend/controllers/quizController";
import { users } from "backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      user: Model,
      quiz: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      server.logging = false;
      quizzes.forEach((item) => server.create("quiz", { ...item }));
      users.forEach((item) => server.create("user", { ...item, score: [] }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // Quizzes routes (public)
      this.get("/quizzes", getAllQuizzesHandler.bind(this));
      this.get("/quizzes/:quizId", getQuizHandler.bind(this));
    },
  });
}
