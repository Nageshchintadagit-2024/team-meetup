import styled from 'styled-components'

export const MainAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding-left: 20px;
  padding-top: 16px;
`

export const WebsiteImage = styled.img`
  width: 300px;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 600px;
  align-items: center;
  margin-left: 100px;
`

export const RegisterImage = styled.img`
  width: 300px;
  height: 360px;
  flex-grow: 1;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const JoinText = styled.h1`
  color: #334155;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 50px;
  margin-bottom: 20px;
  line-height: 0.4;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Label = styled.label`
  color: #64748b;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 8px;
`
export const Input = styled.input`
  height: 45px;
  width: 320px;
  border: 1px solid #64748b;
  border-radius: 10px;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
`

export const Select = styled.select`
  height: 45px;
  width: 320px;
  border: 1px solid #64748b;
  border-radius: 10px;
  padding-left: 20px;
  outline: none;
  font-size: 16px;
`

export const RegisterNowButton = styled.button`
  width: 130px;
  height: 45px;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  background-color: #3b82f6;
  margin-top: 20px;
  margin-bottom: 4px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
`
