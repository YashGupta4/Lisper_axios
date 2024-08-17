// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
import express from "express";
import axios from "axios";
import bodyparser from "body-parser"

const port=3000;
const app=express();

app.use(express.static("public"));
const API_URL="https://secrets-api.appbrewery.com/"


app.get("/",async(req,res)=> {
try{
    const result=await axios.get(API_URL+"random");
    res.render("index.ejs",{
        secret: JSON.stringify(result.data.secret),
        user: result.data.username,
    })
}catch(error){
    res.render("index.ejs",{secret: JSON.stringify(error.result.data)});
}
});

app.listen(port, () => {
    console.log("server is ");
});