import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

const Checkbox = styled(Form.Check)`
    margin-bottom: 4px;
    display: flex;
    align-items: center;
`;

export default function ModalRelatorioVenda(props) {
    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Gerar relatório de vendas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Label for="codigo">Usuario</Label>
                    <Form.Control as="select" required>
                        <option value="" selected disabled>Escolha...</option>
                        <option>Todos</option>
                        <option>Amanda</option>
                        <option>Maria</option>
                    </Form.Control>

                    <hr />

                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Label for="codigo">Ano</Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Label for="codigo">Mês</Label>
                                <Form.Control as="select" required>
                                    <option value="" selected disabled>Escolha...</option>
                                    <option>Janeiro</option>
                                    <option>Fevereiro</option>
                                    <option>Março</option>
                                    <option>Abril</option>
                                    <option>Maio</option>
                                    <option>Junho</option>
                                    <option>Julho</option>
                                    <option>Agosto</option>
                                    <option>Setembro</option>
                                    <option>Outubro</option>
                                    <option>Novembro</option>
                                    <option>Dezembro</option>
                                </Form.Control>
                            </Col>
                            <Col>
                                <Label for="codigo">Dia</Label>
                                <Form.Control name="quantidade" type="number" />
                                <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                            </Col>
                        </Form.Row>
                    </Form.Group>

                    <hr />

                    <Label for="categoria">Categoria</Label>
                    <Form.Control as="select" required>
                        <option value="" selected disabled>Escolha...</option>
                        <option value="AG">Todos</option>
                        <option value="AF">Calça</option>
                        <option value="AX">Camiseta</option>
                        <option value="AL">Vestido</option>
                        <option value="DZ">Biquini</option>
                        <option value="AS">Sapato</option>
                        <option value="AD">Bolsa</option>
                        <option value="AO">Cinto</option>
                        <option value="AI">Shorts</option>
                        <option value="AQ">Saia</option>
                        <option value="AG">Lenço</option>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleCloseListener} block>
                    Gerar Relatório
            </Button>
            </Modal.Footer>
        </Modal>
    );
}