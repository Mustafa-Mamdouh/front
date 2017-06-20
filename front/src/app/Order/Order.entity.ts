import { IService } from '../Infrastructure/IService'
import { ServiceDto } from './service.dto';
import { Attribute } from './attributes.entity'
export class Order {
    address: string;
    email: string;
    phone: string;
    userName: string;
    quantity: number;
    serviceDto: ServiceDto = new ServiceDto();
    setValues(service: IService) {
        this.serviceDto.id = service.id;
        this.serviceDto.name = service.name;
        this.serviceDto.suspensionFees = service.suspensionFees;
        this.serviceDto.terminationFees = service.terminationFees;
        this.serviceDto.type = service.type;
        this.serviceDto.dateCreated = service.dateCreated;
        this.serviceDto.deliveryDays = service.deliveryDays;
        this.serviceDto.attributesValue = new Array<Attribute>();
        let attribute = new Attribute();
        for (let attr of service.attributeCollection) {
            attribute.id = attr.id;
            attribute.name = attr.name;
            attribute.value = attr.attributeValueListCollection[0].value;
            attribute.type = attr.type;
            this.serviceDto.attributesValue.push(attribute);
        }


    }
}