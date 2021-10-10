import { NegotiationRequest } from "./application/negotiation/negotiationRequest";
import { NegotiationResponse } from "./application/negotiation/negotiationResponse";
import { NegotiationService } from "./application/negotiationService";
import { PromotionService } from "./application/promotionService";


const main = async () => {
    const negotiationRequest: NegotiationRequest = new NegotiationRequest(
        {
            clientId: 1,
            sellerId: 1,
            productId: 1,
            priceOffer: 0
        }
    );
    const negotiationResponse: NegotiationResponse = await new NegotiationService(negotiationRequest).getResponse();
    const promotionResponse: NegotiationResponse = await new PromotionService(negotiationRequest).getResponse();
    console.log(JSON.stringify(negotiationResponse, null, 2));
    console.log(JSON.stringify(promotionResponse, null, 2));
};

main();
