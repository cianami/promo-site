import "./MyNumber.css"
import {Col, Container, Row} from "react-bootstrap";
import computer from "../../../../../assets/computer.png";
import {TelephoneFill} from "react-bootstrap-icons";
export default function MyNumber(){
    return(
        <div className="my-number w-100">
            <Container className="number d-flex justify-content-between">
                <Row>
                    <Col xs={6} className="d-flex">
                        <img alt=" " className="computer-img w-100 " src={computer}></img>
                    </Col>
                    <Col className="my-number-info" xs={6}>
                        <h1 className="my-number-header">
                            Мои контакты
                        </h1>
                        <p className="my-number-text pt-3">
                            Здесь может находиться осмысленный текст, но его тут нет.
                        </p>
                        <div className="d-flex mt-4">
                            <div className="my-number-number-text">
                                    <TelephoneFill className="telephone"/>
                                +7 (981) 505-18-18
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}