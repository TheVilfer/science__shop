const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbZero:2JRbWHDlAfun5n1N@clusterzk.kcwyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const getData = async(id) => {
    await client.connect();
    const collection = client.db("kelvinsite").collection("products");
    return await collection.findOne({"_id": String(id)}).toArray().price;
};

exports.handler = async event => {
      // if (event.httpMethod !== "POST") {
      //   return { statusCode: 405, body: "Method Not Allowed" };
      // }
      const id = event.queryStringParameters.id;
      const rst = getData(id);
      return {
        statusCode: 200,
        body: `${rst}`,
      }
    }