import { IComponent } from '../Infrastructure/IComponent';
import { IAttribute } from '../Infrastructure/IAttribute';
import { IAttributeValue } from '../Infrastructure/IAttributeValue';
export class ServiceDto {
    id: number;
    name: string;
    type: string;
    dateCreated: string;
    isactive: string;
    terminationFees: string;
    suspensionFees: string;
    deliveryFees: string;
    deliveryDays: string;
    attributesValue:Map<number,string>=new Map<number,string>();

}