import Nav from "react-bootstrap/Nav";

function JustifiedExample() {
  return (
    <Nav justify variant="tabs">
      <Nav.Item>
        <Nav.Link href="/dashboard/create-class">Class</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dashboard/create-question">Question</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default JustifiedExample;
