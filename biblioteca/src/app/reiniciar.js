export default function Reiniciar({ encerrado, reiniciarVotacao }) {
    return (
        <button className={!encerrado ? "votosInativos" : "votosAtivos"} onClick={reiniciarVotacao}>Reiniciar</button>
    )
}