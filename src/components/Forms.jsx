import React, { useState } from 'react';

const MeuComponenteComFormulario = () => {
  // Use o estado para controlar os valores dos campos do formulário
  const [dadosDoFormulario, setDadosDoFormulario] = useState({
    campo1: '',
    campo2: '',
    // Adicione mais campos conforme necessário
  });

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDadosDoFormulario({
      ...dadosDoFormulario,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com os dados do formulário após o envio
    console.log('Dados do formulário enviados:', dadosDoFormulario);
  };

  return (
    <div>
      <h2>Meu Componente com Formulário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Campo 1:
          <input
            type="text"
            name="campo1"
            value={dadosDoFormulario.campo1}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Campo 2:
          <input
            type="text"
            name="campo2"
            value={dadosDoFormulario.campo2}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Adicione mais campos conforme necessário */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MeuComponenteComFormulario;
