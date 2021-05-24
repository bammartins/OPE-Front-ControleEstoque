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
export default function ModalCadastroProduto(props) {
    const [categoria, setCategoria] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [modelo, setModelo] = useState('')
    const [cor, setCor] = useState('')
    const [marca, setMarca] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [tamanho, setTamanho] = useState('')

    const clickHandler = () => {
        axios.post('http://localhost:8080/produtos', {
            "categoria" : categoria,
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

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Cadastro de Produtos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label for="codigo">Categoria</Form.Label>
                        <Form.Control name="categoria" required />
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Form.Label for="codigo">Preço</Form.Label>
                        <Form.Control name="preco" required />
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Quantidade</Label>
                        <Form.Control name="quantidade" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Label for="codigo">Descrição</Label>
                        <Form.Control name="descrição" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Modelo</Label>
                        <Form.Control name="modelo" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Cor</Label>
                        <Form.Control name="cor" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Form.Label for="codigo">Marca</Form.Label>
                        <Form.Control name="marca" required />
                        <Form.Control.Feedback type="invalid">Quantidade inválida</Form.Control.Feedback>
                    </Form.Group>

                    <Label for="codigo">Fornecedor</Label>
                    <Form.Control as="select" required>
                        <option value="" selected disabled>Escolha...</option>
                        <option value="AX">Look</option>
                        <option value="AL">Belissima</option>
                        <option value="DZ">Camila`s Fashion</option>
                        <option value="AS">Amanda</option>
                        <option value="AD">Dandara</option>
                        <option value="AO">Outlet</option>
                        <option value="AI">Louney</option>
                        <option value="AF">Outras</option>
                    </Form.Control>

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