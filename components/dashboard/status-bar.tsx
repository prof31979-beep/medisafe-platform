"use client"

import { useEffect, useState } from "react"
import { ref, onValue } from "firebase/database"
import { db } from "@/lib/firebase"

export default function StatusBar(){

const [status,setStatus] = useState("Offline")

useEffect(()=>{

const sensorRef = ref(db,"medisafe/container1")

onValue(sensorRef,(snapshot)=>{

if(snapshot.exists()){
setStatus("Online")
}else{
setStatus("Offline")
}

})

},[])

return(

<div className="bg-zinc-800 p-4 rounded-lg flex justify-between">

<p>System Status:</p>

<p className={status === "Online" ? "text-green-400" : "text-red-400"}>
{status}
</p>

</div>

)

}