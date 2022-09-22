import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${(props) => props.colGap || 30}px;
  grid-row-gap: ${(props) => props.rowGap || 40}px;
  width: 100%;
  max-width: ${(props) => (props.narrow ? "880px" : "")};
  margin: ${(props) => (props.narrow ? "0 auto" : "")};
  justify-items: ${(props) => (props.centerItems ? "center" : "")};
`;

const ColContainer = styled.div`
  //display: inline-grid;
  display: ${(props) => (props.alignBottom ? "flex" : "")};
  align-self: ${(props) => (props.alignBottom ? "end" : "")};
 
  grid-column: span ${(props) => props.desktop || 12};
  @media (max-width: 768px) {
    grid-column: span ${(props) => props.tablet || "12"};
  }
  @media (max-width: 480px) {
    grid-column: span ${(props) => props.mobile || "12"};
  }
  display: ${(props) => (props.spaced ? "flex" : "")};
  align-items: ${(props) => (props.spaced ? "center" : "")};
  justify-content: ${(props) => (props.spaced ? "space-between" : "")};
`;

export { GridContainer, ColContainer };