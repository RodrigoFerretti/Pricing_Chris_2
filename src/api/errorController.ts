import { NextFunction, Request, Response } from "express"
import { HttpException } from "../infra/errors/httpException"


export class ErrorController {

    static middleWare(err: HttpException, req: Request, res: Response, _: NextFunction) {
        res.status(err.status).send({"error": err.message});
    };
};
