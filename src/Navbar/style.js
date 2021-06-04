import styled, {css} from 'styled-components';

export const Container = styled.div`
width:100%;
display: flex;
padding: 20px;
background-color: #011;
user-select: none;
`
const List = css`
background-color:coral;
border-radius:50px;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`
export const NavItems = styled.div`
color: white;
margin-left:${({list})=>!list ? '30px' : '10px'};
cursor: pointer;
display: flex;
align-items: center;
${({list})=>list && List};
 
`