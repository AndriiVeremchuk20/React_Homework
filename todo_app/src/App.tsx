import { useCallback, useState } from "react";
import { AddButton } from "./Components/AddButton";
import { Header } from "./Components/Header";
import { Modal } from "./Components/Modal";
import { TodoList } from "./Components/TodoList";
import { IbaseTodo, Itodo, TASK_STATUS } from "./Interfaces/Itodo";
import { tasks } from "./TasksExample";
import { v4 as uuidv4 } from "uuid";


function App() {

  const [todoList, setTodoList] = useState<Itodo[]>(tasks)
  const [filter, setFilter] = useState<string>('');
  const [textFilter, setTextFilter] = useState<string>('');
  const [order, setOrder] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<Itodo | null>(null);

  const hideModal = useCallback((): void => {
    setShowModal(false);
  }, [])

  const onRemove = useCallback((id: string): void => {
    setTodoList((prev) => [...prev.filter(task => task.id !== id)])
  }, []);

  const onEdit = useCallback((edited: Itodo): void => {
    setShowModal(true);
    setEdit(edited);
  }, [])

  const handleEdit = useCallback((task: Itodo, edited: IbaseTodo): void => {

    console.log(edited.title)
    setTodoList((prev) => prev.map((item) => {
      if (item.id === task.id) {
        item = {
          ...item,
          title: edited.title,
          description: edited.description,
          update_date: Date.now()
        }
      }
      return item;
    }))
    setEdit(null);
    setShowModal(false)

  }, [])

  const handleAddClick = useCallback((): void => {
    setShowModal(true)
  }, [])

  const onAddTask = useCallback((nwTask: IbaseTodo): void => {

    const newTask: Itodo = {
      id: uuidv4(),
      title: nwTask.title,
      description: nwTask.description,
      status: TASK_STATUS.Open,
      creation_date: Date.now(),
      update_date: null
    }

    setTodoList((prev)=>[newTask, ...prev])
    setShowModal(false);

  }, [])

  const handleSetOrder = useCallback((order: string): void => {
    setOrder(order)
  }, [])

  const handleSetStatusFilter = useCallback((filter: string): void => {
    setFilter(filter);
  }, []);

  const onSetStatus = useCallback((id: string, newStatus: TASK_STATUS) => {
    setTodoList(todoList.map((item) => {
      if (item.id === id) {
        item = {
          ...item,
          status: newStatus,
          update_date: Date.now()
        }
      }
      return item;
    }))

  }, [todoList])

  const getOrdered = useCallback((list: Itodo[]): Itodo[] => {

    switch (order) {
      case 'create':
        return list.sort((a, b) => b.creation_date - a.creation_date);

      case 'status':
        return list.sort((a, b) => a.status - b.status);

      case 'update':
        return list.sort((a, b) => (b.update_date ?? b.creation_date) - (a.update_date ?? a.creation_date));
      default:
        return list;
    }

  }, [order, todoList])

  const getFiltredText = useCallback((): Itodo[] => {
    return todoList.filter((item) => item.title.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase()) ||
      item.description.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase()));
  }, [textFilter, todoList])

  const getFiltred = useCallback((list: Itodo[]): Itodo[] => {
    switch (filter) {
      case 'open':
        return list.filter((item) => item.status === TASK_STATUS.Open);

      case 'progress':
        return list.filter((item) => item.status === TASK_STATUS.inProgress);

      case 'done':
        return list.filter((item) => item.status === TASK_STATUS.Done);

      default:
        return list;
    }
  }, [filter, todoList])

  return (
    <div className="App">

      {showModal ?
        <Modal
          handleSave={onAddTask}
          handleEdit={handleEdit}
          handleHide={hideModal}
          task={edit}
        /> : null}

      <Header
        onSetTextFilter={setTextFilter}
        onSetOrder={handleSetOrder}
        onSetStatusFilter={handleSetStatusFilter}
      />

      <div className='w-full flex flex-wrap justify-center mt-4 mb-20'>
        <TodoList
          todoList={getFiltred(getOrdered(getFiltredText()))}
          onRemove={onRemove}
          onEdit={onEdit}
          onSetStatus={onSetStatus}
        />
      </div>
      <AddButton
        onClick={handleAddClick}
      />
      
    </div>
  );
}

export default App;
