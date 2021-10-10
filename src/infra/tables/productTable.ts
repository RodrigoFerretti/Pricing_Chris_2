import { Product } from "../../domain/product"
import { iTable } from "./interfaces/iTable"


export class ProductTable implements iTable<Product> {
    name = `product`;
    columns = {
        id: `id`,
        name: `name`,
        fabricationCosts: `fabrication_costs`
    };
    primaryKeys = [`id`] as const;
};
