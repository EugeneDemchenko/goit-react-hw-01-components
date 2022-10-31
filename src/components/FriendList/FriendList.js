import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'

const FriendLsit = ({ friends }) => {
    return (
        <section className={css.section}>
            <ul className={css.friend_list}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
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