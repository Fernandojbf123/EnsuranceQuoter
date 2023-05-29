import AppEnsurance from "./components/AppEnsurance";
import { QuoterProvider } from "./context/QuoterProvider";

function App() {

  return (
    <QuoterProvider>
      <AppEnsurance />
    </QuoterProvider>
  )
}

export default App
