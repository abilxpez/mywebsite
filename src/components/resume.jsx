import React from "react";

import Container from 'react-bootstrap/Container'
import styled from 'styled-components';

import resumeImage from '../assets/resume/AbiLopez_Resume_2026.png'
import resumePdf from '../assets/resume/AbiLopez_Resume_2026.pdf'

const Styledh3 = styled.h3`
    font-family: 'Martel', serif;
`;

export function ResumePreview({ maxWidth = 850 }) {
  return (
    <img
      className="d-block mx-auto img-fluid w-100 border rounded"
      src={resumeImage}
      alt="Abi Lopez’s 2026 résumé"
      width={1545}
      height={2000}
      style={{maxWidth}}
      loading="lazy"
    />
  );
}

function Resume() {
  return (
    <Container fluid style={{maxWidth: 1200}} className="pt-2">
      <Styledh3>Abi's Resume 2026</Styledh3>
      <a className="btn btn-dark mb-3" href={resumePdf} download="AbiLopez_Resume_2026.pdf">
        Download Résumé (PDF)
      </a>
      <ResumePreview />
    </Container>
  );
}

export default Resume;
