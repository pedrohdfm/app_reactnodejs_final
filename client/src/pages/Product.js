import { useState } from 'react';
import './product.css';

function App() {
    const [name, setName] = useState('');
    const [preco, setPreco] = useState('');
    const [validade, setValidade] = useState('');
    const [categoria, setCategoria] = useState('');

    async function createProduct(event) {
        event.preventDefault();

        const response = await fetch('http://localhost:3000/api/createProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                preco,
                validade,
                categoria,
            })
        });

        const data = await response.json();

        console.log(data);
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Create Product</h1>
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        className="form-control"
                        placeholder='Nome'
                    />
                </div>
                <div className="form-group">
                    <input
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        type='number'
                        className="form-control"
                        placeholder='Preço'
                    />
                </div>
                <div className="form-group">
                    <input
                        value={validade}
                        onChange={(e) => setValidade(e.target.value)}
                        type='text'
                        className="form-control"
                        placeholder='Data de Validade'
                    />
                </div>
                <div className="form-group">
                    <input
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        type='text'
                        className="form-control"
                        placeholder='Categoria do Produto'
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Criar Produto</button>
            </form>
        </div>
    );
}

export default App;
