import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {JwtTokenService} from "./jwt-token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private tokenService: JwtTokenService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const accessToken = this.tokenService.getToken();
    req = req.clone({
      // withCredentials: true,
      setHeaders: {
        Authorization: "Bearer " + accessToken,
      }
    });
    return next.handle(req);
  }
}
