import ContactList from "./Components/ContactList"
import callHistory from './assets/callHistory.json';

function App() {
  return (
    <div>
      <ContactList data={callHistory}/>
    </div>
  )
}

export default App
