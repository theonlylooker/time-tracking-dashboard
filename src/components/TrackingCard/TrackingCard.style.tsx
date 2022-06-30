import styled from "styled-components";
import TrackingCard from "./TrackingCard";
import elipsis from "../../Assets/images/icon-ellipsis.svg";

export const CardStyled = styled(TrackingCard)`
  --neutral-Dark-blue: hsl(235, 46%, 20%);
  --primary-Light-red-orange: hsl(15, 100%, 70%); /*(work)*/
  --primary-Soft-blue: hsl(195, 74%, 62%); /*(play)*/
  --primary-Light-red: hsl(348, 100%, 68%); /*(study)*/
  --primary-Lime-green: hsl(145, 58%, 55%); /*(exercise)*/
  --primary-Violet: hsl(264, 64%, 52%); /*(social)*/
  --primary-Soft-orange: hsl(43, 84%, 65%); /*(self care)*/
  --neutral-Pale-Blue: hsl(236, 100%, 87%);
  --neutral-Desaturated-blue: hsl(235, 45%, 61%);
  max-width: 270px;
  margin: 1rem auto 1.8rem;
  border-radius: 1rem;
  max-height: 100px;
  div {
    position: relative;
  }
  .Work {
    background-color: var(--primary-Light-red-orange);
    .trackingCard__img {
      width: 17%;
      top: -0.4rem;
    }
  }
  .Play {
    background-color: var(--primary-Soft-blue);
    .trackingCard__img {
      width: 17%;
      top: -0.1rem;
    }
  }
  .Study {
    background-color: var(--primary-Light-red);
    .trackingCard__img {
      width: 17%;
      top: -0.3rem;
    }
  }
  .Exercise {
    background-color: var(--primary-Lime-green);
    .trackingCard__img {
      width: 17%;
      height: 20%;
      top: -0.1rem;
    }
  }
  .Social {
    background-color: var(--primary-Violet);
    .trackingCard__img {
      width: 18%;
      top: -0.5rem;
    }
    height: 50px;
  }
  .SelfCare {
    background-color: var(--primary-Soft-orange);
    .trackingCard__img {
      width: 15%;
      height: 10%;
      top: -0.5rem;
    }
  }
  /* .trackingCard__header {
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
  }
  .trackingCard__img {
    width: 25%;
    margin-left: auto;
    display: block;
    position: relative;
    bottom: 0.7rem;
    right: 0.5rem;
  } */
  .trackingCard__header {
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    min-height: 45.9px;
  }
  .trackingCard__img {
    margin-right: 0.8rem;
    position: relative;
    bottom: 1rem;
  }
  .trackingCard__body {
    border-radius: 1rem;
    background-color: var(--neutral-Dark-blue);
    bottom: 1.5rem;
    padding: 0.9rem;
    max-height: 80px;
  }
  .trackingCard__menu {
    background-image: url(${elipsis});
    height: 5px;
    width: 21px;
    display: block;
    background-repeat: no-repeat;
  }
  .trackingCard__type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -1rem;
  }
  .trackingCard__content {
    display: flex;
    justify-content: space-between;
    margin-top: -1.5rem;
    align-items: center;
  }
  .trackingCard__title,
  .trackingCard__actualPeriod {
    color: #fff;
  }
  .trackingCard__title {
    font-weight: 500;
    font-size: 0.8rem;
  }
  .trackingCard__actualPeriod {
    font-size: 1.125rem;
    font-weight: 300;
  }
  .trackingCard__lastPeriod {
    color: var(--neutral-Pale-Blue);
    font-size: 0.8rem;
  }
  @media (min-width: 1440px) {
    margin: 0;
    .Work {
      background-color: var(--primary-Light-red-orange);
      .trackingCard__img {
        top: -0.4rem;
        width: 35%;
      }
    }
    .Play {
      background-color: var(--primary-Soft-blue);
      .trackingCard__img {
        top: -0.1rem;
        width: 35%;
      }
    }
    .Study {
      background-color: var(--primary-Light-red);
      .trackingCard__img {
        top: -0.3rem;
        width: 35%;
      }
    }
    .Exercise {
      background-color: var(--primary-Lime-green);
      .trackingCard__img {
        height: 28%;
        top: -0.1rem;
        width: 36%;
      }
      min-height: 55px;
    }
    .Social {
      background-color: var(--primary-Violet);
      .trackingCard__img {
        top: -0.75rem;
        width: 34%;
        height: 128%;
      }
      min-height: 64px;
    }
    .SelfCare {
      background-color: var(--primary-Soft-orange);
      .trackingCard__img {
        height: 10%;
        top: -0.5rem;
        width: 30%;
      }
      min-height: 60px;
    }
    .Workbody {
      top: -1.5rem;
    }
    .Playbody {
      top: -1.5rem;
    }
    .Studybody {
      top: -1.5rem;
    }
    .Exercisebody {
      top: -1.4rem;
    }
    .Socialbody {
      top: -1.9rem;
    }
    .SelfCarebody {
      top: -1.5rem;
    }
    .trackingCard__body {
      min-height: 100px;
      min-width: 150px;
      padding-bottom: 1.4rem;
      bottom: 1rem;
      cursor: pointer;
    }
    .trackingCard__body:hover {
      background-color: var(--neutral-Desaturated-blue);
    }
    .trackingCard__content {
      flex-direction: column;
      align-items: flex-start;
    }
    .trackingCard__actualPeriod {
      margin-top: 1.8rem;
      font-size: 2.5rem;
      margin-bottom: 0;
    }
    .trackingCard__lastPeriod {
      margin-top: 0.3rem;
      font-size: 0.7rem;
    }
    .trackingCard__menu {
      cursor: pointer;
    }
  }
`;
