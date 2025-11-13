import { useState } from "react";
import { useParams } from "react-router-dom";

function PreencherOS() {
  const { numero } = useParams();
  const [tipoEquipamento, setTipoEquipamento] = useState("");
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ numero, tipoEquipamento, ...formData });
    alert("Relatório enviado com sucesso!");
    setFormData({});
    setTipoEquipamento("");
  }

  return (
    <div>
      <h2>Preenchimento da OS #{numero}</h2>

      <nav>
        <button onClick={() => setTipoEquipamento("INVERSOR")}>INVERSOR</button>
        <button onClick={() => setTipoEquipamento("SOFT STARTER")}>SOFT STARTER</button>
        <button onClick={() => setTipoEquipamento("OUTROS")}>OUTROS</button>
      </nav>

      {tipoEquipamento && (
        <form onSubmit={handleSubmit}>
          <h3>{tipoEquipamento}</h3>

          {tipoEquipamento === "INVERSOR" && (
            <>
              <input name="marca" placeholder="Marca" value={formData.marca || ""} onChange={handleChange} required />
              <input name="modelo" placeholder="Modelo" value={formData.modelo || ""} onChange={handleChange} required />
              <input name="tensao" type="number" placeholder="Tensão (V)" value={formData.tensao || ""} onChange={handleChange} required />
              <input name="corrente" type="number" placeholder="Corrente (A)" value={formData.corrente || ""} onChange={handleChange} required />
            </>
          )}

          {tipoEquipamento === "SOFT STARTER" && (
            <>
              <input name="marca" placeholder="Marca" value={formData.marca || ""} onChange={handleChange} required />
              <input name="modelo" placeholder="Modelo" value={formData.modelo || ""} onChange={handleChange} required />
              <input name="correnteMax" type="number" placeholder="Corrente máxima (A)" value={formData.correnteMax || ""} onChange={handleChange} required />
            </>
          )}

          {tipoEquipamento === "OUTROS" && (
            <>
              <input name="descricao" placeholder="Descrição" value={formData.descricao || ""} onChange={handleChange} required />
              <input name="informacoes" placeholder="Informações adicionais" value={formData.informacoes || ""} onChange={handleChange} />
            </>
          )}

          <textarea name="observacoes" placeholder="Observações gerais" value={formData.observacoes || ""} onChange={handleChange} />
          <button type="submit">Enviar Relatório</button>
        </form>
      )}
    </div>
  );
}

export default PreencherOS;
