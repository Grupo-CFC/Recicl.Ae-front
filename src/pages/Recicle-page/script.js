function limitar(elemento, max) {
  if (elemento.value.length > max) {
    elemento.value = elemento.value.slice(0, max);
  }
}