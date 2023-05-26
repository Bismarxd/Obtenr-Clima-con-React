import useCLima from "../hooks/useClima"

function Resultado() {

    const{resultado} = useCLima()

    const {name:nombre, main} = resultado

    //Grados Kelvil
    const Kelvin = 273.15

  return (
    <div className="contenedor clima">
      <h2>El clima de {nombre} es:</h2>

      <p>
        { parseInt(main.temp - Kelvin) } <span>&#x2103;</span>
      </p>

      <div className="temp_min_max">
        <p>
            Temperatura Minima: { parseInt(main.temp_min - Kelvin) } <span>&#x2103;</span>
        </p>
        <p>
            Temperatura Maxima: { parseInt(main.temp_max - Kelvin) } <span>&#x2103;</span>
        </p>
      </div>
      
    </div>
  )
}

export default Resultado
