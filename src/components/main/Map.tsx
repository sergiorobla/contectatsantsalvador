import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { neighborhoods } from '../../data'; // Asegúrate de la ruta correcta a tu archivo data.ts
import chinchetaIcon from '../../../public/chincheta.png'; // Importa correctamente la imagen
import { events } from '../../data'; // Asegúrate de importar los eventos también
import L from 'leaflet'; // Importa L desde leaflet

const customIcon = L.icon({
    iconUrl: chinchetaIcon,
    iconSize: [30, 30],
    iconAnchor: [10, 30],
});

const Map: React.FC = () => {
    const center: [number, number] = [41.123, 1.25]; // Coordenadas aproximadas para centrar el mapa

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false} className='content-map' style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {neighborhoods.map((neighborhood, index) => (
                <Polygon key={index} positions={neighborhood.positions} pathOptions={{ color: neighborhood.color }}>
                    <Popup>
                        <strong>{neighborhood.name}</strong><br />
                        {neighborhood.isFavorite ? "Favorito" : "No Favorito"}
                    </Popup>
                </Polygon>
            ))}
            {events.map((event, index) => (
                <Marker key={index} position={event.coordinates} icon={customIcon}>
                    <Popup>
                        <img src={event.imageUrl} alt={event.name} style={{ width: '100%' }} />
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <p><strong>Fecha:</strong> {event.date}</p>
                        <p><strong>Código Postal:</strong> {event.postalCode}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;