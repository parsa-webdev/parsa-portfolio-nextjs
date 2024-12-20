import { variables } from "@/app/Variables";
import styled from "styled-components";

export const PRoot = styled.div`
  width: ${variables.sectionMaxWidth};
  margin: 0 auto;

  .computer {
    margin-top: -80px;
  }

  .project {
    border-radius: 30px;

    .project-left {
      width: 572.17px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .project-img {
        width: 100%;
        height: auto;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .project-right {
      width: 591.875px;
      gap: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .line {
        width: 100%;
        height: 1.5px;
        background-color: ${variables.lightGreen2};
        border-radius: 30px;
      }
    }
  }
  ul {
    padding-left: 20px;
  }
  .divider {
    width: 100%;
    height: 2px;
    background-color: rgba(116, 248, 178, 0.3);
    border-radius: 5px;
    margin: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle {
      border: 2px solid rgba(116, 248, 178, 0.3);
      border-radius: 100%;
      width: 36.315px;
      height: 36.315px;
    }
  }
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: none;
  }
`;
