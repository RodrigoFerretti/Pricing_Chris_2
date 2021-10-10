import { Query } from "../database/query"
import { TPVRange } from "../../domain/tpvRange";
import { TPVRangeTable } from "../tables/tpvRangeTable";
import { Repository } from "./abstract/repository";


export class TPVRangeRepository extends Repository<TPVRange> {
    tpvRangeMap: TPVRangeTable

    constructor() {
        const tpvRangeMap: TPVRangeTable = new TPVRangeTable();
        super(tpvRangeMap);
        this.tpvRangeMap = tpvRangeMap;
    };

    async getById(primaryKeys: Pick<TPVRange, TPVRangeTable['primaryKeys'][number]>) {
        return await super.getById<TPVRangeTable['primaryKeys']>(primaryKeys);
    };

    async getByTPV(tpv: number) {
        const query: Query<TPVRange> = new Query<TPVRange>(this.tpvRangeMap).select().where(
            {
                minValue: {
                    lowerEqualThan: tpv
                },
                maxValue: {
                    higherEqualThan: tpv
                }
            }
        );
        const entity: TPVRange = await query.first();
        return entity;
    };
};
