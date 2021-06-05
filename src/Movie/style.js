import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: ${({main})=>main ? 'column' : 'row'};
align-items: center;
width:${({main})=>!main && '280px'};
justify-content: space-between;
`
export const Title = styled.h1`
`
 
export const Button = styled.button`
cursor: pointer;
padding:5px 12px;
border-radius: 8px;
border: none;
:active{
    transform: scale(1.25);
}
:hover{
    background-color: lightGray;
}
`