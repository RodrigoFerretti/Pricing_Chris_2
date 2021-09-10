import { Product } from "../../domain/product"
import { TableMap } from "./interfaces/TableMap"


export class ProductMap implements TableMap<Product> {
    name = `product`;
    columnsMap = {
        id: `id`,
        name: `name`,
        fabricationCosts: `fabrication_costs`
    };
};
