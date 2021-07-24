import styled from "@emotion/styled";

export const Grid=styled.div`
    display: grid;
    padding: 0.5rem;
    place-self: center;
    grid-template-columns: ${(props)=>props.cols};
    grid-template-rows: ${(props)=>props.rows};
    
`