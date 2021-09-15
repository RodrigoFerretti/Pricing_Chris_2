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
        const prices: Array<LocationPrice | CityPrice | StatePrice> = [
            this.locationPrice, 
            this.cityPrice, 
            this.statePrice
        ];
        return (sorting == `asc`) 
        ? prices.sort((current, next) => next.price - current.price) 
        : prices.sort((current, next) => current.price - next.price);
    };
};
