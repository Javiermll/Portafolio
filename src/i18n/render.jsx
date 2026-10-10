/* Ayudas para pintar texto traducido con partes destacadas. */

// [antes, resaltado, después] -> antes <mark>resaltado</mark> después
export function title(parts) {
  const [before, mark, after] = parts
  return (
    <>
      {before}
      <mark>{mark}</mark>
      {after}
    </>
  )
}

// Los índices impares van en negrita
export function rich(parts) {
  return parts.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))
}
