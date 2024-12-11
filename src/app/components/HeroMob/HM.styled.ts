import { variables } from "@/app/Variables";
import styled from "styled-components";

export const HMRoot = styled.div`
  display: none;
  .parsa-mob {
    position: relative;
    img {
      width: 100%;
    }
    .hero-mob {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .header {
        width: 100%;
      }
      .icon-div {
        svg {
          stroke: #f1fff8;
          /* width: 16.196px;
          height: 17.427px; */
        }
      }
      .icon-div-2 {
        svg {
          stroke: #f1fff8;
          /* width: 11.347px;
          height: 11.491px; */
          path {
            fill: #f1fff8;
          }
        }
      }
      .testimonial {
        .flag {
          img {
            width: 12px;
          }
        }
      }
      .brian-info {
        .brian-img {
          margin-top: -30px;
          width: 100px;
        }
      }
      .cta {
        width: 100%;
        padding: 15px 0px;
      }
    }
  }
  @media (max-width: ${variables.mobileBreakPoint}) {
    display: block;
  }
`;
