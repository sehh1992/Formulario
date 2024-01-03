import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};
export async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect("mongodb://localhost/nextmongocrud");
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("mongo esta conectado");
});

connection.on("error", (err) => {
  console.log("mongo error", err);
});
