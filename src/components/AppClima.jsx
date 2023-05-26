import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"
import useCLima from "../hooks/useClima"

function AppClima() {

    const {resultado, cargando, noResultado} = useCLima()

  return (
    <div>
      <>
        <main className="dos-columnas">
            <Formulario/>

            {
                cargando ? <Loading/> :
                resultado?.name ? <Resultado/> :
                noResultado ? <p>{noResultado}</p>
                : <p></p>
            }

        </main>
      </>
    </div>
  )
}

export default AppClima
