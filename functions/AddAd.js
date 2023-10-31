exports = async function(payload, response) {
  const jwt = require("jwt-decode");

  const body = payload.body;

  const data = EJSON.parse(payload.body.text());
  const userID = data.userID;
  const token = data.token;

      var auth = jwt(token);
      console.log(auth);
   
     
     if ((auth.aud != "19528039381-oaav8eau0vcopperem53984u6fo04qss.apps.googleusercontent.com") ||(auth.email_verified !=true))
      {
        return "failed basic validation checks";// invalid audience
      }
      
      var user2 = {
        "email": auth.email,
        "given_name": auth.given_name,
      }
      
      // maybe check this email belongs to this user?
      var userColl = context.services.get("mongodb-atlas").db("GeorgeAndIris").collection("Users");
      var qryUser = {_id: userID,
                      email:user2.email}
      var userResults = userColl.findOne(qryUser);
      if ((userResults  == undefined) ||(userResults.length ==0))
      return {error: "User data mismatch"}
                      
                      
   
      var collection = context.services.get("mongodb-atlas").db("GeorgeAndIris").collection("Ads");
      
      const ad = { UserID: userID, 
                        Type:data.Type,
                        SubType:data.SubType,
                        ProductID: data.productID,
                        ProductName: data.productName,
                        Quantity: data.quantity,
                        ContactName: user2.given_name
        };
        
       collection.insertOne(ad);
          return ad;
     
   
 
};