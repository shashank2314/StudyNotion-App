// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// exports.isAuth = async(req,res,next) =>{
//     try{
//         const token = req.body.token || req.cookies.token || req.header("Authorisation").replace("Bearer ","");
//         if(!token || token===undefined){
//             return res.status(400).json({
//                 success:false,
//                 message:"Token doesn't found",
//             })
//         }

        
//         try{
//             const decode = await jwt.verify(token,process.env.JWT_SECRET);
//             req.user = decode;
//             console.log(decode);
//             next();
//         }
//         catch(err){
//             console.log(err);
//             return res.json({
//                 success:false,
//                 message:"something wrong with token",
//             })
//         }
//     }catch(err){
//         console.log(err);
//         return res.json({
//             success:false,
//             message:"Something wrong in authentication",
//         })
//     }
// }
// exports.isStudent = async(req,res,next)=>{
//     try{
//         if(req.User.AccountType !== "Student"){
//             return res.status(401).json({
//                 success:false,
//                 message:"this is protected route for student",
//             })
//         }
//         next();
//     }
//     catch(err){
//         console.log("err")
//         return res.status(500).json({
//             success:false,
//             message:"User does not match",
//         })
//     }
// }
// exports.isInstructor = async(req,res,next)=>{
//     try{
//         if(req.User.AccountType !== "Instructor"){
//             return res.json({
//                 success:true,
//                 message:"this is protected route for instructor",
//             })
//         }
//         next();
//     }
//     catch(err){
//         console.log("err")
//         return res.json({
//             success:false,
//             message:"User does not match",
//         })
//     }
// }
// exports.isAdmin = async(req,res,next)=>{ 
//     try{
//         if(req.User.AccountType !== "Admin"){
//             return res.json({
//                 success:true,
//                 message:"this is protected route for Admin",
//             })
//         }
//         next();
//     }
//     catch(err){
//         console.log("err")
//         return res.json({
//             success:false,
//             message:"User does not match",
//         })
//     }
// }


// Importing required modules
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// Configuring dotenv to load environment variables from .env file
require("dotenv").config();

// This function is used as middleware to authenticate user requests
exports.auth = async (req, res, next) => {
	try {
		// Extracting JWT from request cookies, body or header
		const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

		// If JWT is missing, return 401 Unauthorized response
		if (!token) {
			return res.status(401).json({ success: false, message: `Token Missing` });
		}

		try {
			// Verifying the JWT using the secret key stored in environment variables
			// console.log("token2",token);
			// console.log("jwtsecret", process.env.JWT_SECRET)
			const decode = await jwt.verify(token, process.env.JWT_SECRET);
			// console.log(decode);
			// Storing the decoded JWT payload in the request object for further use
			req.user = decode;
		} catch (error) {
			// If JWT verification fails, return 401 Unauthorized response
			return res
				.status(401)
				.json({ success: false, message: "token is invalid" });
		}

		// If JWT is valid, move on to the next middleware or request handler
		next();
	} catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
};
exports.isStudent = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "Student") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Students",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};
exports.isAdmin = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "Admin") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Admin",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};
exports.isInstructor = async (req, res, next) => {
	try {
		const userDetails = await User.findOne({ email: req.user.email });
		// console.log(userDetails);

		// console.log(userDetails.accountType);

		if (userDetails.accountType !== "Instructor") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Instructor",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};