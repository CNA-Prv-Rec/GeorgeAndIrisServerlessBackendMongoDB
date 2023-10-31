exports = async function(payload, response) {
    var collection = context.services.get("mongodb-atlas").db("GoogleAnalytics").collection("AnalyticsResults");
    var res = await collection.find().toArray();
  
  /*
    // Convert the ObjectIds to strings...
    res.forEach(todo => {
      todo._id = todo._id.toString();
      todo._date=todo._date.toString();
    });
    */
    
   // return todos;
   return res;
  };