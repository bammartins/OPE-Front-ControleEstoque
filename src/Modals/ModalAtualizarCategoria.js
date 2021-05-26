import { Modal, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import {useState} from "react";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

export default function ModalAtualizarCategoria(props) {

    const [atualizaCategoria, setAtualizaCategoria] = useState('')

    let categorias = []

    axios({
        method: 'get',
        baseURL: 'http://localhost:8080/categorias/todas'
    }).then(response => {
        categorias = response.data
        console.log(categorias)
    })

    const clickHandler = () => {
        axios.post('http://localhost:8080/categoria', {
            "nome" : atualizaCategoria
        })
            .then(response => {
                console.log("SÓ SUCESSO ", response);
            })
            .catch(error => {
                console.log("DEU ERRADO ", error);
                setAtualizaCategoria("")
                console.log("Erro")
            })
    }

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar Categoria</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label for="codigo">Nome</Form.Label>
                        <Form.Control as="select" required>
                            {categorias.forEach(categoria => (
                                <option value="" selected disabled>{categoria.categorias.nome}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="responsavel">Atualizar para...</Label>
                        <Form.Control id="responsavel" name="responsável" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={clickHandler} block>
                    Atualizar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}