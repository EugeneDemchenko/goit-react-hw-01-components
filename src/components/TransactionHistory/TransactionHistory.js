import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <section className={css.section}>
            <table className={css.transaction_history}>
                <thead className={css.table_head}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(({ id, type, amount, currency }) => (
                        <tr key={id} className={css.table_row}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>  
                    ))}    
                </tbody>
            </table>
        </section>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
           id: PropTypes.string.isRequired,
           type: PropTypes.string.isRequired,
           amount: PropTypes.string.isRequired,
           currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default TransactionHistory;