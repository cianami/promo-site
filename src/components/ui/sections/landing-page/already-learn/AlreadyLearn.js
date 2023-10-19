import "./AlreadyLearn.css"
import Btn from "../../../common/Button.js"
import {Col, Container, Row} from "react-bootstrap";
import handImg from "../../../../../assets/hand.png"

export default function AlreadyLearn(){
    return(
        <div className="boost-traffic w-100">
            <Container className="boost d-flex justify-content-between">
                <Row>
                    <Col xs={6}>
                        <h1 className="boost-header">
                           Что я изучила
                        </h1>
                        <p className="boost-text pt-4">
                           В процессе создания этого сайта я познакомилась с <br/> основами React и Bootstrap.
                        </p>
                        <p className="boost-text pt-2">
                            Также я использовала npm для установки JavaScript библиотек:
                            <ul className="pt-3">
                                <li> React Bootstrap </li>
                                <li> React Bootstrap Icons</li>
                                <li> React CountUp</li>
                                <li> React Router </li>
                                <li> React Type Animation</li>
                            </ul>
                        </p>
                        <Btn
                            color="white"
                            text="READ MORE"
                            className="mt-4 purple-btn position-relative z-3"
                            onClick={()=> window.open("https://www.npmjs.com/", '_blank').focus()}
                        />
                    </Col>
                    <Col xs={6} className="d-flex">
                        <img alt=" " className="boost-img w-100 " src={handImg}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}