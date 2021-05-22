import styled from "styled-components";
import React, { useState } from "react";
import ModalMovimentacaoDeProduto from "./Modals/ModalMovimentacaoDeProduto";
import ModalCadastroFornecedor from "./Modals/ModalCadastroFornecedor";
import ModalCadastroUsuario from "./Modals/ModalCadastroUsuario";
import ModalCadastroProduto from "./Modals/ModalCadastroProduto";
import ModalAtualizaUsuario from "./Modals/ModalAtualizaUsuario";
import ModalAtualizarForncedor from "./Modals/ModalAtualizarFornecedor";
import ModalRelatorioVenda from "./Modals/ModalRelatorioVenda";
import ModalRelatorioEstoque from "./Modals/ModalRelatorioEstoque";

const Section = styled.section`
    display: flex ;
    flex-direction: column;
    align-self: center;
    width: 100%;
`;

const Cartao = styled(Section)`
    background-color: #f1f0f1;
    border-radius: 5px;
    padding: 1.7rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--sombra);
    background-color: #fcf8f3;
}
`;


const Titulo = styled.h1`
    font-size: 25px;
    display: flex;
    font-weight: bold;
`;

const GrupoDeBotoes = styled.div`
    display: flex;
`;

const Botao = styled.div`
    display: block;
    background-color:#ece9db;
    border-radius: 5px 5px 5px 5px;
    margin: 0.5rem auto;
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
    cursor: pointer;
`;

export default function Main() {
    const [showModalEntrada, setShowEntradaProduto] = useState(false);
    const [showModalSaida, setShowSaidaProduto] = useState(false);
    const [showModalCadastroProduto, setShowCadastroProduto] = useState(false);
    const [showModalCadastroFornecedor, setShowCadastroFornecedor] = useState(false);
    const [showModalCadastroUsuario, setShowCadastroUsuario] = useState(false)
    const [showModalRelatorioEstoque, setShowRelatorioEstoque] = useState(false)
    const [showModalRelatorioVenda, setShowRelatorioVenda] = useState(false)
    const [showModalAtualizarFornecedor, setShowAtualizarFornecedor] = useState(false)
    const [showModalAtualizarUsuario, setShowAtualizarUsuario] = useState(false)


    //Movimentação de produtos
    const handleCloseModalEntrada = () => setShowEntradaProduto(false);
    const handleShowModalEntrada = () => setShowEntradaProduto(true);

    const handleCloseModalSaida = () => setShowSaidaProduto(false);
    const handleShowModalSaida = () => setShowSaidaProduto(true);

    //Cadastro
    const handleCloseCadastroProduto = () => setShowCadastroProduto(false)
    const handleShowCadastroProduto = () => setShowCadastroProduto(true)

    const handleCloseCadastroFornecedor = () => setShowCadastroFornecedor(false)
    const handleShowCadastroFornecedor = () => setShowCadastroFornecedor(true)

    const handleCloseCadastroUsuario = () => setShowCadastroUsuario(false)
    const handleShowCadastroUsuario = () => setShowCadastroUsuario(true)

    //Gerar Relatório
    const handleCloseRelatorioEstoque = () => setShowRelatorioEstoque(false)
    const handleShowRelatorioEstoque = () => setShowRelatorioEstoque(true)

    const handleCloseRelatorioVenda = () => setShowRelatorioVenda(false)
    const handleShowRelatorioVenda = () => setShowRelatorioVenda(true)

    //Atualizar Dados
    const handleCloseAtualizarFornecedor = () => setShowAtualizarFornecedor(false)
    const handleShowAtualizarFornecedor = () => setShowAtualizarFornecedor(true)

    const handleCloseAtualizarUsuario = () => setShowAtualizarUsuario(false)
    const handleShowAtualizarUsuario = () => setShowAtualizarUsuario(true)

    return (
        <main className="segundo--container">
            <Section>
                <Cartao>
                    <Titulo>Movimentação de Produtos</Titulo>
                    <GrupoDeBotoes>
                        <Botao onClick={handleShowModalEntrada}>Entrada</Botao>
                        <Botao onClick={handleShowModalSaida}>Saída</Botao>
                    </GrupoDeBotoes>
                    <ModalMovimentacaoDeProduto show={showModalEntrada} onCloseListener={handleCloseModalEntrada} />
                    <ModalMovimentacaoDeProduto show={showModalSaida} saida={true} onCloseListener={handleCloseModalSaida} />
                </Cartao>
                <Cartao>
                    <Titulo>Novo Cadastro</Titulo>
                    <GrupoDeBotoes>
                        <Botao onClick={handleShowCadastroProduto}>Produto</Botao>
                        <Botao onClick={handleShowCadastroFornecedor}>Fornecedor</Botao>
                        <Botao onClick={handleShowCadastroUsuario}>Usuário</Botao>
                    </GrupoDeBotoes>
                    <ModalCadastroProduto show={showModalCadastroProduto} onCloseListener={handleCloseCadastroProduto} />
                    <ModalCadastroFornecedor show={showModalCadastroFornecedor} onCloseListener={handleCloseCadastroFornecedor} />
                    <ModalCadastroUsuario show={showModalCadastroUsuario} onCloseListener={handleCloseCadastroUsuario} />
                </Cartao>
                <Cartao>
                    <Titulo>Gerar Relatório</Titulo>
                    <GrupoDeBotoes>
                        <Botao onClick={handleShowRelatorioEstoque}>Estoque</Botao>
                        <Botao onClick={handleShowRelatorioVenda}>Venda</Botao>
                    </GrupoDeBotoes>
                    <ModalRelatorioEstoque show={showModalRelatorioEstoque} onCloseListener={handleCloseRelatorioEstoque} />
                    <ModalRelatorioVenda show={showModalRelatorioVenda} onCloseListener={handleCloseRelatorioVenda} />
                </Cartao>

                <Cartao>
                    <Titulo>Atualizar Dados</Titulo>
                    <GrupoDeBotoes>
                        <Botao onClick={handleShowAtualizarFornecedor}>Fornecedor</Botao>
                        <Botao onClick={handleShowAtualizarUsuario}>Usuário</Botao>
                    </GrupoDeBotoes>
                    <ModalAtualizarForncedor show={showModalAtualizarFornecedor} onCloseListener={handleCloseAtualizarFornecedor} />
                    <ModalAtualizaUsuario show={showModalAtualizarUsuario} onCloseListener={handleCloseAtualizarUsuario} />
                </Cartao>
            </Section>
        </main >
    );
}