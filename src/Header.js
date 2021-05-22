import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import Login from './Login';

const Cabecalho = styled.header`
    background-color: var(--cor-contraste-claro);
    border-radius: 0 0 10px 10px;
    box-shadow: var(--sombra);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.75rem;
    margin: 0 auto 2rem;
    width: 1000px;
    padding-right: 50px;
	padding-left: 50px;
`;

const Logo = styled.img`
    width: 8rem;
    height: 9.5rem;
    border-radius: 50%;
    padding-top: 25px;
`
const ListaNavegacao = styled.ul`
    display: flex;
`;

const Link = styled.li`
    margin-left: 1rem;
    font-size: 18px;
    display: flex;
    margin-right: 2rem;
    margin-top: 1rem;
`;

const Botao = styled.button`
    display: block;
    background-color:#ece9db;
    border-radius: 5px 5px 5px 5px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 20rem;
    padding: 0.5rem;
    box-sizing: border-box;
    color:#3f0d2b;
    font-size: 15px;
    text-align: center;
    margin-right: 1rem;
    border: 0px solid #4a3a00;
    box-shadow: 0px 0px 5px #2e2300;
    font-style: normal;
    text-shadow: 0px -1px 1px #222222;
`;

function Header() {
    return (
        <Cabecalho class="container">
            <Logo src="./logo.png" alt="logo" />
            <nav>
                <ListaNavegacao>
                    <Link> Bem Vindo ao Controle de Estoque! </Link>
                    <Botao>
                        <RouterLink to="/login">Logout</RouterLink>
                    </Botao>
                </ListaNavegacao>

            </nav>
        </Cabecalho>
    );
}

export default Header;