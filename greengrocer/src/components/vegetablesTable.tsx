// Sebzeleri oluşturup listelediğim sayfa.

import { FruitOrVeggy, TableWrapperTypes } from "./types"

export const Vegetables = ({ inputValue, isThere }: TableWrapperTypes) => {
    const veggies: FruitOrVeggy = [
        { id: 1, name: "Ispanak", price: "45", category: "Veggie", stock: true },
        { id: 2, name: "Mercimek", price: "20", category: "Veggie", stock: false },
        { id: 3, name: "Domates", price: "15", category: "Veggie", stock: true },
        { id: 4, name: "Kabak", price: "20", category: "Veggie", stock: false },
        { id: 5, name: "Turp", price: "35", category: "Veggie", stock: true },
        { id: 6, name: "Maydonoz", price: "30", category: "Veggie", stock: false },
        { id: 7, name: "Kapya Biber", price: "35", category: "Veggie", stock: true },
        { id: 8, name: "Yeşil Biber", price: "30", category: "Veggie", stock: false },
        { id: 9, name: "Dolmalık Biber", price: "35", category: "Veggie", stock: false },
        { id: 10, name: "Yaprak(Sarmalık)", price: "65", category: "Veggie", stock: true },
        { id: 11, name: "Soğan", price: "20", category: "Veggie", stock: true },
        { id: 12, name: "Mantar", price: "40", category: "Veggie", stock: false },
        { id: 13, name: "Kıl Biber", price: "35", category: "Veggie", stock: true },
        { id: 14, name: "Semiz Otu", price: "20", category: "Veggie", stock: false },
    ]

    return (

        <>

            <div>
                <ul>
                    <h2>VEGİTABLES</h2>
                    <h5>Kg Fiyatı</h5>

                    {veggies.filter((veggie) => {
                        const input = veggie.name.toLowerCase().includes(inputValue.toLowerCase());
                        const checkbox = !isThere || veggie.stock;
                        return input && checkbox;
                    }).map((veggie) => {
                        if (veggie.name.toLowerCase().includes(inputValue.toLowerCase()))
                            return (
                                <li key={veggie.id}>{`
                                ${veggie.name}- ${veggie.price}₺
                                `
                                }
                                </li>
                            )

                    })

                    }
                </ul>
            </div>

        </>

    )
}