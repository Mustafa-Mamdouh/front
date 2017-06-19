import { ServiceDto } from './service.dto'
export class AddOrderDto {
    address: string;
    email: string;
    phone: string;
    userName: string;
    quantity: number;
    serviceDto: ServiceDto;
}