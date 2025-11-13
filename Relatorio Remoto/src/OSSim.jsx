import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OSSim() {
  const [formData, setFormData] = useState({
    cliente: "",
    produto: "",
    descricao: "",
    tag: "",
    status: "Aberta",
  });

  const [ordens, setOrdens] = useState([]);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const novaOS = {
      ...formData,
      id: Date.now(),
      numero: Math.floor(1000 + Math.random() * 9000),
      data: new Date().toLocaleString(),
    };
    setOrdens(prev => [...prev, novaOS]);
    setFormData({ cliente: "", produto: "", descricao: "", tag: "", status: "Aberta" });
  }

  return (
    <div>
      <h2>Simulador de Ordem de Serviço</h2>
      <form onSubmit={handleSubmit}>
        <input name="cliente" value={formData.cliente} onChange={handleChange} placeholder="Cliente" required />
        <input name="produto" value={formData.produto} onChange={handleChange} placeholder="Produto" required />
        <textarea name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Descrição" required />
        <textarea name="tag" value={formData.tag} onChange={handleChange} placeholder="TAG" required />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option>Aberta</option>
          <option>Em andamento</option>
          <option>Finalizada</option>
        </select>
        <button type="submit">Criar OS</button>
      </form>

      <h3>Ordens Criadas</h3>
      <ul>
        {ordens.map(os => (
          <li key={os.id}>
            #{os.numero} — {os.cliente} ({os.status}){" "}
            <button onClick={() => navigate(`/os/${os.numero}`, { state: { os } })}>
              Ver detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OSSim;
