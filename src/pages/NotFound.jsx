 import imgNoFound from '../img/noFound.png';
 import{Link} from 'react-router-dom';
 import styled from 'styled-components';
 export default function NoFoundpage(){
    return (
        <Container>
            <div className="cNoFound">
                <img  className ="NoFoundpage"src={imgNoFound} alt="404 Not Found" />
                <ul className="intenta" >
                    <h4>Intenta con</h4>
                    <li><Link to="/react-work">Inicio</Link></li>
                    <li><Link to="/">Contacto</Link></li>
                    <li><a href="https://aguilar.digital" target="_blank" >Portafolio</a></li>
                </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
a{
    color: #fff;
    text-decoration:none;
}
a:hover{
color: #e90d4f;
}
li{
    list-style:none;
    text-decoration:none;
}
display:flex;
justify-content:center;

`

