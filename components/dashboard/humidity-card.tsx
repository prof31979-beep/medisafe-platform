"use client"

import { useEffect,useState } from "react"
import { db } from "@/lib/firebase"
import { ref,onValue } from "firebase/database"

export default function HumidityCard(){

const [humidity,setHumidity]=useState(0)

useEffect(()=>{

const sensorRef=ref(db,"iot/device1/humidity")

onValue(sensorRef,(snapshot)=>{

const value=snapshot.val()

if(value!==null){
setHumidity(value)
}

})

},[])

return(

<div className="bg-zinc-900 p-6 rounded-xl border border-green-500">

<h2 className="text-lg mb-2">Humidity</h2>

<p className="text-4xl text-green-400">{humidity} %</p>

</div>

)

}