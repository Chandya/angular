export class Control 
{
    controlId: number | undefined;
    controlName: string | undefined;

    constructor(controlId?:number, controlName?:string)
    {
        this.controlId = controlId;
        this.controlName = controlName;

    }

}
