import "./ContactMe.css"
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Telegram, Github, EnvelopeAt} from "react-bootstrap-icons";

function InTouchCard(props){
    return(
        <div className="w-100">
            <div className="contact-me-card-body w-100 px-2 pb-4">
                <div className="contact-me-card-circle d-flex mx-auto">
                    <span className="contact-me-icon m-auto">{props.icon}</span>
                </div>
                <div className="contact-me-card-header">{props.header}</div>
                <a className="contact-me-card-text mt-3 pb-3" href={props.href}>
                    {props.linkText}
                </a>
            </div>
        </div>
    )
}
export default function ContactMe(){
    return(
        <div className="contact-me">
            <div className="text-center contact-me-text">
                <h className="contact-me-header"> Как со мной связаться </h>
            </div>
            <Container className="text-center contact-me-card">
                <Row className="d-flex justify-content-between">
                    <Col>
                        <InTouchCard
                            icon={<Telegram/>}
                            header="Telegram"
                            text="asvavd"
                            href="https://t.me/Riissawa"
                            linkText="@Riissawa"
                        />
                    </Col>
                    <Col>
                        <InTouchCard
                            icon=<EnvelopeAt/>
                            header="Gmail"
                            text="Come say hello at our office HQ."
                            href="mailto:arina.dybal00@gmail.com"
                            linkText="arina.dybal00@gmail.com"
                        />
                    </Col>
                    <Col>
                        <InTouchCard
                            icon=<Github/>
                            header="GitHub"
                            text="Mon-Fri from 8am to 5am"
                            href="https://github.com/cianami"
                            linkText="cianami"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}