import { Product } from "../../domain/product"
import { DatabaseTableMap } from "../tableMap"


export class ProductMap implements DatabaseTableMap<Product> {
    tableName = `product`;
    columnsMap = {
        id: `id`,
        name: `name`,
        fabricationCosts: `fabrication_costs`
    };
};
