import { Modal, Form, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import {useState} from "react";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`
const SubLabel = styled.span`
 font-size: .9rem;
 color: #999;
 margin-left: .3rem
`

export default function ModalCadastroFornecedor(props) {
    const [nomeFantasia, setNomeFantasia] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Fornecedor</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group controlId="">
                        <Label for="codigo">Nome Fantasia</Label>
                        <Form.Control name="codigo" placeholder="Insira o nome fantasia" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Label for="codigo">Telefone</Label>
                        <Form.Control name="codigo" placeholder="(XX) XXXXX-XXXX" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Email</Label>
                        <Form.Control name="email" type="email" placeholder="email@exemplo.com" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group controlId="">
                        <Label for="codigo">Endereco</Label>
                        <Form.Control name="email" placeholder="Ex: Rua Augusta, 222" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Complemento </Label>
                        <SubLabel>(Opcional)</SubLabel>
                        <Form.Control name="email" placeholder="Ex: Travessa Rua X, Loja Y" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Label for="codigo">Estado </Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option>São Paulo</option>
                                    <option>Rio de Janeiro</option>
                                    <option>Outro</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Label for="codigo">Cidade </Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option>São Paulo</option>
                                    <option>Rio de Janeiro</option>
                                    <option>Outro</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">CEP</Label>
                        <Form.Control placeholder="XXXXX-XXX" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Label for="codigo">Documento</Label>
                        <Form.Control as="select" required>
                            <option value="" selected disabled>Escolha...</option>
                            <option value="AF">CPF</option>
                            <option value="AX">CNPJ</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Número do Documento</Label>
                        <Form.Control name="numreg" pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                            required />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleCloseListener} block>
                        Efetuar cadastro
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal >
    );
}