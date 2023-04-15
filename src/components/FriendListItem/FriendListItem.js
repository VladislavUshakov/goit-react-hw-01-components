import PropTypes from 'prop-types';
import { Item, Name, Status } from './FriendListItem.styles';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status>{isOnline}</Status>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
