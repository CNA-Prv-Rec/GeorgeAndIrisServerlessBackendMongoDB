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
 
 const {u, token} = payload.query;


 console.log(u);

      var auth = jwt(token);
   //  console.log("decoded:", JSON.stringify(auth));
     
     if ((auth.aud != "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com") ||(auth.email_verified !=true))
      {
        return "failed basic validation checks";// invalid audience
      }
      
      var user2 = {
        "email": auth.email,
        "given_name": auth.given_name,
      }
   
      var collection = context.services.get("mongodb-atlas").db("GeorgeAndIris").collection("Ads");
      
        const query = { User: u, 
                        Type:"Swap",
                        SubType:"Give"
        };
        
         result = await collection.find(query);

          return result;
     
   

 
};