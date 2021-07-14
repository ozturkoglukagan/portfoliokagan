import express from 'express';
import path from 'path';

const app = express()


app.use(express.static("assets"))
app.use("/css",express.static(path.resolve()+"assets/css"))

app.get("/", (req,res) => {

res.sendFile("index.html",{root: path.resolve()})

})

app.listen(process.env.PORT || 5001)