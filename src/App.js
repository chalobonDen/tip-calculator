import './App.css';
import Card from './components/Card';
import { Title } from './components/Title';

const buttonData = [
  {
    id: 1,
    percent: 5,
  },
  {
    id: 2,
    percent: 10,
  },
  {
    id: 3,
    percent: 15,
  },
  {
    id: 4,
    percent: 25,
  },
  {
    id: 5,
    percent: 50,
  },
];

function App() {
  return (
    <div className="main">
      <Title />
      <Card buttonData={buttonData} />
    </div>
  );
}

export default App;
