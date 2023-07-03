import './App.css';
import {TwitterFollowCard} from './Components/TwitterFollowCard'

const user1 = { userName: 'Juan5253', isFollowing: false }
const user2 = { userName: 'ZombieJ', isFollowing: false }

function App() {
  return (
    <>
    <section className='app-view'>
      <span className='app-view-title'> A quién seguir </span>
      <TwitterFollowCard {...user1}>
        Juan Fonseca
      </TwitterFollowCard>
      <TwitterFollowCard {...user2}>
        Pedro Perez
      </TwitterFollowCard>
      <TwitterFollowCard userName='jrieken' isFollowing >
        Pablo Flores
      </TwitterFollowCard>
      <span className='app-view-footer'> Mostrar más </span>
    </section>
    </>
  );
}

export default App;
