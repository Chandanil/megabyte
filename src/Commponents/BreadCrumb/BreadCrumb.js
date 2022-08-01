import Container from "react-bootstrap/esm/Container";
import {Link} from 'react-router-dom';
import './BreadCrumb.scss';
export const BreadCrumb = (props)=> {
    return (
        <div className="custom-breadcrumb">
            <Container>
                <h1 className="title">About US</h1>
                <ol>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li className="active"><i className="fa fa-angle-right icon"></i>About</li>
                </ol>
            </Container>
        </div>
    )
}