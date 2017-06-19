import { IService } from '../Infrastructure/IService'
import { ServiceDto } from './service.dto';
export class Order {
    address: string;
    email: string;
    phone: string;
    userName: string;
    quantity: number;
    serviceDto: ServiceDto=new ServiceDto();
    setValues(service: IService) {
        this.serviceDto.id = service.id;
        this.serviceDto.name = service.name;
        this.serviceDto.suspensionFees = service.suspensionFees;
        this.serviceDto.terminationFees = service.terminationFees;
        this.serviceDto.type = service.type;
        this.serviceDto.dateCreated = service.dateCreated;
        this.serviceDto.deliveryDays = service.deliveryDays;
        for (let attr of service.attributeCollection)
            this.serviceDto.attributesValue.set(attr.id,attr.attributeValueListCollection.values[0] )
            

    }
}