import "./WantToLearn.css"
import {Col, Container} from "react-bootstrap";
import ReactIcon from "../../../../../assets/react.svg"
import NodeJSIcon from "../../../../../assets/nodejs-icon.svg"

export default function WantToLearn() {
    return (
        <div className="want-to-learn">
            <h1 className="learn-header-text">
                Чему я хотела бы научиться
            </h1>
            <Container className="justify-content-between d-flex mt-5">
                <Col className="m-5">
                    <div className="learn-card-body">
                        <p className="learn-card-text">
                            React – JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
                        </p>
                    </div>
                    <div className="technology-circle">
                        <img src={ReactIcon} className="react-icon m-auto"></img>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="learn-card-body">
                        <p className="learn-card-text">
                            Node.js – это кроссплатформенная среда для разработки клиентских приложений, в основе которой лежит язык программирования JavaScript.
                        </p>
                    </div>
                    <div className="technology-circle">
                        <img src={NodeJSIcon} className="js-icon m-auto"></img>
                    </div>
                </Col>
            </Container>
        </div>
    )
}