import React from "react"
import {Row, Col} from "../Grid/index"
import Button from "../Buttons/index"
import "./style.css"


export function Card(props){


    return(
        <div className = "card" >
            <Row>
                <Col size="s9">
                    <Row>Title</Row>
                    <Row>Author</Row>
                    <Row>Subtitle</Row>
                </Col>
                <Col size="s3">
                    <Button>View</Button>
                    <Button>Save</Button>
                </Col>
            </Row>
            <Row>
                <Col size = "s3">
                    <img src="https://via.placeholder.com/150" alt="Book"/>
                </Col>
                <Col size="s9">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Col>
            </Row>

        </div>


    )
}

export function CardContainer(props){

 

    return(
        <div className = "card-container">
            {props.children}
        </div>
    )
}
