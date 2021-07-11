import express from 'express';
import path from 'path';

const app = express()
const port = 5001;

app.use(express.static("assets"))
app.use("/css",express.static(path.resolve()+"assets/css"))

app.get("/", (req,res) => {

res.sendFile("index.html",{root: path.resolve()})

})



app.listen(port, () => {
    console.log("Listening Port ", port)
})