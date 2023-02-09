import styled from "styled-components";


export const Conteiner = styled.div`
 max-width: 700px;
 background: #FFF;
 border-radius: 4px;
 box-shadow: 0 0 20px rgba(0,0,0,0.2);
 padding:30px;
 margin: 80px auto; 
 flex-direction: row;
 svg{
    margin-right:2px;
 }

`


export const Title = styled.h1`
 align-item: center; 
 display: flex; 
 flex-direction: row;
 font-size: 19px;

`



export const Form = styled.form`
margin-top:30px;
display:flex;
flex-direction: row;

input {
   flex:1;
   border: 1px solid #DDD;
   padding: 10px 15px;
   border-radius: 4px
   font-size: 17px;
   color: #FFF; 
}
`

export const BotaoEnviar = styled.button.attrs({
   type: 'submit'
})`
  background: #0D2636;
  border 0;
  border-radius: 4px;
  padding: 8px;
  margin-left: 5px;
  display:flex;
  justify-content: center;
  align-items: center;

`