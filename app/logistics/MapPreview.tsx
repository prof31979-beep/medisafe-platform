"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix Leaflet default marker icon issue
delete (L.Icon.Default as any).prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
})

interface MapPreviewProps {
  lat: number
  lng: number
  vehicleId: string
  status: string
}

export default function MapPreview({ lat, lng, vehicleId, status }: MapPreviewProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={10}
      scrollWheelZoom={false}
      className="w-full h-40 rounded-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          {vehicleId} <br /> Status: {status.toUpperCase()}
        </Popup>
      </Marker>
    </MapContainer>
  )
}