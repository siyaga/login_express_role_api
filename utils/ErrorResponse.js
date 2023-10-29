class ErrorResponse {
    constructor(exception, code) {
      this.data = null;
      this.status = false;
      this.message = exception ? exception.toString() : null;
      this.total = 0;
      this.page = 0;
      this.limit = 0;
      this.code = code || 500;
    }
  
    serialize() {
      const baseResponse = new BaseResponse(null, this.message, 0, 0, 0, this.code);
      return [baseResponse.serialize(), this.code];
    }
  }
  
  module.exports = ErrorResponse;