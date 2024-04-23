const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// MongoDB connection setup
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Connect to the MongoDB server
async function connect() { 
  try {
     await client.connect(); 
     console.log('Connected to MongoDB server');
     } 
     catch (err)
      {
       console.error('Error connecting to MongoDB server', err);
        process.exit(1); 
      }
    }
    app.get('/insert', async function (req, res){ 
      try {
        res.setHeader('content-type','application/json')
        res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('Tourism');
        const collection=db.collection('userdata');
      
        const result = await collection.insertOne(req.query);
        console.log(result);
        data={ status:true,message: "Inserted Successfully" };
          res.json(data);
       } 
        catch (err) { 
          console.error('Error ', err); 
          data={ status:false,message: "Insert Failed"};
            res.json(data);
         }
     });
  app.get('/insert1', async function (req, res){
    try {
      console.log("Request Query Parameters:", req.query);
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
    const db = client.db('Tourism');
    const collection=db.collection('userdata');
    var doc={email:req.query.email,password:req.query.password};
    const user = await collection.findOne(doc);
    if(user){
      data={ status:true,message: "Inserted Successfully" };
      res.json(data);
      console.log(data);
  
    }
    else{
      console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
    res.json(data);
    console.log(data);
    }
    }catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "Insert Failed" };
    res.json(data);
    console.log(data);
    }
  });
  app.get('/insert2', async function (req, res){ 
    try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
      const db = client.db('Tourism');
      const collection=db.collection('booking');
      console.log(collection);
      const result = await collection.insertOne(req.query);
      console.log(result);
      data={ status:true,message: "Inserted Successfully" };
      res.json(data);
      console.log("helo insert");
     } 
      catch (err) { 
        console.error('Error ', err); 
        data={ status:false,message: "Insert Failed"};
          res.json(data);
       }
   });
    app.get('/delete', async function (req, res){
      try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
          const db = client.db('Tourism');
          const collection=db.collection('userdata');
          const result = await collection.deleteOne(req.query);
          console.log(result);
      if(result.deletedCount>0)
        data={ status:true,message: "deleted Successfully",noOfDoc:result.deletedCount };
      else
        data={ status:false,message: "No data found",noOfDoc:result.deletedCount };
      res.json(data);
      } catch (err) {
          console.error('Error ', err);
          data={ status:false,message: "delete action failed" };
      res.json(data);
      }
  });
  app.get('/findAll', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('Tourism');
        const collection=db.collection('userdata');		
        const result = await collection.find({},{username:1,_id:0,email:1,password:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });
  app.get('/findAll1', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('Tourism');
        const collection=db.collection('booking');		
        const result = await collection.find({},{_id:0,email:1,packageName:1,packagetype:1,noofpersons:1,selectedslot:1,price:1}).toArray();
    data={ status:true,message: "Successfully find the docs",list:result };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });
  app.get('/findOne', async function (req, res){
    try {
        const userEmail = req.query.email; // Retrieve email from query parameters
        res.setHeader('content-type', 'application/json');
        res.setHeader("Access-Control-Allow-Origin", "*");
        const db = client.db('Tourism');
        const collection = db.collection('userdata');
        const result = await collection.findOne({ email: userEmail }, { projection: { _id: 0, username: 1, email: 1, password: 1 } });
        if (result) {
            const data = { status: true, message: "User found", user: result };
            res.json(data);
        } else {
            const data = { status: false, message: "User not found" };
            res.json(data);
        }
    } catch (err) {
        console.error('Error', err);
        const data = { status: false, message: "Failed to find user" };
        res.json(data);
    }
});


  app.get('/update', async function (req, res){
    try {
      console.log("req"+req.query);
		res.setHeader('content-type','application/json')
		res.setHeader("Access-Control-Allow-Origin","*");
        const db = client.db('Tourism');
        const collection=db.collection('userdata');
		const filter={email:req.query.email};
		
        const result = await collection.updateOne(filter,{$set:{password:req.query.password}});
	
		if(result.modifiedCount>0)
			data={ status:true,message: "Updated Successfully",noOfDoc:result.modifiedCount };
		else
			data={ status:true,message: "No data found",noOfDoc:result.modifiedCount };
		res.json(data);
    } catch (err) {
        console.error('Error ', err);
        data={ status:false,message: "update action failed" };
		res.json(data);
    }
});
app.get('/updateuser', async function (req, res){
  try {
    console.log("req"+req.query);
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
    const db = client.db('Tourism');
    const collection=db.collection('userdata');
    const filter = { email: req.query.email };
    const result = await collection.updateOne(filter,{$set: {username: req.query.username,password: req.query.password}});
      
  if(result.modifiedCount>0)
    data={ status:true,message: "Updated Successfully",noOfDoc:result.modifiedCount };
  else
    data={ status:true,message: "No data found",noOfDoc:result.modifiedCount };
  res.json(data);
  } catch (err) {
      console.error('Error ', err);
      data={ status:false,message: "update action failed" };
  res.json(data);
  }
});

      // Start the server
    app.listen(5000, () => {
            console.log('Server running at http://localhost:5000');
            connect(); 
             // Connect to MongoDB when the server starts
    });
