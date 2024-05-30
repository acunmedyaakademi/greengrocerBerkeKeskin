import { InputAreaProps } from "./types"

export const InputArea = ({ inputValue, setInputValue, isThere, setIsThere }: InputAreaProps) => {

    return (

        <>
            <div>
              <h1>Fulya Sanat Sokağı <br />
              Manavına Hoşgeldiniz.. </h1>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <br />
            <div>
                <input type="checkbox" checked={isThere} onChange={(e) => setIsThere(e.target.checked)} />
                <label htmlFor="">Only show products in stock</label>

            </div>
        </>

    )
}