import { variables } from "@/app/Variables";
import styled from "styled-components";

export const HDRoot = styled.div`
  width: ${variables.sectionMaxWidth};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  gap: 100px;

  .hdLeft {
    width: 661.706px;
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

    .brian-info {
      margin-top: -7px;
      margin-bottom: 15px;
      .brian-img {
        margin-top: -40px;
        width: 100px;
      }
    }
    .cta {
      padding: 15px 20px;
    }
  }
  .hdRight {
    .parsa-img {
      width: 546.259px;
    }
  }
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: none;
  }
`;
