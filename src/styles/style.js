import styled from "styled-components";

export const Container = styled.div`
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(350px));
    justify-items: center;
  }
  .myForm {
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    background: ${(props) => props.theme.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    height: 200px;
    box-shadow: 1px 1px 20px #000;
    margin: 0 auto;
    margin-bottom: 40px;
    margin-top: 14px;
    border: ${(props) => props.theme.theme.border};
    &:hover {
      border: 2px solid darkblue;
    }
  }
  input {
    width: 250px;
    border: ${(props) => props.theme.theme.border};
    height: 40px;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    outline: none;
    color: black;
    padding-left: 5px;
    border-radius: 3px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.color};
  }
  textarea {
    width: 250px;
    border: ${(props) => props.theme.theme.border};
    height: 100px;
    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    outline: none;
    color: black;
    padding-left: 5px;
    border-radius: 3px;
    resize: none;
    background: ${(props) => props.theme.theme.background};
    color: ${(props) => props.theme.theme.color};
  }
  div {
    display: flex;
    flex-direction: row;
  }
  .myButton {
    width: 80px;
    height: 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 180px;
    border: none;
    border-radius: 3px;
    outline: none;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    background: #8861e8;
    font-weight: bold;
    box-shadow: 1px 1px 20px #000;
  }
  .alert {
    color: red;
    position: absolute;
    margin-top: 2px;
    margin-left: 2px;
  }
  .myList {
    width: 100%;
    max-width: 300px;
    min-width: 300px;
    background: ${(props) => props.theme.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    height: 300px;
    box-shadow: 1px 1px 20px #000;
    margin: 0 auto;
    margin-bottom: 40px;
    border: ${(props) => props.theme.theme.border};
    &:hover {
      border: 2px solid darkblue;
    }
    p {
      font-size: 15px;
      color: ${(props) => props.theme.theme.color};
      padding: 5px;
    }
    label {
      color: ${(props) => props.theme.theme.color};
      font-size: 15px;
      padding: 5px;
    }
    .annotationText {
      height: 100px;
      border: none;
      scrollbar-width: 2px;
      background: ${(props) => props.theme.theme.background};
      color: ${(props) => props.theme.theme.color};
    }
    button:nth-child(odd) {
      background-color: red;
      width: 100px;
      height: 25px;
      border: none;
      border-radius: 3px;
      outline: none;
      font-size: 20px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
      font-weight: bold;
      box-shadow: 1px 1px 20px #000;
      float: left;
      margin-bottom: 10px;
      margin-right: 20px;
      margin-top: 15px;
    }
    button:nth-child(even) {
      background-color: #e6c000;
      width: 100px;
      height: 25px;
      border: none;
      border-radius: 3px;
      outline: none;
      font-size: 20px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: white;
      font-weight: bold;
      box-shadow: 1px 1px 20px #000;
      float: left;
      margin-bottom: 10px;
      margin-top: 15px;
    }
  }

  @media (max-width: 970px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 665px) {
    .grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
