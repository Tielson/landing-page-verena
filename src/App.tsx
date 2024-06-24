import './global.css'

import { ThemeProvider } from './components/theme-provider/theme-provider'
import { Toaster } from './components/ui/toaster'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Toaster />
    </ThemeProvider>
  )
}
