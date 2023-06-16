const cantidadCompra = document.querySelector("#cantidadCompra");
const categoriaCompra = document.querySelector("#categoriaCompra");
const totalCompra = document.querySelector("#totalCompra");
const btnResumenCompra = document.querySelector("#btnResumenCompra");
const btnBorrarCompra = document.querySelector("#btnBorrarCompra")

btnResumenCompra.addEventListener("click", () => {
  if (isNaN(parseInt(cantidadCompra.value)) || parseInt(cantidadCompra.value) <= 0) {
    Swal.fire({
      icon: 'error',
      text: '¡Por favor, ingrese una cantidad válida!',
      confirmButtonText: 'Cerrar',
      width: 300
    })
    return;
  }
  totalAPagar = 200 * parseInt(cantidadCompra.value) * (1 - parseFloat(categoriaCompra.value));
  totalCompra.textContent = Math.round(totalAPagar);
});

btnBorrarCompra.addEventListener("click", () => 
  totalCompra.textContent = 0
)