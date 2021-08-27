import { RequestEntities, RequestContext, requestJSON } from "./Repository/RequestObjects"
import { NegotiationEntities, NegotiationContext } from "./Repository/NegotiationObjects";
import { Negotiation } from "./Application/Entities/Negotiation";


const main = async () => {
    const requestJSON: requestJSON = {clientId: 2, sellerId: 1, productId: 1, priceOffer: 50.00};
    const requestContext: RequestContext = await new RequestEntities().from(requestJSON);
    const negotiationContext: NegotiationContext = await new NegotiationEntities().from(requestContext);
    const negotiation: Negotiation = new Negotiation(negotiationContext);
    console.log(negotiation);
};

main();
