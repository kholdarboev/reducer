import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction:${({content})=>content ? 'row' :'column'};
justify-content: center;
align-items: center;
margin: 50px 0 20px 0;
user-select: none;
`
export const Title = styled.h1`
`
export const Input = styled.input`
margin-right: 10px;
padding: 5px 10px 5px 15px;
border: none;
background-color:#f1f1f1;
border-radius:8px;
outline: none;
`
export const Button = styled.button`
border: none;
background-color: #f1f1f1;
padding:5px 15px;
border-radius:12px;
cursor:pointer;
:hover{
    background-color: lightGray;
}
:active{
transform: scale(1.15);
}
`