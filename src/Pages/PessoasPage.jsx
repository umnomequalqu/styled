import { Fundo,Titulo,Campo,Conteudo } from "../Styled/Layout"
import '../public.css'
import axios from 'axios';
import {useState,useEffect} from 'react';
import Pessoa from "../components/Pessoa";
function PessoasPage() {
  const [pessoas, setPessoas] = useState([]);
  const url = "https://randomuser.me/api/?results=10"
  useEffect(()=>{
    axios.get(url)
      .then(res=>setPessoas(res.data.results))
      .catch("Deu erro pegar os dados da API")
  },[])
  return (
    <Fundo>
    <Titulo>Styled Components</Titulo>
    <Campo>
        {pessoas.map((p,index)=><Pessoa key={index} {...p}/>)}
    </Campo>
    </Fundo>
  );
}

export default PessoasPage;