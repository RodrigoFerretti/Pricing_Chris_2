import { RequestObjects, RequestDTO, requestJSON } from "./Repository/RequestObjects"
import { NegotiationObjects, NegotiationDTO } from "./Repository/NegotiationObjects";
import { Negotiation } from "./Application/Entities/Negotiation";


const main = async () => {
    const requestJSON: requestJSON = {clientId: 2, sellerId: 1, productId: 1, priceOffer: 50.00};
    const requestDTO: RequestDTO = await new RequestObjects().from(requestJSON);
    const negotiationDTO: NegotiationDTO = await new NegotiationObjects().from(requestDTO);
    const negotiation: Negotiation = new Negotiation(negotiationDTO);
    console.log(negotiation);
};

main();
