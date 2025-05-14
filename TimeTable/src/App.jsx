import { TimetableProvider } from './contexts/TimetableContext';
import { AppLayout } from './components/AppLayout';
import './styles/main.css';

function App() {
  return (
    <TimetableProvider>
      <AppLayout />
    </TimetableProvider>
  );
}

export default App;