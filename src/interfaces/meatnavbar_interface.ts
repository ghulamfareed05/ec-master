export interface Variant{
    variantName:string;
}
export interface Type{
    typeName:string
    variants?:Variant[]
}
export interface Subcategory{
    subcategoryName:string;
    types?:Type[]
    className?:string;
}