import { ListaColetada } from "./components/layout/ListaColetada"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      <ListaColetada />
    </div>
  )
}
