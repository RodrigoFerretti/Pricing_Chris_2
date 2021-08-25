import { DbModel } from "../../Setup/DbModel"


export class SegmentModel extends DbModel {
    tableName = `segment`;
    columns!: {
        id: number,
        name: string
    };
};
