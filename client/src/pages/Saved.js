import React, {Component} from "react"
import { CardContainer, Card } from "../Components/Cards";
import { Container } from "../Components/Grid";

class Saved extends Component{
    render(){
        return(
            <Container>
                <CardContainer>
                    <h3>Saved</h3>
                    <Card/>
                </CardContainer>
            </Container>
        )
    }
}

export default Saved