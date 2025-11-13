import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

function OSDetalhes() {
  const location = useLocation();
  const os = location.state?.os;

  if (!os) return <p>OS não encontrada.</p>;

  const linkPreenchimento = `${window.location.origin}/preencher/${os.numero}`;

  return (
    <div>
      <h2>Detalhes da OS #{os.numero}</h2>
      <p><strong>Cliente:</strong> {os.cliente}</p>
      <p><strong>Produto:</strong> {os.produto}</p>
      <p><strong>Descrição:</strong> {os.descricao}</p>
      <p><strong>TAG:</strong> {os.tag}</p>
      <p><strong>Status:</strong> {os.status}</p>
      <p><strong>Criada em:</strong> {os.data}</p>

      <h3>QR Code para preenchimento</h3>
      <QRCodeCanvas value={linkPreenchimento} size={200} includeMargin />

      <button onClick={() => window.open(linkPreenchimento, "_blank")}>
        Preencher relatório
      </button>
    </div>
  );
}

export default OSDetalhes;
