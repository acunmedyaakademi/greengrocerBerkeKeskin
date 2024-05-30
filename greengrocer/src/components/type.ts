// Type tanımı yaptığım dosya.

import { Dispatch, SetStateAction } from "react";

export type TableWrapperTypes = {
    inputValue: string;
    isThere: boolean;
}

export type InputAreaProps = {
    inputValue: string;
    setInputValue: Dispatch<SetStateAction<string>>;
    isThere: boolean;
    setIsThere: Dispatch<SetStateAction<boolean>>;
}

export type FruitOrVeggy = {
    id: number;
    name: string;
    price: string;
    stock: boolean;

}

export type FruitOrVeggies = FruitOrVeggy[]