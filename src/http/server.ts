import fastify from "fastify";

const app = fastify();

app.get('/hello', () => {
  return 'HELLO NLW';
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running");
});
