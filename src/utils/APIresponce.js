class APIresponce extends Error{
    constructor(message="success",statusCode,data)
    {
      this.statusCode = statusCode,
      this.message = message,
      this.data = data,
      this.success = statusCode<400

    }
}
export {APIresponce};