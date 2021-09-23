import './App.css';
import UserStorage from './components/UserStorage';
import UserPicker from './components/UserPicker';

function App() {
  return (
    <>
      <div className="App">
        <UserStorage/>
      </div>
      <div className="user-picker">
        <UserPicker/>
      </div>
    </>
  );
}

export default App;
