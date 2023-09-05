import styled from 'styled-components';

export const List = styled.ul`
display: flex;
justify-content:center;
gap:12px;

  ::first-letter {
    text-transform: uppercase;
  }
`

export const Button = styled.button`
min-width: 96px;
padding: 8px;

border: none;
border-radius:4px;
cursor:pointer;


background-color: ${p => {
  switch (p.children) {
    case "good": return '#96f7d2';
    case "neutral": return '#f0f696';
    case 'bad': return '#fcb1b1';
    default: return '#dee1ec';
  }
}};

transform: scale(1);
transition: transform 250ms linear;


&:hover{
  transform: scale(1.1);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);
}
`