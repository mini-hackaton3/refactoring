import styled from "styled-components";

export const LoginSection = styled.div`
   {
    display: flex;
    align-items: center;
    height: 600px;
  }
`;

export const LoginWrap = styled.div`
   {
    width: 350px;
    height: 500px;
    background-color: white;
    margin: 0 auto;
    border: 1px solid lightgray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const LoginDiv = styled.div`
   {
    margin: auto auto;
  }
`;

export const LoginTitle = styled.div`
   {
    font-size: 20px;
    font-weight: 700;
    width: 350px;
    padding-bottom: 35px;
    margin: 0 auto;
    text-align: center;
  }
`;
export const LoginInputDiv = styled.div`
   {
    width: 250px;
    margin: 0 auto;
    padding-bottom: 10px;
  }
`;

export const IdInput = styled.input`
   {
    width: 250px;
    height: 30px;
    border: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    font-size: 10pt;
    padding: 10px;
  }
`;

export const InputTitle = styled.div`
   {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const PasswordInput = styled.input`
   {
    width: 250px;
    height: 30px;
    border: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    margin: 0 auto;
    font-size: 10pt;
    padding: 10px;
  }
`;

export const SignInButton = styled.button;
