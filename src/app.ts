import { NegotiationRequest } from "./application/negotiation/negotiationRequest";
import { NegotiationResponse } from "./application/negotiation/negotiationResponse";
import { NegotiationService } from "./application/negotiationService";


const main = async () => {
    const negotiationRequest: NegotiationRequest = new NegotiationRequest(
        {
            clientId: 1,
            sellerId: 1,
            productId: 1,
            priceOffer: 10
        }
    );
    const negotiationResponse: NegotiationResponse = await new NegotiationService(negotiationRequest).getResponse();
    console.log(JSON.stringify(negotiationResponse, null, 2));
};

main();
