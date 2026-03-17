"use client"

import { useEffect, useState } from "react"
import { ref, onValue } from "firebase/database"
import { db } from "@/lib/firebase"

export default function AlertsPanel(){

const [alerts,setAlerts] = useState<string[]>([])

useEffect(()=>{

const sensorRef = ref(db,"medisafe/container1")

onValue(sensorRef,(snapshot)=>{

const data = snapshot.val()

if(!data) return

let newAlerts:string[] = []

if(data.temperature > 8){
newAlerts.push("🔥 High Temperature Alert!")
}

if(data.humidity > 70){
newAlerts.push("💧 High Humidity Alert!")
}

if(data.vibration > 1){
newAlerts.push("⚠️ Vibration Detected!")
}

setAlerts(newAlerts)

})

},[])

return(

<div className="bg-zinc-900 p-6 rounded-xl">

<h3 className="text-red-400 mb-4">
Alerts
</h3>

{alerts.length === 0 ? (
<p className="text-green-400">All systems normal</p>
) : (
alerts.map((a,i)=>(
<p key={i} className="text-red-500">{a}</p>
))
)}

</div>

)

}