import { variables } from "@/app/Variables";
import styled from "styled-components";

export const PMRoot = styled.div`
  .project {
    border-radius: 10px;
    h1 {
      width: 100% !important;
      display: block !important;
      text-align: center;
    }
    .toggle {
      width: 27px;
    }
    .project-top {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .project-img {
        width: 100%;
        height: auto;
      }
    }
    .project-bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
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
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .circle {
      border: 2px solid rgba(116, 248, 178, 0.3);
      border-radius: 100%;
      width: 20px;
      height: 20px;
    }
  }
  display: none;
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: block;
  }
`;
