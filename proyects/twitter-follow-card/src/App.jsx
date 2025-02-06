import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App () {
  const formatUserName = (userName) => `@${userName}`;
  const users = [
    {
      name: 'Miguel Angel Duran',
      id: 1,
      userName: 'midudev',
      isFollowing: true
    },
    {
      name: 'Pablo Hernandez',
      id: 2,
      userName: 'phealb',
      isFollowing: false
    },
    {
      name: 'Elon Musk',
      id: 3,
      userName: 'elonmusk',
      isFollowing: false
    },
    {
      name: 'Vander Hart',
      id: 4,
      userName: 'vxnder',
      isFollowing: false
    }
  ];
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing, id}) => (
          <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName={userName}
            initialIsFollowing={isFollowing}
            key={id}>
            {name} 
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}