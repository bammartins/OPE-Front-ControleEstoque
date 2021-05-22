import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import axios from 'axios'

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;

export default function ModalRelatorioEstoque(props) {
    let categoria = [];
    let modelo = [];
    let cor = [];
    let fornecedor = [];
    let preco = [];
    let marca = [];

    // axios({
    //     method: 'get',
    //     baseURL: "bla",
    // }).then(response => {
    //     categoria = response.data
    //     modelo = response.data
    //     cor = response.data
    //     fornecedor = response.data
    //     preco = response.data
    //     marca = response.data
    // })

    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Gerar relatório de estoque</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Label for="codigo">Data Início</Label>
                                <Form.Control name="dataInicio" required/>
                            </Col>
                            <Col>
                                <Label for="codigo">Data Fim</Label>
                                <Form.Control name="dataFim" required>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <hr />

                    <Label for="fornecedor">Fornecedor</Label>
                    <Form.Control as="select" required>
                        {fornecedor.forEach(fornecedor => (
                            <option value="" selected disabled>{fornecedor}</option>
                        ))}
                    </Form.Control>

                    <hr/>

                    <Label for="categoria">Categoria</Label>
                    <Form.Control as="select" required>
                        {categoria.forEach(categoria => (
                            <option value="" selected disabled>{categoria}</option>
                        ))}
                        {/*<option value="" selected disabled>Escolha...</option>*/}
                        {/*<option value="AG">Todos</option>*/}
                        {/*<option value="AF">Calça</option>*/}
                        {/*<option value="AX">Camiseta</option>*/}
                        {/*<option value="AL">Vestido</option>*/}
                        {/*<option value="DZ">Biquini</option>*/}
                        {/*<option value="AS">Sapato</option>*/}
                        {/*<option value="AD">Bolsa</option>*/}
                        {/*<option value="AO">Cinto</option>*/}
                        {/*<option value="AI">Shorts</option>*/}
                        {/*<option value="AQ">Saia</option>*/}
                        {/*<option value="AG">Lenço</option>*/}
                    </Form.Control>

                    <hr />

                    <Label for="marca">Marca</Label>
                    <Form.Control as="select" required>
                        {marca.forEach(marca => (
                            <option value="" selected disabled>{marca}</option>
                        ))}
                    </Form.Control>

                    <hr />

                    <Form.Label for="codigo">Tamanho</Form.Label>
                    {["P", "M", "G", "GG"].map(size => (
                        <Checkbox
                            name="paymentMethod"
                            required
                            type="checkbox"
                            label={"Tamanho " + size}
                            id={`size-${size.toLowerCase()}`} />
                    ))}

                    <hr />

                    <Label for="modelo">Modelo</Label>
                    <Form.Control as="select" required>
                        {modelo.forEach(modelo => (
                            <option value="" selected disabled>{modelo}</option>
                        ))}
                    </Form.Control>

                    <hr />

                    <Label for="cor">Cor</Label>
                    <Form.Control as="select" required>
                        {cor.forEach(cor => (
                            <option value="" selected disabled>{cor}</option>
                        ))}
                    </Form.Control>

                    <hr/>

                    <Label for="preco">Preço</Label>
                    <Form.Control as="select" required>
                        {preco.forEach(preco => (
                            <option value="" selected disabled>{preco}</option>
                        ))}
                    </Form.Control>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleCloseListener} block>
                    Gerar relatório
            </Button>
            </Modal.Footer>
        </Modal>
    );
}