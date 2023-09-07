// import { Button } from "flowbite-react";
// import { Formik } from 'formik';
// import { object, string, number, date, InferType } from 'yup';

import Cards from "./components/Cards";



function App() {

  return (
    <main className="flex flex-col lg:h-full lg:flex-row lg:justify-around">
     <Cards
        productName="Desinfetante veja, 500ml!"
        price={20.99} 
        qntdItens={60}
        imageUrl="https://www.vejalimpeza.com.br/produtos/_jcr_content/root/lowerContentArea/table/header4.coreimg.png/1629750054912/imagem-produto-veja-limpeza-pesada-original-1l.png"
      />

     <Cards
        productName="Desinfetante veja, 500ml!"
        price={20.99} 
        qntdItens={60}
        imageUrl="https://www.vejalimpeza.com.br/produtos/_jcr_content/root/lowerContentArea/table/header4.coreimg.png/1629750054912/imagem-produto-veja-limpeza-pesada-original-1l.png"
      />

     <Cards
        productName="Desinfetante veja, 500ml!"
        price={20.99} 
        qntdItens={60}
        imageUrl="https://www.vejalimpeza.com.br/produtos/_jcr_content/root/lowerContentArea/table/header4.coreimg.png/1629750054912/imagem-produto-veja-limpeza-pesada-original-1l.png"
      />
     
    </main>
    )
}

export default App;
