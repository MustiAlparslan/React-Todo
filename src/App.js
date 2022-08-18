import { useState } from "react";
import Text from "./Components/Text";

function App() {

  let [todo, setTodo] = useState([]);
  return (
    <div>
      <Text todo={todo} setTodo={setTodo}/>    
      <button type="button" onClick={() => console.log(todo)}>Ekle</button>
    </div>
  );
}

export default App;
