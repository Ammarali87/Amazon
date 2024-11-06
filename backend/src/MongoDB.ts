// const { MongoClient } = require( 'mongodb');

// // Connection URI
// const uri = "mongodb://localhost:27017"; // Adjust with your MongoDB URI

// // Create a new MongoClient
// const client = new MongoClient(uri);
 
// async function connect() {
//   try {   
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const db = client.db("yourDatabaseName");
//     const collection = db.collection("products");

// 	return { db, collection };

// } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }


//////////////////////   create   /////////////

async function createProduct(product) {
	const { collection } = await connect();
	const result = await collection.insertOne(product);
	console.log("Product inserted:", result.insertedId);
  }
  
   // //////////////////////   use

   //    createProduct({ name: "Example Product", slug: "example-product", rating: 4.5, numViews: 100 });

///////////////////////////   get / find ddddd

// async function getProducts(filter = {}) {
// 	const { collection } = await connect();
// 	const products = await collection.find(filter).toArray();
// 	console.log("Products found:", products);
// 	return products;
//  }
/////////////////////
        
//   getProducts({ rating: { $gte: 4 } }); // Finds products with a rating of 4 or higher
   

// async function deleteProduct(slug) {
// 	const { collection } = await connect();
// 	const result = await collection.deleteOne({ slug: slug });
// 	console.log("Product deleted:", result.deletedCount);
//   }
    
//   await it take time
// deleteProduct("example-product");
// client.close();

// async function updateProduct(slug, updateFields) {
// 	const { collection } = await connect();
// 	const result = await collection.updateOne(
// 	  { slug: slug },
// 	  { $set: updateFields }
// 	);
// 	console.log("Product updated:", result.modifiedCount);
//   }
    

//  update("update" , {ratin:22 , nemViews:544})




