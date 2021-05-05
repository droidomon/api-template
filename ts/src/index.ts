import app from "./app"
import "dotenv/config"

const PORT: number = parseInt(<string>process.env.PORT, 10) || 3333

app.listen(PORT, ()=>{
    console.log(`Running in ${process.env.NODE_ENV} mode Listening for connections on port ${PORT}`);
    
})