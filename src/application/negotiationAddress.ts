import { Location } from "../domain/location";
import { City } from "../domain/city";
import { State } from "../domain/state";


export class NegotiationAddress {
    location: Location;
    city: City;
    state: State;

    constructor(location: Location, city: City, state: State) {
        this.location = location;
        this.city = city;
        this.state = state;
    };
};
