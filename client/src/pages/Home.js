import React, {Component} from "react"
import {Container} from "../Components/Grid/index";
import Form from "../Components/Form/index"
import { CardContainer, Card } from "../Components/Cards";


class Home extends Component{

    render(){

        return(
            <Container>
                <Form/>
                <CardContainer>
                    <h3>Results</h3>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardContainer>
            </Container>
        )


    }

}

export default Home;