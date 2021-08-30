import { RequestEntities, RequestContext, requestJSON } from "./repository/requestEntities"
import { NegotiationEntities, NegotiationContext } from "./repository/negotiationEntities";
import { Negotiation } from "./application/negotiation";
import { HighestTPV } from "./repository/highestTPV";


const main = async () => {
    const requestJSON: requestJSON = {clientId: 2, sellerId: 1, productId: 1, priceOffer: 50.00};
    const requestContext: RequestContext = await new RequestEntities().from(requestJSON);
    const negotiationContext: NegotiationContext = await new NegotiationEntities().from(requestContext);
    const highestTPV: number = await new HighestTPV().fromClients();
    const negotiation: Negotiation = new Negotiation(negotiationContext, highestTPV);
    console.log(JSON.stringify(negotiation, null, 2));
};

main();
