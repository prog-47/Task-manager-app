
class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode;
    }
}

const createCustomEror = (msg,statusCode) =>{
    return new CustomAPIError(msg,statusCode)
}

export { createCustomEror, CustomAPIError }