import { Statistics } from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../../data/user';
import data from '../../data/data';
import friends from '../../data/friends';
import transactions from '../../data/transactions';
import { ThemeProvider } from '@emotion/react';

import { Container } from './App.styles';

const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    grey: 'grey',
    isOnline: {
      true: '#4caf4f',
      false: '#fb5453',
    },
    table: {
      headBg: '#00bcd5',
      rowBg: '#ecf1f3',
    },
    lightText: '#a1abb6',
    mainBg: '#e7ecf2',
    localBg: '#f3f6f9',
  },

  sizes: {
    sectionWidth: '380px',
  },

  shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  borderRadius: '8px',
};
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  </ThemeProvider>
);
