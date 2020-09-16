import React,{useState} from "react"
import {Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse,NavLink, Input, InputGroup} from 'reactstrap'
import "./styles/navbar.css"
import MarvelLogo from "../images/MarvelLogo.svg.webp"

const NavBar = (props) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <Navbar className="dark" light expand="md">
                <NavbarBrand style={{color:"white"}} href="/"><img width="80" height="30" alt="Marvel Logo" src={MarvelLogo}/></NavbarBrand>
                <NavbarToggler onClick={toggle} className="icon"><span className="fa fa-bars"></span> </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <InputGroup className="navbardecision">
                            {props.dropdown?
                            <Input type="select" className="navbardecision" onChange={props.handledecision} outline>
                                <option className="navbardecision" value="1">Name</option>
                                <option className="navbardecision" value="2">Issue</option>
                                <option className="navbardecision" value="3">Format</option>
                            </Input>:""}
                            <Input onChange={props.handleinput} placeholder="Search" />
                        </InputGroup>
                        <NavItem>
                            <NavLink style={{color:"white"}} href="/">Favorites</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:"white"}} href="/characters/">Characters</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  style={{color:"white"}} href="/comics/">Comics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:"white"}} href="/stories/">Stories</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <br/>
        </div>
    )
}

export default NavBar