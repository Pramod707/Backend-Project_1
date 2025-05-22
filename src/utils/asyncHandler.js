const asyncHandler = (reqHandler) => (req, res, next) => {
  Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
};

export { asyncHandler };

// const asyncHandler =(fn)=>async(res,req,next)=>{
//     try {
//         await fn(res,req,next)

//     } catch (error) {
//         res.send(error ||500).json({
//             success : false,
//             message : error.message,
//         })
//     }

// }
