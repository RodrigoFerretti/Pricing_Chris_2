import { SellerModel } from "./Domain/DBModels/Seller"


const main = async () => {

    let seller: SellerModel = new SellerModel();
    const response = await seller.query().filter({id: 1231}).orderBy(`id`, `DESC`).first()
    console.log(response);

}

main();
