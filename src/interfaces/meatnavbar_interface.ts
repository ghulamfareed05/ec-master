export interface MeatItem{
    text:string;
    link:string;
}
export interface MeatSubmenu{
    category:string;
    link:string
    submenu?:MeatItem[]
}
export interface MeatNavInterface{
    index?:number;
    text:string;
    link:string;
    menu?:MeatSubmenu[]
    className?:string;
}