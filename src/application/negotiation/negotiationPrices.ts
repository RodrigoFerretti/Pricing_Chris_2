import { LocationPrice } from "../../domain/locationPrice";
import { CityPrice } from "../../domain/cityPrice";
import { StatePrice } from "../../domain/statePrice";


export class NegotiationPrices {
    locationPrice: LocationPrice;
    cityPrice: CityPrice;
    statePrice: StatePrice;

    constructor(locationPrice: LocationPrice, cityPrice: CityPrice, statePrice: StatePrice) {
        this.locationPrice = locationPrice;
        this.cityPrice = cityPrice;
        this.statePrice = statePrice;
    };

    getOrderedArray(sorting: `asc` | `desc` = `asc`) {
        const prices: (LocationPrice | CityPrice | StatePrice)[] = [
            this.locationPrice, 
            this.cityPrice, 
            this.statePrice
        ];
        return prices.sort((current, next) => 
        {
            return (sorting === `asc`) ? next.price - current.price : current.price - next.price
        }
        );
    };
};
