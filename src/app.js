 

  

/////////////////////////////////////////////////////////////////////////

//    const  jwt = require ('jsonwebtoken')

//    const mytoken = () => {
//       const token = jwt.sign ({_id : "147258369"} , "islam510" )
//       console.log(token)

//       const tokenVerify = jwt.verify ( token , "islam510" )
//       console.log(tokenVerify)
//    }
//   mytoken()


/////////////////////////////////////////////////////////////////////////
     const express = require ('express')
     const app = express()
     const port = process.env.PORT || 3000


    require('./db/mongoose')

    // to parse automatically
    
    app.use(express.json())


    const userRouter = require("./routers/user")
    const taskRouter = require('./routers/task')
    app.use(userRouter)
    app.use(taskRouter)



    app.listen( port , () => {console.log("All Done Successfully")})






