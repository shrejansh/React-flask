import { Container } from "./StyledComponents/Container.style";
import { Grid } from "./StyledComponents/Grid.style";
import { GridItem } from "./StyledComponents/GridItem.style";
import { Input } from "./StyledComponents/Input.style";
import {Button} from "./StyledComponents/Button.style"
import { useState } from "react";

export const Login=(props)=>{

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");
    const [currentUser,setCurrentUser]=useState("email");
    const [currentEmail,setCurrentEmail]=useState("username");
    const submitHandler=(e)=>{
        e.preventDefault();
        fetch("/login12", {
            method:"POST",
            cache: "no-cache",
            headers:{
                "content_type":"application/json",
            },
            body:JSON.stringify([email,password])
            }).then(response => {
    
                return response.json()
              }).then(json => {
            setCurrentUser(json.username);
            setCurrentEmail(json.email);
              
              })

              props.loginUser(currentUser);
              props.loginEmail(currentEmail);
        
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
                        <GridItem >Password</GridItem>
                        <GridItem ><Input onChange={(e)=>setPassword(e.target.value)}/></GridItem>
                    </Grid>
                    
                    <GridItem>
                        <Button onClick={submitHandler}>Submit</Button>
                    </GridItem>
                
                </Grid>
            
            </Container>
        </>
    )
}