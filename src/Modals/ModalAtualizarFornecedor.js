import { Modal, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

export default function ModalAtualizarForncedor(props) {
    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar Fornecedor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label for="codigo">Fornecedor</Form.Label>
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
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="responsavel">Responsável</Label>
                        <Form.Control id="responsavel" name="responsável" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="email">Email</Label>
                        <Form.Control id="email" name="email" required={true} />
                        <Form.Control.Feedback type="invalid">Este campo não está válido</Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleCloseListener} block>
                    Atualizar
            </Button>
            </Modal.Footer>
        </Modal>
    )
}