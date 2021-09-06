// import { RequestEntities, RequestContext } from "./repository/requestEntities"
// import { NegotiationEntities, NegotiationContext } from "./repository/negotiationEntities";
// import { Negotiation } from "./application/negotiation";
// import { HighestTPV } from "./repository/highestTPV";

import { Client } from "./domain/client";
import { Database } from "./setup/DbConnect"
import { ExcludeMethods } from "./utils/excludeMethodsType"

// const main = async () => {
//     const requestJSON: requestJSON = {clientId: 1, sellerId: 3, productId: 1, priceOffer: 0.10};
//     const requestContext: RequestContext = await new RequestEntities().from(requestJSON);
//     const negotiationContext: NegotiationContext = await new NegotiationEntities().from(requestContext);
//     const highestTPV: number = await new HighestTPV().fromClients();
//     const negotiation: Negotiation = new Negotiation(negotiationContext, highestTPV);
//     console.log(JSON.stringify(negotiation, null, 2));
// };

// main();


const main = async () => {
    const connection = await new Database().connection();
    const [result] = await connection.query(`SELECT id id, name name, tpv tpv, segment_id segmentId, location_id locationId from client WHERE client.segment_id = 1`)
    console.log(result);
};

main();