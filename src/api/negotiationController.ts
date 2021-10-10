import { Request, Response } from "express";

import { NegotiationService } from "../application/negotiationService";
import { NegotiationRequest } from "../application/negotiation/negotiationRequest";
import { NegotiationResponse } from "../application/negotiation/negotiationResponse";


export class NegotiationController {

    static async post(req: Request, res: Response) {
        const negotiationRequest: NegotiationRequest = req.body;
        const negotiationResponse: NegotiationResponse = await new NegotiationService(negotiationRequest).getResponse();
        res.send(negotiationResponse);
    };

};
