"use client";
import ViaCard from "../components/ViaCard";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Via } from "@/types/Via";

export default function Home() {
  const [contador, setContador] = useState(0);
  
  const [vies, setVies] = useState<Via[]>([])

  useEffect(() => {

  const dades = [
    {
      id_via: 1,
      nom: "La Vida",
      dificultat: "6c",
      llargada: 25,
      orientacio: "Sud",
    },
    {
      id_via: 2,
      nom: "Bavaresa",
      dificultat: "7a",
      llargada: 30,
      orientacio: "Nord",
    },
  ]

  setVies(dades)

}, [])
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Escalada FullStack</h1>
      <p>{contador}</p>
      <Button text="Incrementar" onClick={() => setContador(contador + 1)} />
    </main>
  );
}
