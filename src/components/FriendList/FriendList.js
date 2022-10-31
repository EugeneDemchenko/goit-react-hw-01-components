import PropTypes from 'prop-types';
import css from './FriendList.module.css'

const FriendLsit = ({ friends }) => {
    return (
        <section className={css.section}>
            <ul className={css.friend_list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.item} key={id}>
                        <span className={`${css.status} ${isOnline && css.isOnline}`}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

FriendLsit.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired, 
            isOnline: PropTypes.bool.isRequired, 
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
     
}

export default FriendLsit;