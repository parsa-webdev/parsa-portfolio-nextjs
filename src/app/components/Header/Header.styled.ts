import { variables } from "@/app/Variables";
import styled from "styled-components";

export const HeaderDesk = styled.div`
  width: ${variables.sectionMaxWidth};
  margin: 0 auto;
  .icon-div {
    svg {
      stroke: #f1fff8; /* Initial stroke color */
      transition: stroke 0.3s ease-in-out; /* Add transition to stroke */
    }

    /* Apply hover effect on the parent */
    &:hover {
      svg {
        stroke: ${variables.primary}; /* Hover stroke color */
      }
    }
  }
  .icon-div-2 {
    svg {
      stroke: #f1fff8; /* Initial stroke color */
      transition: stroke 0.3s ease-in-out; /* Add transition to stroke */
      path {
        fill: #f1fff8;
        transition: fill 0.3s ease-in-out; /* Add transition to stroke */
      }
    }

    /* Apply hover effect on the parent */
    &:hover {
      svg {
        stroke: ${variables.primary}; /* Hover stroke color */
        path {
          fill: ${variables.primary};
        }
      }
    }
  }
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: none;
  }
`;
