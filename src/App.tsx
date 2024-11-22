import questions from './questions.json';
import './App.css';
import { Quiz } from './Quiz';

function App() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
