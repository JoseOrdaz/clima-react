import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from    "../hooks/useClima"


const AppClima = () => {

    const { resultado } = useClima();



  return (
    <>
    <main className="dos-columnas">
        <Formulario></Formulario>
        {resultado?.name && <Resultado></Resultado>}

    </main>
   
    </>
  )
}

export default AppClima