// This function is the webhook's request handler.
exports = async function(payload, response) {
   const jwt = require("jwt-decode");
    // Data can be extracted from the request as follows:

    // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
  //  const {arg1, arg2} = payload.query;

    // Headers, e.g. {"Content-Type": ["application/json"]}
  //  const contentTypes = payload.headers["Content-Type"];

    // Raw request body (if the client sent one).
    // This is a binary object that can be accessed as a string using .text()
  //  const body = payload.body;



    // You can use 'context' to interact with other Realm features.
    // Accessing a value:
    // var x = context.values.get("value_name");

    // Querying a mongodb service:
    // const doc = context.services.get("mongodb-atlas").db("dbname").collection("coll_name").findOne();

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
 //   return  "Hello World!";
  //var todo = {};
  var result={};
 
 console.log("running");
  if (payload.body) 
  {

     const data = EJSON.parse(payload.body.text());

      var auth = jwt(data.token);
   
     
     if ((auth.aud != "718755781357-79sovevfdp7dbui4n1umu5kjhhk2fpus.apps.googleusercontent.com") ||(auth.email_verified !=true))
      {
        return "failed basic validation checks";// invalid audience
      }
      
       console.log("decoded:", auth);
      
      var user2 = {
        "email": auth.email,
        "name": auth.name,
        "given_name": auth.given_name,
        "family_name": auth.family_name,
        "date_created": new Date()
      }
   
      var collection = context.services.get("mongodb-atlas").db("GeorgeAndIris").collection("Users");
      
        const query = { email: user2.email};
        
         const existingUser = await collection.findOne(query);

         if (existingUser == null)
         {
              return collection.insertOne(user2);
         }
         else
         {
           return existingUser;
         }
     
   
  }
  return result;
 
};