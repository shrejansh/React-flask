import { Grid } from "./Grid.style";
import { GridItem } from "./GridItem.style";
import {Container} from "./Container.style"
import { Input } from "./Input.style";
import "./Login.css"

export const Login=()=>{
    return(
        <>
        <Container>
        <Grid cols="1fr" rows="">
            <GridItem>
               Username
            </GridItem>
            <GridItem>
                <Input/>
            </GridItem>
            <GridItem> Password </GridItem>
            <GridItem>  <input type="text" className="inp"></input> </GridItem>
        </Grid>
        </Container>
        </>
    )
}