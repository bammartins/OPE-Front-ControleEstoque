import axios from "axios";
import { useState } from "react";
import { Modal, Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

export default function ModalCadastroUsuario(props) {
    const [registro, setRegistro] = useState('funcionario');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    const clickHandler = () => {
    //     axios({
    //         method: 'post',
    //         baseURL: "vla",
    //         data: {
    //             "nome": login,
    //             "password": senha
    //         }
    //     }).then(response => {
    //
    //     })
    }

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label for="registro">Registro</Form.Label>
                        <Form.Control id="registro" as="select" required onChange={(event) => { setRegistro(event.target.value) }}>
                            <option value="" selected disabled>Escolha...</option>
                            <option value="funcionario">Funcionário</option>
                            <option value="administracao">Administrador</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Label for="login">Login</Label>
                        <Form.Control id="login" name="login" required={true} onChange={(event) => { setLogin(event.target.value) }} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Label for="codigo">Senha</Label>
                        <Form.Control name="senha" type="password" required={true} onChange={(event) => { setSenha(event.target.value) }} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={clickHandler} block>
                    Efetuar cadastro
                </Button>
            </Modal.Footer>
        </Modal>
    );
}