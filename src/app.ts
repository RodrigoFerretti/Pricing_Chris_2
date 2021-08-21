import { SellerModel } from "./Domain/DBModels/Seller"


const main = async () => {
    let segment: SellerModel = new SellerModel();
    const response = await segment.query().filter({id: 1}).orderBy(`id`, `DESC`).first()
    console.log(response);
}

main();
