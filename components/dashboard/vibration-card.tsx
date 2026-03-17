"use client"

import { useEffect,useState } from "react"
import { db } from "@/lib/firebase"
import { ref,onValue } from "firebase/database"

export default function VibrationCard(){

const [vibration,setVibration]=useState(0)

useEffect(()=>{

const sensorRef=ref(db,"iot/device1/vibration")

onValue(sensorRef,(snapshot)=>{

const value=snapshot.val()

if(value!==null){
setVibration(value)
}

})

},[])

return(

<div className="bg-zinc-900 p-6 rounded-xl border border-yellow-500">

<h2 className="text-lg mb-2">Vibration</h2>

<p className="text-4xl text-yellow-400">{vibration}</p>

</div>

)

}