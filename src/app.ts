import { NegotiationRequest } from "./application/negotiationRequest";
import { NegotiationResult } from "./application/negotiationResult";
import { NegotiationService } from "./application/negotiationService";


const main = async () => {
    const negotiationRequest: NegotiationRequest = new NegotiationRequest({
        clientId: 1,
        sellerId: 1,
        productId: 1,
        priceOffer: 10
    })
    const result: NegotiationResult = await new NegotiationService(negotiationRequest).getResult();
    console.log(JSON.stringify(result, null, 2));
};

main();