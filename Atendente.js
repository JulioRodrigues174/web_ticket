
export default function Atendente({ chamarProximo }) {
    return (
        <div className="card">
            <h2>Atendente</h2>
            <button onClick={chamarProximo}>Chamar Próximo</button>
        </div>
    );
}
