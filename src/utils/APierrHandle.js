class Apierr extends Error{
    constructor(
      statusCode,
      message = "something went wrong",
      errors = [],
      stack = ""
    ){
        super.message,
        this.data = null,
        this.message = message,
        this.statusCode = statusCode,
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}