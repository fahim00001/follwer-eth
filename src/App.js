
import './App.css';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <Question></Question>
    </div>
  );
}

export default App;
