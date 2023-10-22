import AppClima from "../componentes/AppClima"
import { ClimaProvider } from "../context/ClimaProvider"

function App() {

  return (
    <>
    <ClimaProvider>
      <header>
        <h1> El Tiempo</h1>
      </header>
    <AppClima></AppClima>
    </ClimaProvider>
    </>
  )
}

export default App
