export interface ColorHex{
    id:number;
    name:string;
    isDefault:boolean;
    rgb:ColorRGB;
}

export interface ColorRGB{
    [key:string]:number;
}

export interface Filter{
    id:string;
    name:string;
    isChecked:boolean;
}