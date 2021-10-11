import { Request, Response } from "express";
import { PromotionService } from "../application/promotionService";
import { NegotiationRequest } from "./requests/negotiationRequest";
import { NegotiationResponse } from "../application/negotiation/negotiationResponse";
import { NegotiationRequestValidator } from "./validators/negotiationRequest";


export class PromotionController {

    static async post(req: Request, res: Response) {
        const { error } = NegotiationRequestValidator.schema.validate(req.body);
        if (error) res.status(400).send(error.message);
        const promotionRequest: NegotiationRequest = req.body;
        const promotionResponse: NegotiationResponse = await new PromotionService(
            promotionRequest
        ).getResponse();
        res.send(promotionResponse);
    };
};
