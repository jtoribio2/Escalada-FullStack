type ViaCardProps = {
  id_via: number
  nom: string
  dificultat: string
  llargada: number
  orientacio: string
}

export default function ViaCard({
  id_via,
  nom,
  dificultat,
  llargada,
  orientacio,
}: ViaCardProps) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white w-80">
      <h2 className="text-xl font-bold mb-2">
        {nom}
        </h2>

      <p>Dificultat: {dificultat}</p>

      <p>Llargada: {llargada}m</p>

      <p>Orientació: {orientacio}</p>
    </div>
  )
}