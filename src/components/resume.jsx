import React from "react";

import Container from 'react-bootstrap/Container'
import styled from 'styled-components';

const Styledh3 = styled.h3`
    font-family: 'Martel', serif;
`;

function Resume() {
  return (
    <Container fluid style={{maxWidth: 1200}} className="pt-2">
      <Styledh3>Abi's Resume 2026</Styledh3>
      <p>The 2026 resume is currently unavailable.</p>
    </Container>
  );
}

export default Resume;
