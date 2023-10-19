import "./Button.css"
import {Button} from "react-bootstrap";

export default function Btn(props){
    return(
        <Button
            style={{color: props.color}}
            className={"btn " + props.className}
            href={props.href}
            onClick={props.onClick}

        >
            {props.text}
        </Button>
    )
}