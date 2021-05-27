var express = require('express');
var app = express();
const path = require('path');



//Home
app.use(express.static(path.join(__dirname, "public")));
app.get('/', (require, response)=>{
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.use(express.static(path.join(__dirname, "public")));
app.get('/projects', (require, response)=>{
    response.sendFile(path.join(__dirname + '/index-projects.html'));
})

app.use(express.static(path.join(__dirname, "public")));
app.get('/cv', (require, response)=>{
    response.sendFile(path.join(__dirname + '/cv.html'));
})

// const projectsRouter=express.Router();
// projectsRouter.route('/project')
// //route
//     .get((request,response)=>{
//         response.sendFile(path.join(__dirname + '/projects/project.html'));
//     })

    

// //

// //Middleware to use the routes
// app.use('/projects', projectsRouter);

app.listen(4444, ()=>{
    console.log("I'm a genius");
})

// For invalid routes
app.get('*', (req, res) => {
    res.send('404! This is an invalid URL.');
  });






