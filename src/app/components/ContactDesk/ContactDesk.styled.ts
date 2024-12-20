import { variables } from "@/app/Variables";
import styled from "styled-components";

export const CRoot = styled.div`
  width: ${variables.sectionMaxWidth};
  margin: 0 auto;
  margin-top: 100px;
  .contact {
    border-radius: 30px;
    .c-left {
      width: 539.501px;
    }
    .c-right {
      width: 476.428px;
    }
    .info {
      border-radius: 30px;
      border: 1.69px solid black;
    }
  }
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: none;
  }
`;
