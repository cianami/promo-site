import "./CaseStudies.css"
import {Col, Container, Row} from "react-bootstrap";
import FirstCopm from "../../../../../assets/first-computer.png"
import SecondComp from "../../../../../assets/second-computer.png"
import ThirdComp from "../../../../../assets/third-computer.png"
import Btn from "../../../common/Button";

export default function CaseStudies(){
    return(
        <div className="case-studies">
        <Container>
            <Row>
                <Col className="text-center">
                    <img className="first-comp" alt="" src={FirstCopm}/>
                </Col>
                <Col className="text-center">
                    <img className="second-comp" alt="" src={SecondComp}/>
                </Col>
            </Row>
            <Row className="pt-5">
                <Col className="text-center">
                    <img className="third-comp" alt="" src={ThirdComp}/>
                </Col>
                <Col>
                    <h className="case-studies-header">
                        Текст текст
                    </h>
                    <p className="case-studies-text pt-3">
                        Здесь может находиться осмысленный текст, но его тут нет.
                    </p>
                    <Btn color="black" text="УЗНАТЬ БОЛЬШЕ" className="mt-4 yellow-btn"/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}