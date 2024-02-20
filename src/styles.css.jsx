import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .welcome {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .logo {
    height: 3.8rem;
    background-color: #e52a5a;
    border-radius: 50%;
    box-shadow: 0 0 3px #000;
  }
`;

export const App = styled.main`
  position: relative;
  max-width: 70rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: auto repeat(3, 11rem) auto;
  gap: 1.4rem;

  /* NOTE This creates the fade in/out anumation */
  /* opacity: 0; */
  transition: all 1s;

  .balance {
    grid-column: 1 / span 2;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1.4rem;
  }

  .balance__label {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: -0.2rem;
  }

  .balance__date {
    font-size: 1.1rem;
    color: #888;
  }

  .balance__value {
    font-size: 3.5rem;
    font-weight: 400;
  }

  /* MOVEMENTS */
  .movements {
    grid-row: 2 / span 3;
    background-color: #fff;
    border-radius: 0.7rem;
    overflow: auto;
  }

  .movements__row {
    padding: 1.6rem 1rem 1.6rem 2.8rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .movements__type {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #fff;
    padding: 0.1rem 0.7rem;
    border-radius: 7rem;
    margin-right: 1.4rem;
  }

  .movements__date {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #666;
  }

  .movements__type--deposit {
    background-image: linear-gradient(to top left, #39b385, #9be15d);
  }

  .movements__type--withdrawal {
    background-image: linear-gradient(to top left, #e52a5a, #ff585f);
  }

  .movements__value {
    font-size: 1.3rem;
    margin-left: auto;
  }

  .movements_menu {
    padding: 0.3rem 1rem;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  .popup-menu {
    position: absolute;
    top: 0;
    right: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    button {
      background-color: #fff;
      color: black;
      width: 100%;
      border: 0;
      user-select: none;
      padding: 1rem 2rem 1rem 1rem;

      &:hover {
        background-color: #d8d8d8;
      }
    }
  }
  .edit--input {
    width: 8rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid #ccc;
  }

  .edit--btns {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    button {
      padding: 0.4rem 1rem;
      border: 0;
      border-radius: 1rem;
      color: white;
    }
    .trash-btn {
      background-color: #39b385;
      &:hover {
        background-color: #51c99b;
      }
    }
    .close-btn {
      background-color: #e52a5a;
      &:hover {
        background-color: #eb3e6a;
      }
    }
  }

  /* SUMMARY */
  .summary {
    grid-row: 5 / 6;
    display: flex;
    align-items: baseline;
    padding: 0 0.3rem;
    margin-top: 0.7rem;
  }

  .summary__label {
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 0.6rem;
  }

  .summary__value {
    font-size: 1.8rem;
    margin-right: 2rem;
  }

  .summary__value--in,
  .summary__value--interest {
    color: #66c873;
  }

  .summary__value--out {
    color: #f5465d;
  }

  .btn--sort {
    margin-left: auto;
    border: none;
    background: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    min-width: max-content;
  }

  /* OPERATIONS */
  .operation {
    border-radius: 0.7rem;
    padding: 2.1rem 2.8rem;
    color: #333;
  }

  .operation--transfer {
    background-image: linear-gradient(to top left, #ffb003, #ffcb03);
  }

  .operation--loan {
    background-image: linear-gradient(to top left, #39b385, #9be15d);
  }

  .operation--close {
    background-image: linear-gradient(to top left, #e52a5a, #ff585f);
  }

  h2 {
    margin-bottom: 1.1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
  }

  .form {
    display: grid;
    grid-template-columns: 2.5fr 2.5fr 1fr;
    grid-template-rows: auto auto;
    gap: 0.4rem 0.7rem;
  }

  /* Exceptions for interst */
  .form.form--loan {
    grid-template-columns: 2.5fr 1fr 2.5fr;
  }
  .form__label--loan {
    grid-row: 2;
  }
  /* End exceptions */

  .form__input {
    width: 100%;
    border: none;
    background-color: rgba(255, 255, 255, 0.4);
    font-family: inherit;
    font-size: 1.2rem;
    text-align: center;
    color: #333;
    padding: 0.3rem 0.7rem;
    border-radius: 0.7rem;
    transition: all 0.3s;
  }

  .form__input:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .form__label {
    font-size: 1rem;
    text-align: center;
  }

  .form__btn {
    border: none;
    border-radius: 0.7rem;
    font-size: 1.3rem;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .form__btn:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .chart {
    /* -ms-grid-row-span: 2; */
    grid-row-start: 2;
    grid-row-end: 4;
    height: 100%;
  }
`;
