
export default function Painel({ historico }) {
    return (
        <div className="card">
            <h2>Painel</h2>
            <ul>
                {historico.map((s, i) => (
                    <li key={i}>{s}</li>
                ))}
            </ul>
        </div>
    );
}
