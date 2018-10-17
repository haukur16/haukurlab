const app = require("./app");
const PORT = process.env.PORT || 3000;

console.log("Server listening on port " + PORT);
app.listen(PORT);