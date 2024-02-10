// const express = require("express");
// const app = express();

// const Course = require("./routes/Course");
// const Payment = require("./routes/Payments");
// const Profile = require("./routes/Profile");
// const User = require("./routes/User");

// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const fileUpload = require("express-fileupload");
// const {cloudinaryConnect} = require("./config/cloudinary");
// const {dbconnect} = require("./config/database");
// //.env fetch
// require("dotenv").config();

// // middleware use
// app.use(express.json());
// app.use(cookieParser());


// app.use(
//     fileUpload({
//         useTempFiles:true,
//         tempFileDir:"/tmp",
//     })
// )
     
// // to entertain frontend req,res
// app.use(
//     cors({
//         origin:"http://localhost:3000",
//         credentials:true,
//     })
// )
// // connections
// cloudinaryConnect();
// dbconnect();


// // mounting and routes
// app.use("/api/v1/auth",User);
// app.use("/api/v1/course",Course);
// app.use("/api/v1/profile",Profile);
// app.use("/api/v1/payment",Payment);

// // default route



// //app listen
// const Port = process.env.PORT || 4000;
// app.listen(Port,()=>{
//     console.log("App running successfully",Port);
// })


// app.get("/",(req,res)=>{
//     // return res.json({
//     //     success:true,
//     //     message:"Your server is up and running...",
//     // })
//     return res.send("hey this is home page");
// })


const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const {dbconnect} = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");


dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect and cloudinary
cloudinaryConnect();
dbconnect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)


//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);

//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

