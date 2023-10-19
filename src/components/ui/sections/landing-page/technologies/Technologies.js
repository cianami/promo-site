import "./Technologies.css"
import {Col, Container, Row} from "react-bootstrap";
import Btn from "../../../common/Button"

function HTMLIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="90px" height="90px">
            <path
                d="M 9 7 L 12 41 L 26 45 L 40 41 C 41 29.667 42 18.333 43 7 L 9 7 z M 11.183594 9 L 40.816406 9 L 38.128906 39.455078 L 26 42.919922 L 13.871094 39.455078 L 11.183594 9 z M 18.550781 15 L 17.589844 27 L 30.580078 27 L 30.169922 32 L 26 32.619141 L 21.880859 32 L 21.699219 30 L 17.839844 30 L 18.230469 35 L 25.990234 37 L 33.759766 35 L 34.75 23 L 22.089844 23 L 22.410156 19 L 30.769531 19 L 31 21 L 34.699219 21 L 34 15 L 18.550781 15 z"/>
        </svg>
    )
}

function CSSIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 50 50" width="90px" height="90px">
            <path fill-rule="evenodd"
                  d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"/>
        </svg>
    )
}

function JSIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32" width="90px" height="90px">
            <path
                d="M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20.244141 15 C 18.819141 15 17.898438 15.912141 17.898438 17.119141 C 17.898437 18.430141 18.667172 19.056781 19.826172 19.550781 L 20.226562 19.722656 C 20.958563 20.045656 21.394531 20.234156 21.394531 20.785156 C 21.394531 21.250156 20.967734 21.583984 20.302734 21.583984 C 19.514734 21.583984 19.066609 21.166469 18.724609 20.605469 L 17.414062 21.355469 C 17.879062 22.286469 18.847844 23 20.339844 23 C 21.859844 23 23 22.211578 23 20.767578 C 23 19.418578 22.230328 18.819234 20.861328 18.240234 L 20.462891 18.068359 C 19.769891 17.764359 19.474609 17.564844 19.474609 17.089844 C 19.474609 16.699844 19.769141 16.396484 20.244141 16.396484 C 20.710141 16.396484 21.003297 16.595844 21.279297 17.089844 L 22.535156 16.283203 C 22.003156 15.352203 21.270141 15 20.244141 15 z M 14.394531 15.095703 L 14.394531 20.558594 C 14.394531 21.356594 14.052297 21.564453 13.529297 21.564453 C 12.978297 21.564453 12.741141 21.185281 12.494141 20.738281 L 11.183594 21.527344 C 11.563594 22.335344 12.312703 23 13.595703 23 C 15.020703 23 16 22.239172 16 20.576172 L 16 15.095703 L 14.394531 15.095703 z"/>
        </svg>
    )
}

function PossibilityCard(props) {
    return (
        <div className="w-100">
            <div className="card-body w-100 px-2 pb-4">
                <div className="card-circle d-flex mx-auto">
                    <div className="card-circle-text m-auto">{props.icon}</div>
                </div>
                <div className="card-header-text">{props.header}</div>
                <div className="card-description-text pt-3 pb-3">{props.description}</div>
                <Btn
                    color="white"
                    text="УЗНАТЬ БОЛЬШЕ"
                    className="mt-4 purple-btn"
                    href={props.href}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
}

export default function Technologies() {
    return (
        <Container className="technologies text-center">
            <Row className="d-flex justify-content-between">
                <Col>
                    <PossibilityCard
                        onClick={()=> window.open("https://ru.wikipedia.org/wiki/HTML", '_blank').focus()}
                        icon=<HTMLIcon/>
                        header="HTML"
                        description="HTML – стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере."
                    />
                </Col>
                <Col>
                    <PossibilityCard
                        onClick={()=> window.open("https://ru.wikipedia.org/wiki/CSS", '_blank').focus()}
                        icon=<CSSIcon/>
                        header="CSS"
                        description="CSS – формальный язык описания внешнего вида документа, написанного с использованием языка разметки."
                    />
                </Col>
                <Col>
                    <PossibilityCard
                        onClick={()=> window.open("https://ru.wikipedia.org/wiki/JavaScript", '_blank').focus()}
                        icon=<JSIcon/>
                        header="JavaScript"
                        description="JavaScript – это язык программирования, который используют разработчики для создания интерактивных веб-страниц."
                    />
                </Col>
            </Row>
        </Container>
    )
}