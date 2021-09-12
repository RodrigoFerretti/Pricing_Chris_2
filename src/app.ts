import { LocationPrice } from "./domain/locationPrice";
import { LocationPriceRepository } from "./infra/repository/locationPriceRepository";


const main = async () => {
    const locationPrice: LocationPrice = await new LocationPriceRepository().getById({productId: 1, locationId: 1, segmentId: 1});
    console.log(locationPrice);
};
