import Tabs from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const tabProps = [
  {tabID: 0, label: "Tab 1", content: "This is tab 1's content."},
  {tabID: 1, label: "Tab 2", content: "This is tab 2's content."},
  {tabID: 2, label: "Tab 3", content: "This is tab 3's content."},
]

function App() {
  return (
    <div className="App">
      <Tabs tabProps={tabProps} />
    </div>
  );
}

export default App;
