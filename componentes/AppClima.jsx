import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"
import useClima from    "../hooks/useClima"


const AppClima = () => {

    const { resultado, cargando, noResultado } = useClima();



  return (
    <>
    <main className="dos-columnas">
        <Formulario></Formulario>

        {cargando ? <Loading /> : 
        resultado?.name ? <Resultado></Resultado> :
        noResultado ? <p>{noResultado}</p> : <p>El resultado se muestra aquí</p> }

    </main>
   
    </>
  )
}

export default AppClima