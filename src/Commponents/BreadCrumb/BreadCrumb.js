import Container from "react-bootstrap/esm/Container";
import {Link} from 'react-router-dom';
import './BreadCrumb.scss';
import React from 'react'; 
export const BreadCrumb = (props)=> {
    return (
        <div className="custom-breadcrumb">
            <Container>
                <h1 className="title">{props.second}</h1>
                <ol>
                    <li>
                        <Link to="/"> {props.first}</Link>
                    </li>
                    <li className="active"><i className="fa fa-angle-right icon"></i>{props.second}</li>
                </ol>
            </Container>
        </div>
    )
}