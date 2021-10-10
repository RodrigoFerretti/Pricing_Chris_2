import { NegotiationRequest } from "./negotiation/negotiationRequest";
import { NegotiationService } from "./negotiationService";

import { Product } from "../domain/product";
import { Location } from "../domain/location";
import { Segment } from "../domain/segment";
import { LocationPrice } from "../domain/locationPrice";
import { City } from "../domain/city";
import { CityPrice } from "../domain/cityPrice";
import { State } from "../domain/state";
import { StatePrice } from "../domain/statePrice";


import { LocationPriceRepository } from "../infra/repository/locationPriceRepository";
import { CityPriceRepository } from "../infra/repository/cityPriceRepository";
import { StatePriceRepository } from "../infra/repository/statePriceRepository";


export class PromotionService extends NegotiationService {
    negotiationRequest: NegotiationRequest

    constructor(negotiationRequest: NegotiationRequest) {
        super(negotiationRequest);
        this.negotiationRequest = negotiationRequest;
    };


    protected async getLocationPrice(product: Product, location: Location) {
        const locationPrice: LocationPrice = await new LocationPriceRepository().getFirst(
            {
                where: {
                    productId: product.id,
                    locationId: location.id,
                },
                orderBy: {
                    key: `price`
                }
            }
        );
        return locationPrice;
    };

    protected async getCityPrice(product: Product, city: City) {
        const cityPrice: CityPrice = await new CityPriceRepository().getFirst(
            {
                where: {
                    productId: product.id,
                    cityId: city.id,
                },
                orderBy: {
                    key: `price`
                }
            }
        );
        return cityPrice;
    };

    protected async getStatePrice(product: Product, state: State) {
        const statePrice: StatePrice = await new StatePriceRepository().getFirst(
            {
                where: {
                    productId: product.id,
                    stateId: state.id,
                },
                orderBy: {
                    key: `price`
                }
            }
        );
        return statePrice;
    };
};
