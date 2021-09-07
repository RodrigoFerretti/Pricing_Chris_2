import { Product } from "../../../domain/product"
import { ITableMap } from "../iTableMap"


export class ProductMap implements ITableMap<Product> {
    name = `product`;
    columnsMap = {
        id: `id`,
        name: `name`,
        fabricationCosts: `fabrication_costs`
    };
};
