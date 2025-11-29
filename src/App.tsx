import './App.css'
import { ThemeProvider, useTheme } from '@mui/material';
import MainRoutes from './routes/MainRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

function App() {
const theme = useTheme()
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
