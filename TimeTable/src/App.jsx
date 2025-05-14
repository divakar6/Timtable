import { TimetableProvider } from './contexts/TimetableContext'
import AppLayout from './components/AppLayout'

function App() {
  return (
    <TimetableProvider>
      <AppLayout />
    </TimetableProvider>
  )
}

export default App