// Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc.
for (let i = 0; i <= 500 / 8; i++) {
  console.log(i, i * 8);
}

for (let i = 8; i < 500; i += 8) {
  console.log(i);
}
