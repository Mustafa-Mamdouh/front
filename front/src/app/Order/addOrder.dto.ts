import { ServiceDto } from './service.dto'
import { IService } from '../Infrastructure/IService'
import { Attribute } from './attributes.entity'
export class AddOrderDto {
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

        for (let attr of service.attributeCollection) {
            let attribute = new Attribute();
            attribute.id = attr.id;
            attribute.name = attr.name;
            attribute.type = attr.type;
            console.log(attr)
            if (attr.type == 'Single'&& attr.attributeValueListCollection.length>0) {
                console.log(attr.attributeValueListCollection[0].value);
                attribute.value = attr.attributeValueListCollection[0].value;
            }
            else
                for (let attrValue of attr.attributeValueListCollection)
                    attribute.valueList.push(attrValue.value);
            this.serviceDto.attributesValue.push(attribute);
        }
        console.log('service dto');
        console.log(this.serviceDto);

    }
}