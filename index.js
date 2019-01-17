const express = require('express');
const dishes = require("./dishes");
const recipe = require("./recipe");
const ingredient = require("./ingedient");

const server = express();


server.use(express.json());

server.get("/", (req, res) => {
  res.send("Recipe API is up");
})

server.use("/api/dish",dishes);
server.use("/api/recipe",recipe)
server.use("/api/ingredient",ingredient)



// server.get('/api/students', async (req,res) => {
//     try{
//       const response = await dbFuncs.getAllStudents()
//         console.log("response",response);
//         res.status(200).json(response);
//     } catch(err){
//         console.log(err);
//         res.status(500).send("error",err);
//     }
//   })

// server.post('/api/students', async (req,res) => {
//     const {cohortID,studentName} = req.body;
//     try{
//       const response = await dbFuncs.insertStudent(cohortID,studentName)
//         console.log(response);
//         res.status(201).json(response)
//     } catch(err){
//         console.log(err);
//         res.status(500).send(err);
//     }
//   })

//   server.put('/api/students/:id', async (req,res) => {
//     const id = req.params.id;
//     try{
//       const response = await dbFuncs.updateStudent(id,req.body)
//         console.log(response);
//         res.status(201).json(response)
//     } catch(err){
//         console.log(err);
//         res.status(500).send(err);
//     }
//   })

//   server.delete('/api/students/:id', async (req,res) => {
//     const id = req.params.id;
//     try{
//       const response = await dbFuncs.deleteStudent(id)
//         console.log(response);
//         res.status(201).json(response)
//     } catch(err){
//         console.log(err);
//         res.status(500).send(err);
//     }
//   })

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
