import { Seller } from "./domain/seller";
import { SellerRepository } from "./repository/Entities/SellerRepository";



const main = async () => {
    const seller: Seller = await new SellerRepository().getById(1);
    console.log(seller);
};

main();
