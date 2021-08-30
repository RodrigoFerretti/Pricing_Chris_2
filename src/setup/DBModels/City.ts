import { DbModel } from "../DbModel"


export class CityModel extends DbModel {
    tableName = `city`;
    columns!: {
        id: number,
        name: string,
        state_id: number
    };
};
