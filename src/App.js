import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import TogglePanel from "./components/TogglePanel";
import {panelData, todoList} from "./helpers";

function App() {
  return (
    <div className="container-md">
      <TogglePanel data={panelData} />
      <TogglePanel data={todoList} />
    </div>
  );
}

export default App;
