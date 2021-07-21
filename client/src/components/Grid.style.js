import styled from "@emotion/styled";

export const Grid=styled.div`
    display: grid;
    grid-template-columns: ${(props)=>props.cols};
    grid-template-rows: ${(props)=>props.rows};
    
`