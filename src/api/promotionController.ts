import { Request, Response } from "express";

import { PromotionService } from "../application/promotionService";
import { NegotiationRequest } from "../application/negotiation/negotiationRequest";
import { NegotiationResponse } from "../application/negotiation/negotiationResponse";


export class PromotionController {

    static async post(req: Request, res: Response) {
        const promotionRequest: NegotiationRequest = req.body;
        const promotionResponse: NegotiationResponse = await new PromotionService(promotionRequest).getResponse();
        res.send(promotionResponse);
    };

};
