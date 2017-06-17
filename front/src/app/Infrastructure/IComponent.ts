import {ICategory} from './ICatgorey';

export class IComponent{
id:number;
name:string;
description:string;
nrc:number;
mrc:number;
categoryId:ICategory;
serviceCollection:string[];
}