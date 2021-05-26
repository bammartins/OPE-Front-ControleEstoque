import { Modal, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import {useState} from "react";
import axios from "axios";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;
export default function ModalCadastroCategoria(props) {
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [modelo, setModelo] = useState('')
    const [cor, setCor] = useState('')
    const [marca, setMarca] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [tamanho, setTamanho] = useState('')

    // let categoria = []

    const clickHandler = () => {
        axios.post('http://localhost:8080/produtos', {
            "preco" : preco,
            "quantidade" : quantidade,
            "modelo" : modelo,
            "cor" : cor,
            "marca" : marca,
            "fornecedor" : fornecedor,
            "tamanho" : tamanho
        })
            .then(responde => {
                console.log("Deu bom", responde)
            })
            .catch(error => {
                console.log("Deu RUIM!!!", error)
            })
    }

    // axios.get('http://localhost:8080/categorias/todas?', {
    // }).then(response => {
    //     categoria = response.data
    // })

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label for="codigo">Nome</Form.Label>
                        <Form.Control name="nome" required />
                        <Form.Control.Feedback type="invalid">Caracter Inválido</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={clickHandler} block>
                    Efetuar cadastro
                </Button>
            </Modal.Footer>
        </Modal>
    )
}