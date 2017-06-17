import {IComponent} from './IComponent';
import {IAttribute} from './IAttribute';
import {IAttributeValue} from './IAttributeValue';
export class IService{ 
    id:number;
    name: string;
    type: string;
    dateCreated: string;
    isactive: string;
    terminationFees: string;
    suspensionFees: string;
    deliveryFees: string;
    deliveryDays: string;
    attributeCollection:Array<IAttribute>;
    attributeValueCollection:Array<IAttributeValue>;
    componentCollection:Array<IComponent>;

  }