import { Seller } from "./domain/seller";
import { SellerRepository } from "./infra/repository/sellerRepository";


const main = async () => {
    const seller: Seller = await new SellerRepository().getById({id: 1})
    console.log(seller);
};

