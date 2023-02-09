import React,{useState,useEffect,useCallback} from 'react';
import {Form,Conteiner,BotaoEnviar,Title} from './styles';
import {FaGithub, FaPlus} from 'react-icons/fa'
import api from '../../Services/api';


export default function Home() {


   const [novoRepositorio,setNovoRepositorio] = useState('')
   const [dadosRequisicao,setDadosRequisicao] = useState([])



  const enviar = useCallback((e) => {
      e.preventDefault();
   
      async function requisicao(){
 
      
        //para chamar uma requisição http é sempre esse padrão nesse caso vamos concatenar com o novo repositorio 
        const response = api.get(`repos/${novoRepositorio}`);  
        const data = {
            name: response.data.full_name    
        }
      
        /*para atualizar os dados de um array e adicionar mais dados como objetos usamos o operador spread (...) 
         que consegue juntar os valores de um array e outro em um lugar só pegando o que já tinha e adicionando um novo */
      
        setDadosRequisicao([...dadosRequisicao,data])
        setNovoRepositorio('');
        console.log(dadosRequisicao)
    

        console.log(novoRepositorio);
       
    }

    requisicao()


  },[novoRepositorio,dadosRequisicao])

  

    function novorepo(e){
        setNovoRepositorio(e.target.value)
    }

    return ( 
        <Conteiner>

          
            <Title> 
            <FaGithub size={25}/>
                Home
            </Title>

            <Form onSubmit={enviar}>
                <input type="text" placeholder='Adicionar Repositorio' value={novoRepositorio} onChange={novorepo}/>

                <BotaoEnviar>
                    <FaPlus color='#FFF' size={14}/>
                </BotaoEnviar>

            </Form>
        </Conteiner>
     );
}

