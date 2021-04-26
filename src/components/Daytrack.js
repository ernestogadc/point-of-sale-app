import Results from './Results'
import TrakListInfo from './TrakListInfo';

const Daytrack = ({ ticket }) => {
    let sum = 0
    for (let t of ticket) {
        sum += t.total
    }
    let num = 1;
    let index = 0;

    return (
        <table className="dtlistContainer">
            <tbody>
                {ticket.length > 0 ? (ticket.map(tickete => (
                    <tr key={index++} className="dayTrackList">
                        <td>Cuenta {num++}</td>
                        <td><TrakListInfo
                            tickete={tickete} />
                        </td>
                        <td>$   {tickete.total} .00</td>
                    </tr>
                ))) : <tr><td>Aún no hay ventas</td></tr>}
            </tbody>
            <tfoot >
                <tr><Results
                    num={num}
                    total={sum} />
                </tr>
            </tfoot>
        </table>
    )

}

export default Daytrack
