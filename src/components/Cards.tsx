import { useState } from 'react'

interface CardProps { //Props no final do nome, é uma convenção/boa pratica
    productName: string;
    price: number;
    qntdItens: number;
    imageUrl: string;
}

  const Cards = (props: CardProps) => {
    const [clicks, setClicks] = useState(0) 
    
    function increment() {
        setClicks(clicks + 1); 
        {clicks === 0 ? alert("Item adicionado aos favoritos") 
        :alert("Este item ja esta na sua lista de favoritos")} 
      }

    return (
      <div className="w-100 max-h-full	 text-left flex flex-col items-center justify-center bg-slate-200">
      <img src={props.imageUrl} alt="" className="w-80"/>
      <h1 className="text-xl font-medium">{props.productName}</h1>
        <span className="text-xl text-lime-600 font-bold">R${props.price}</span>
    <button className="w-56 h-14 bg-blue-600 rounded-md text-white font-md" onClick={increment}>{clicks == 0 ? "Clique para adicionar aos favoritos!" : "Favoritado"}
    </button>
</div>
    )
  }

export default Cards;