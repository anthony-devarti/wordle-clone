export default function OnLoss(){
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>You lost.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Hey, you did a real bad job.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}