interface EmptySearchProps {
  text: string
}

export const EmptySearch = ({ text }:EmptySearchProps) => {
  return <p>No hay nada relacionado con {text}</p>
}
