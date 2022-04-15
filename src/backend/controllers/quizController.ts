import { Response } from "miragejs";
/**
 * All the routes related to Quizzes are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all quizzes in the db.
 * send GET Request at /api/quizzes
 * */

export const getAllQuizzesHandler = function () {
  try {
    return new Response(200, {}, { quizzes: this.db.quizzes });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler gets all quiz data in the db.
 * send GET Request at /api/quizzes/:quizId
 * */
export const getQuizHandler = function (schema, request) {
  const { quizId } = request.params;
  try {
    const quiz = schema.quizzes.findBy({ _id: quizId }).attrs;
    return new Response(200, {}, { quiz });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
