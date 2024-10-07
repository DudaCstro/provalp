import { useState } from "react";
import { Container } from "react-bootstrap";
export default function DetalhesCandidato(props) {
    const[questao, setQuestao] = useState("");
    function inserirDuvida(){
        props.candidatoSelecionado.questionamentos.push(questao);
    }
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            {/* <img src={props.candidatoSelecionado.avatar}> </img> */}
            <p> Eu sou : {props.candidatoSelecionado.nome} </p>
            <p> Email : {props.candidatoSelecionado.email}</p>
            <p>Essas são minhas propostas</p>
            <ul>
                {props.candidatoSelecionado.propostas.map((propostas) => {
                    return <li>{propostas}</li>
                })}
            </ul>
            <h2>Dúvidas?</h2>
            <p> Insira sua dúvida aqui:</p>
            <input type="text" id="duvida"></input>
            <button onClick={()=> {
                inserirDuvida();
            }}></button>
        </Container>
    );
}
