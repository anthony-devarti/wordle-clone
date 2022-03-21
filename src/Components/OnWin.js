export default function OnWin(){
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Winner!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Wow!  You did the thing. Look at all of the words you know.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary">Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}