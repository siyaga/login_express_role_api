class BaseResponse {
    constructor(data, message, total, page, pageSize, status) {
      this.data = data;
      this.message = message;
      this.total = total;
      this.page = page;
      this.pageSize = pageSize;
      this.status = status;
    }
  
    serialize() {
      return {
        data: this.data,
        message: this.message,
        total: this.total,
        page: this.page,
        pageSize: this.pageSize,
        status: this.status,
      };
    }
  }
  
  module.exports = BaseResponse;