import {IAttributeValue} from './IAttributeValue'
export class IAttribute {
    id: number;
    name:string;
    mandatory: string;
    type: string;
    attributeValueListCollection:Array<IAttributeValue>;

}