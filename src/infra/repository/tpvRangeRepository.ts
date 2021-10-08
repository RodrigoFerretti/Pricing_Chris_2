import { Query } from "../database/query"
import { TPVRange } from "../../domain/tpvRange";
import { TPVRangeMap } from "../mappers/tpvRangeMap";
import { Repository } from "./abstract/repository";


export class TPVRangeRepository extends Repository<TPVRange> {
    tpvRangeMap: TPVRangeMap

    constructor() {
        const tpvRangeMap: TPVRangeMap = new TPVRangeMap();
        super(tpvRangeMap);
        this.tpvRangeMap = tpvRangeMap;
    };

    public async getById(primaryKeys: Pick<TPVRange, TPVRangeMap['primaryKeys'][number]>) {
        return await super.getById<TPVRangeMap['primaryKeys']>(primaryKeys);
    };

    public async getByTPV(tpv: number) {
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
