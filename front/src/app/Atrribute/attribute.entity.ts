import{AttributeValueList}from'./attributeValueList.entity';
export class Attribute
{
    attributeValue=new Array<AttributeValueList>();
    name:string;
    type:string;
    mandatory:number; 
    sort:number;
    //service:Service;
}
