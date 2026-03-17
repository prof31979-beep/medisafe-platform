"use client"

import { useEffect, useState } from "react"
import { ref, onValue } from "firebase/database"
import { db } from "@/lib/firebase"

export default function SensorCards() {

  const [temperature,setTemperature] = useState(0)
  const [humidity,setHumidity] = useState(0)
  const [shipments,setShipments] = useState(0)

  useEffect(() => {

    const sensorRef = ref(db, "medisafe/container1")

    onValue(sensorRef, (snapshot) => {

      const data = snapshot.val()

      if(data){
        setTemperature(data.temperature)
        setHumidity(data.humidity)
        setShipments(data.shipments)
      }

    })

  }, [])

  return (

    <div className="grid grid-cols-3 gap-6">

      <div className="p-6 bg-zinc-900 rounded-xl">
        <h3 className="text-gray-400">Temperature</h3>
        <p className="text-3xl text-blue-400">{temperature}°C</p>
      </div>

      <div className="p-6 bg-zinc-900 rounded-xl">
        <h3 className="text-gray-400">Humidity</h3>
        <p className="text-3xl text-green-400">{humidity}%</p>
      </div>

      <div className="p-6 bg-zinc-900 rounded-xl">
        <h3 className="text-gray-400">Shipments</h3>
        <p className="text-3xl text-purple-400">{shipments}</p>
      </div>

    </div>

  )

}