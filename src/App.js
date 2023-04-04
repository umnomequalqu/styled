import { Fundo,Titulo,Campo,Conteudo } from "./Styled/Layout"
import './public.css'
import axios from 'axios';
import {useState,useEffect} from 'react';
function App() {
  const [pessoas, setPessoas] = useState([]);
  const url = "https://randomuser.me/api/?results=10"
  useEffect(()=>{
    axios.get(url)
      .then(res=>console.log(res))
  },[])
  return (
    <Fundo>
    <Titulo>Styled Components</Titulo>
    <Campo>
        <Conteudo>Batatinha quando nasce</Conteudo>
        <Conteudo>Mac leva pras ideia</Conteudo>
    </Campo>
    </Fundo>
  );
}

export default App;
