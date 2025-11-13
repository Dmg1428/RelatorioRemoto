import { useState } from "react";

function OSForm() {
  const [formData, setFormData] = useState({
    cliente: "",
    produto: "",
    descricao: "",
    status: "Aberta",
  });

  const [ordens, setOrdens] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const novaOS = { ...formData, id: Date.now() };
    setOrdens([...ordens, novaOS]);
    setFormData({ cliente: "", produto: "", descricao: "", status: "Aberta" });
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Simulador de Ordem de Serviço</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cliente"
          placeholder="Nome do cliente"
          value={formData.cliente}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="produto"
          placeholder="Produto"
          value={formData.produto}
          onChange={handleChange}
          required
        />
        <textarea
          name="descricao"
          placeholder="Descrição do problema"
          value={formData.descricao}
          onChange={handleChange}
          required
        />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option>Aberta</option>
          <option>Em andamento</option>
          <option>Finalizada</option>
        </select>
        <button type="submit">Criar OS</button>
      </form>

      <hr />
      <h3>Ordens Criadas:</h3>
      <ul>
        {ordens.map((os) => (
          <li key={os.id}>
            <strong>{os.cliente}</strong> - {os.produto} ({os.status})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OSForm;
