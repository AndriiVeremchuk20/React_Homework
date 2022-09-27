import { AddButton } from './Components/AddButton';
import { Header } from './Components/Header';
import { Modal } from './Components/Modal';
import { TodoList } from './Components/TodoList';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  
  const showModal = useTypedSelector(state=>state.modal)

  return (
    <div className="App">
      { 
       showModal?
          <Modal/>
        :null
      }
      <Header/>
      <TodoList/>
      <AddButton/>
    </div>
  );
}

export default App;
