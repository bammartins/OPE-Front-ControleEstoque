import { Modal, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Label = styled(Form.Label)`
    margin-bottom: 8px;
`

export default function ModalAtualizaUsuario(props) {
    return (
        <Modal show={props.show} onHide={props.onCloseListener}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar Usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="">
                        <Form.Label for="codigo">Usuaŕio</Form.Label>
                        <Form.Control as="select" required>
                            <option value="" selected disabled>Escolha...</option>
                            <option value="AX">Amanda</option>
                            <option value="AL">Maria</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="">
                        <Label for="codigo">Login</Label>
                        <Form.Control name="login" required={true} />
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