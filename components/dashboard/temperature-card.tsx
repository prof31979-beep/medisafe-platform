"use client"

import { useEffect,useState } from "react"
import { db } from "@/lib/firebase"
import { ref,onValue } from "firebase/database"

export default function TemperatureCard(){

const [temp,setTemp]=useState(0)

useEffect(()=>{

const sensorRef=ref(db,"iot/device1/temperature")

onValue(sensorRef,(snapshot)=>{

const value=snapshot.val()

if(value!==null){
setTemp(value)
}

})

},[])

return(

<div className="bg-zinc-900 p-6 rounded-xl border border-blue-500">

<h2 className="text-lg mb-2">Temperature</h2>

<p className="text-4xl text-blue-400">{temp} °C</p>

</div>

)

}