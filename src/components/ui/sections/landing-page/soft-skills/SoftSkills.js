import "./SoftSkills.css"
import {Col, Container, Row} from "react-bootstrap";
import Me from "../../../../../assets/me.jpg"
import {ChatDots, PersonFillLock, Mortarboard} from "react-bootstrap-icons";
import CountUp from "react-countup";

function OfferCard(props){
    return(
        <div className={"skills-card-body d-flex " + props.className}>
            <Col className="skills-card-circle-position d-flex align-items-center">
                <div className="skills-card-circle text-center">
                    <div className="skills-card-icon m-auto">{props.icon}</div>
                </div>
            </Col>
            <Col className="align-items-center h-100 d-flex flex-column justify-content-center" xs="8">
                <h className="skills-card-header w-100">{props.header}</h>
                <p className="skills-card-text w-100">{props.text}</p>
            </Col>
        </div>
    )
}

export default function SoftSkills (){
    return(
        <div id="softSkills" className="soft-skills">
           <Container className="justify-content-between">
               <Row>
                   <Col >
                       <h1 className="skills-header">Soft skills</h1>
                       <p className="skills-text pt-2">
                          Здесь описаны качества, которые, на мой взгляд, пригодятся в работе.
                       </p>
                       <div className="me pt-3"></div>
                   </Col>
                   <Col>
                        <OfferCard
                            icon=<ChatDots/>
                            className="offer-border-card-margin"
                            header="КОММУНИКАБЕЛЬНОСТЬ"
                            text="Способна работать в команде, решать конфликты и находить компромиссы."
                        />
                        <OfferCard
                            icon=<PersonFillLock/>
                            className="offer-middle-card-margin"
                            header="ОТВЕТСТВЕННОСТЬ"
                            text="Умею выполнять свои обязанности и дистигать поставленные цели."
                        />
                        <OfferCard
                            icon=<Mortarboard/>
                            className="offer-border-card-margin"
                            header="ОБУЧАЕМОСТЬ"
                            text="Готова изучать новые технологии, принимать критику, улучшая качество работы."
                        />
                   </Col>
               </Row>
               <Row>
                   <Container className="d-flex justify-content-between text-center mb-5 pt-5">
                       <div>
                           <span className="soft-skills-number">
                               <CountUp
                                   end={4}
                                   redraw="true"
                                   enableScrollSpy="true"
                               />
                           </span>
                            <p className="soft-skills-number-text-number-text">ДНЕЙ ПОТРАЧЕНО <br/> НА РАЗРАБОТКУ</p>
                       </div>
                       <div>
                           <span className="soft-skills-number">
                               <CountUp
                                   end={26}
                                   redraw="true"
                                   enableScrollSpy="true"
                               />
                           </span>
                           <p className="soft-skills-number-text">ЧАСОВ НА РАЗРАБОТКУ</p>
                       </div>
                       <div>
                          <span className="soft-skills-number">
                               <CountUp
                                   end={80}
                                   redraw="true"
                                   enableScrollSpy="true"
                                   suffix="%"
                               />
                           </span>
                           <p className="soft-skills-number-text">ПРОЦЕНТ ВЫПОЛНЕНИЯ</p>
                       </div>
                   </Container>
               </Row>
           </Container>
        </div>
    )
}