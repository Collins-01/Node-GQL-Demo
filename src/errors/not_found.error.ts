import { BaseApiException } from "./base_api_error";

export class NotFoundException extends BaseApiException {
  message: string;
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
