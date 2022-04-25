import './App.css';
import Home from './pages/Home'
import Question from './pages/Question'
import Result from './pages/Result'


function App() {
  return (
    <div className="App">
      <Routes>
        <Routes path='/' element={<Home />} />
        <Routes path='/question' element={<Question />} />
        <Routes path='/result' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
