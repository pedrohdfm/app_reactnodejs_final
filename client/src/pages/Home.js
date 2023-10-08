import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Função para buscar a lista de produtos do servidor
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/listProduct'); // Rota para buscar produtos
                const data = await response.json();
                setProducts(data); // Define os produtos no estado
                setLoading(false); // Define que a carga foi concluída
                handleSearchResult(data); // Chama a função para tratar o resultado da busca
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                handleSearchError(error); // Chama a função para tratar o erro
            }
        };

        fetchProducts();
    }, []);

    // Função para tratar o resultado da busca
    const handleSearchResult = (data) => {
        if (data.length === 0) {
            console.log('Nenhum produto encontrado.');
        } else {
            console.log('Produtos encontrados:', data);
        }
    };

    // Função para tratar o erro da busca
    const handleSearchError = (error) => {
        console.error('Erro na busca:', error);
    };

    // Função para renderizar a lista de produtos ou a mensagem de aviso
    const renderProducts = () => {
        if (loading) {
            return <p>Carregando produtos...</p>;
        } else if (products.length === 0) {
            return <p>Nenhum produto disponível no momento.</p>;
        } else {
            return (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <p>Nome: {product.name}</p>
                            <p>Preço: {product.preco}</p>
                            <p>Data de Validade: {product.validade}</p>
                            <p>Categoria: {product.categoria}</p>
                            <p>Código do Produto: {product.codigoProduto}</p>
                        </li>
                    ))}
                </ul>
            );
        }
    };

    return (
        <div>
            <h1>Lista de Produtos</h1>
            {renderProducts()}
        </div>
    );
};

export default Home;
