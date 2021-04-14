export class Threat {
    threatId: number | undefined;
    threatName: string | undefined;

    constructor(threatId?: number, threatName?: string)
    {
        this.threatId = threatId;
        this.threatName = threatName;
    }
}
