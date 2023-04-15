import {
  Avatar,
  Description,
  Name,
  User,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styles';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <User>
    <Description>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <li>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </li>
      <li>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </li>
      <li>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </li>
    </Stats>
  </User>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
