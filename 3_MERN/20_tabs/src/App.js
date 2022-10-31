import Tabs from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

const tabs = [
  {label: "Tab 1", content: "This is tab 1's content."},
  {label: "Tab 2", content: "This is tab 2's content."},
  {label: "Tab 3", content: "This is tab 3's content."},
  {label: "Tab 4", content: "This is tab 4's content."},
  {label: "Tab 5", content: "This is tab 5's content."},
]

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
