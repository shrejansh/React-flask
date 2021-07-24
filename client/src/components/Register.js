import { Container } from "./StyledComponents/Container.style";
import { Grid } from "./StyledComponents/Grid.style";
import { GridItem } from "./StyledComponents/GridItem.style";
import { Input } from "./StyledComponents/Input.style";
import {Button} from "./StyledComponents/Button.style"
import { useState } from "react";

export const Register=()=>{

    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [out1,setOut1]=useState("email");
    const [out2,setOut2]=useState("username");
    const submitHandler=(e)=>{
        e.preventDefault();
        fetch("/register12", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify([email,username,password])
            }).then(response => {
    
                return response.json()
              }).then(json => {
            setOut1(json.username);
            setOut2(json.email);
              
              })
        
    }
    return(
        <>
            <Container>
                <Grid cols="1fr" rows="1fr 1fr 1fr">
                    <Grid cols="1fr 8fr">
                        <GridItem > Email    </GridItem>
                        <GridItem ><Input onChange={(e)=>setEmail(e.target.value)}/></GridItem>
                    </Grid>
                    <Grid cols="1fr 8fr">
                        <GridItem >Username</GridItem>
                        <GridItem ><Input onChange={(e)=>setUsername(e.target.value)}/></GridItem>
                    </Grid>
                    <Grid cols="1fr 8fr">
                        <GridItem >Password</GridItem>
                        <GridItem ><Input onChange={(e)=>setPassword(e.target.value)}/></GridItem>
                    </Grid>
                    
                    <GridItem>
                        <Button onClick={submitHandler}>Submit</Button>
                    </GridItem>
                
                </Grid>
            <p>{out1}</p>
            <p>{out2}</p>
            </Container>
        </>
    )
}