import { Request, Response } from "express";
import { NegotiationService } from "../application/negotiationService";
import { NegotiationRequest } from "./requests/negotiationRequest";
import { NegotiationResponse } from "../application/negotiation/negotiationResponse";
import { NegotiationRequestValidator } from "./validators/negotiationRequest";


export class NegotiationController {

    static async post(req: Request, res: Response) {
        const { error } = NegotiationRequestValidator.schema.validate(req.body);
        if (error) res.status(400).send(error.message);
        const negotiationRequest: NegotiationRequest = req.body;
        const negotiationResponse: NegotiationResponse = await new NegotiationService(
            negotiationRequest
        ).getResponse();
        res.status(200).send(negotiationResponse);
    };
};
