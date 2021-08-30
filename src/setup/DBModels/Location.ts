import { DbModel } from "../DbModel"


export class LocationModel extends DbModel {
    tableName = `location`;
    columns!: {
        id: number,
        name: string,
        city_id: number,
        state_id: number
    };
};
