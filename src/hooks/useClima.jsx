import { useContext } from "react";
import ClimaContext from "../context/ClimaProvider";

const useCLima = () => {

    return useContext(ClimaContext)
}

export default useCLima