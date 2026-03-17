"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
} from "chart.js"

import { ref, onValue } from "firebase/database"
import { db } from "@/lib/firebase"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
)

export default function TempGraph(){

const [dataPoints,setDataPoints] = useState<number[]>([])
const [labels,setLabels] = useState<string[]>([])

useEffect(()=>{

const sensorRef = ref(db,"medisafe/container1/temperature")

onValue(sensorRef,(snapshot)=>{

const temp = snapshot.val()

if(temp !== null){

setDataPoints(prev => [...prev.slice(-9), temp])
setLabels(prev => [
...prev.slice(-9),
new Date().toLocaleTimeString()
])

}

})

},[])

const data = {
labels,
datasets: [
{
label: "Temperature °C",
data: dataPoints,
borderColor: "#3b82f6",
backgroundColor: "rgba(59,130,246,0.2)",
tension: 0.4
}
]
}

return(

<div className="bg-zinc-900 p-6 rounded-xl">

<h3 className="text-white mb-4">
Live Temperature Graph
</h3>

<Line data={data}/>

</div>

)

}