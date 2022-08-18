import IHttpErrorMsg from '../interfaces/IHttpErrorMsg';

class HttpExceptions {
  code: number;
  message: IHttpErrorMsg;

  constructor(code: number, message: IHttpErrorMsg) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: IHttpErrorMsg) {
    return new HttpExceptions(400, msg);
  }

  static notFound(msg: IHttpErrorMsg) {
    return new HttpExceptions(404, msg);
  }
}

export default HttpExceptions;