import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: ${({main})=>main ? 'column' : 'row'};
justify-content:${({main})=>main ? 'center' : 'space-between'};
align-items: center;
width:${({main})=>!main && '480px'};

`
export const Title = styled.h1`
margin-right: auto;
`
export const Detail = styled.h1`

`
export const Button = styled.button`
cursor: pointer;
padding:5px 12px;
border-radius: 8px;
border: none;
margin-left: auto;
:active{
    transform: scale(1.25);
}
:hover{
    background-color: lightGray;
}
`