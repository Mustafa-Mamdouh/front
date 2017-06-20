export class OrderDto {
    address: string;
    email: string;
    phone: string;
    userName: string;
    quantity: number;
    serviceId: number;
    attributes: Map<string, Array<String>>;
}