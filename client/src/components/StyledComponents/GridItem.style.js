import styled from "@emotion/styled";

export const GridItem=styled.div`
    grid-column-start: ${(props)=>props.colStart};
    grid-column-end:  ${(props)=>props.colEnd};
    grid-row-start:  ${(props)=>props.rowStart};
    grid-row-end:  ${(props)=>props.rowEnd};
    place-self: center;
    
`