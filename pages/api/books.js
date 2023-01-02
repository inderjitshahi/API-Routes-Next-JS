// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongodb, { MongoClient } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config();
const PASSWORD = process.env.PASSWORD;
// import fs from 'fs'
// import path from 'path'
// import { cwd } from 'process'
// function getData(){
//   const filePath=path.join(process.cwd(),"data","books.json");
//   const fileData=fs.readFileSync(filePath);
//   const data= JSON.parse(fileData);
//   return data;
// }
export default async function handler(req, res) {
  const client=await MongoClient.connect(`mongodb+srv://inderjit:${PASSWORD}@cluster0.xumzkt6.mongodb.net/?retryWrites=true&w=majority`);
  //Create database
  const db =client.db("books");
  if (req.method === 'GET') {
    const books=await db.collection("books").find().sort().toArray();
    if(!books){
      return res.status(500).json({message:"internal server error"});
    }
    //  const data=getData();
    client.close();
    return res.status(200).json({ message: books });
  } else if (req.method === "POST") {
    const { name, description, imgURL } = req.body;
    // const data=getData();
    const newBook = {
      name,
      description,
      imgURL,
    }
    // data.push(newBook);
    // const filePath=path.join(process.cwd(),"data","books.json");
    // fs.writeFileSync(filePath,JSON.stringify(data));
    // console.log(newBook);
    const result=await db.collection("books").insertOne(newBook);
    client.close();
    return res.status(201).json({ message: "Added", book: newBook })
  }

}
