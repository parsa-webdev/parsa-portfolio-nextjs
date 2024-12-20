import { variables } from "@/app/Variables";
import styled from "styled-components";

export const CMRoot = styled.div`
  width: ${variables.sectionMaxWidth};
  margin: 0 auto;
  margin-top: 100px;
  .contact {
    border-radius: 10px;
    .info {
      border-radius: 30px;
      border: 1.69px solid black;
    }
  }
  display: none;
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: block;
    width: 100%;
  }
`;
