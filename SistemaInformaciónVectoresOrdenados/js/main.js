import Articulo from "./Articulo.js";
import Registro from "./Registro.js";

class Main {
    constructor() {
        let registro = new Registro(
            document.querySelector("#tablaArticulos")
        );

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intCodigo = document.querySelector("#numCodigo").value;
            let intNombre = document.querySelector("#nombreArticulo").value;
            let intPrecio = Number(document.querySelector("#precioArticulo").value);
            let intCantidad = Number(document.querySelector("#cantidad").value);
            let intDescripcion = document.querySelector("#descripcionArticulo").value;

            registro.agregarArticuloPrueba(
                new Articulo(
                    intCodigo,
                    intNombre,
                    intPrecio,
                    intCantidad,
                    intDescripcion
                ));

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            let intCodigoABuscar = document.querySelector("#intCodigoBuscar").value;
            registro.mostrarArticuloBuscado(intCodigoABuscar);

        });
    }
}

let m = new Main();