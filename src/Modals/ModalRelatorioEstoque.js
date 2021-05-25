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
                <Modal.Title>Gerar relatório</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Label for="relatorio">Busca por...</Label>
                <Form.Control as="select" required>
                    <option value="" selected disabled>Escolha...</option>
                    <option value="produto">Produtos</option>
                    <option value="usuario">Usuários</option>
                    <option value="fornecedor">Fornecedores</option>
                    <option value="vendasDiarias">Vendas Diárias</option>
                    <option value="vendasMensais">Vendas Mensais</option>
                    <option value="comprasDiarias">Compras Diárias</option>
                    <option value="comprasMensais">Compras Mensais</option>
                    <option value="contatoFornecedores">Contato Fornecedores</option>
                </Form.Control>

                <hr />
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Label for="codigo">Dia</Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Label for="mes">Mês</Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <hr />

                    <Form.Group controlId="">
                        <Label for="save">Salvar em...</Label>
                        <Form.Control name="save" />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

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