//exports = function(arg){
exports = async function(payload, response) {
  /*
    Accessing application's values:
    var x = context.values.get("value_name");

    Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("dbname").collection("coll_name");
    collection.findOne({ owner_id: context.user.id }).then((doc) => {
      // do something with doc
    });

    To call other named functions:
    var result = context.functions.execute("function_name", arg1, arg2);

    Try running in the console below.
  */
  
    var collection = context.services.get("mongodb-atlas").db("GeorgeAndIris").collection("Products");
    var products = await collection.find().toArray();
  
    // Convert the ObjectIds to strings...
    products.forEach(product => {
      product._id = product._id.toString();
    });
    
    return products;
//  return {arg: arg};
};