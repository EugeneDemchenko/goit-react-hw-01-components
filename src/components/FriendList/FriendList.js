import PropTypes from 'prop-types';

const FriendLsit = ({ friends }) => {
    return (
        <section>
            <ul className="friend-list">
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className="item" key={id}>
                        <span className="status">{isOnline ? 'yes' : 'no'}</span>
                        <img className="avatar" src={avatar} alt={name} width="48" />
                        <p className="name">{name}</p>
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