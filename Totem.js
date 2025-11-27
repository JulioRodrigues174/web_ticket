
export default function Totem({ emitirSenha }) {
    return (
        <div className="card">
            <h2>Senhas</h2>
            <button onClick={() => emitirSenha("SP")}>Emitir SP</button>
            <button onClick={() => emitirSenha("SG")}>Emitir SG</button>
            <button onClick={() => emitirSenha("SE")}>Emitir SE</button>
        </div>
    );
}
