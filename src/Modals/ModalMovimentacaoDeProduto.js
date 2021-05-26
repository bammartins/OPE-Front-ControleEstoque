import { Modal, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";
import {useState} from "react";


const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;
export default function ModalMovimentacaoDeProduto(props) {

    // const [codigoProduto, getCodigoProduto] = useState('')

    let categoria = []
    let fornecedor = []
    let marca = []

    const clickHandlerBusca = () => {
        axios.get('http://localhost:8080/movimentacao/todas?')
            .then(response => {
                const codigoProduto = response.data;
            })
    }

    const clickHandler = () => {
        axios.post('http://localhost:8080/movimentacao/todas', {
        })
    }

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                {props.saida ? <Modal.Title>Saída de Produto</Modal.Title> : <Modal.Title>Entrada de Produto</Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group controlId="">
                        <Form.Label for="codigoProduto">Código do Produto</Form.Label>
                        <Form.Control name="codigoProduto" pattern="[a-zA-Z0-9]+" type="email" placeholder="Insira o código" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                        <Form.Text className="text-muted">Código com caracteres alfanuméricos.</Form.Text>
                        <Button className="mt-8" variant="primary" size="sm" onClick={clickHandlerBusca} block>Buscar</Button>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Form.Label for="categoria">Categoria</Form.Label>
                        <Form.Control name="categoria" readOnly/>
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Label for="preco">Preço</Form.Label>
                        <Form.Control name="preco" required />
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Form.Label for="fornecedor">Forncecedor</Form.Label>
                        <Form.Control as="select" required>
                            {/*{fornecedor.forEach(fornecedor => (*/}
                            {/*    <option value="" selected disabled>{categoria}</option>*/}
                            {/*))}*/}
                        </Form.Control>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Form.Label for="marca">Marca</Form.Label>
                        <Form.Control name="marca" readOnly/>
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                    <Form.Label for="codigo">Tamanho</Form.Label>
                    {["P", "M", "G", "GG"].map(size => (
                        <Checkbox
                            name="paymentMethod"
                            required
                            type="radio"
                            label={size}
                            id={`size-${size.toLowerCase()}`} />
                    ))}

                    <br/>

                    {/*
                        Nesse trecho excluímos a saída da movimentação e deixamos em um modal somente.
                        O que difere é o ENUM que está no backend como AUMENTO e RETIRADA
                    */}

                    <Form.Group>
                        <Form.Label for="tipoMovimentacao">Tipo Movimentação</Form.Label>
                        <Form.Control id="tipoMovimentacao" as="select" required>
                            <option value="" selected disabled>Escolha...</option>
                            <option value="aumento">AUMENTO</option>
                            <option value="retirada">RETIRADA</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Label for="codigo">Quantidade</Form.Label>
                        <Form.Control className="mb-2" name="quantidade" required />
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={clickHandler} block>
                    Efetuar {props.saida ? 'saída' : 'entrada'}
                </Button>
            </Modal.Footer>
        </Modal >
    );
}

