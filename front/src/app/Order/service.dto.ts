import { IComponent } from '../Infrastructure/IComponent';
import { IAttribute } from '../Infrastructure/IAttribute';
import { IAttributeValue } from '../Infrastructure/IAttributeValue';
import{Attribute} from'./attributes.entity';
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
    attributesValue=new Array<Attribute>();

}