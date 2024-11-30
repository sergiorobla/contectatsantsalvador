import React, { useState } from "react";
import EventCard from "../../logic/Cartelera";
import { useEvents } from "../../logic/CarteleraContext"; // Importamos el contexto

const EventList: React.FC = () => {
    const { events, setEvents } = useEvents(); // Accedemos a los eventos del contexto
    const [filterFavourites, setFilterFavourites] = useState(false); // Estado para el filtro de favoritos
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>(""); // Estado para el filtro de barrio

    // Extraemos los barrios únicos de los eventos
    const neighborhoods = [
        ...new Set(events.map((event) => event.neighborhood)),
    ];

    // Función para alternar el estado de favorito
    const toggleFavourite = (eventId: string) => {
        const updatedEvents = events.map((event) =>
            event.name === eventId
                ? { ...event, isFavourite: !event.isFavourite } // Cambia el estado de favorito
                : event
        );
        setEvents(updatedEvents); // Actualizamos el estado global de eventos
    };

    // Filtrar los eventos según los filtros aplicados
    const filteredEvents = events.filter((event) => {
        // Filtrar por barrio si se ha seleccionado uno
        const matchesNeighborhood = selectedNeighborhood
            ? event.neighborhood === selectedNeighborhood
            : true;
        // Filtrar por favoritos si se aplica el filtro
        const matchesFavourite = filterFavourites
            ? event.isFavourite
            : true;

        return matchesNeighborhood && matchesFavourite;
    });

    return (
        <div className="container mx-auto p-4">
            {/* Filtro de barrio */}
            <div className="mb-6">
                <label htmlFor="neighborhood" className="mr-2 text-xl font-semibold">
                    Selecciona un barrio:
                </label>
                <select
                    id="neighborhood"
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Todos los barrios</option>
                    {neighborhoods.map((neighborhood, index) => (
                        <option key={index} value={neighborhood}>
                            {neighborhood}
                        </option>
                    ))}
                </select>
            </div>

            {/* Botón para alternar entre mostrar todos los eventos o solo favoritos */}
            <button
                onClick={() => setFilterFavourites((prev) => !prev)}
                className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {filterFavourites ? "Mostrar todos" : "Mostrar favoritos"}
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                    <div
                        className="flex justify-center"
                        key={index}
                    >
                        <EventCard
                            imageUrl={event.imageUrl}
                            name={event.name}
                            date={event.date}
                            description={event.description}
                            coordinates={event.coordinates}
                            isFavourite={event.isFavourite}
                            onFavouriteToggle={() => toggleFavourite(event.name)} // Pasar el nombre del evento como identificador único
                            onEdit={() => { }}
                            onDelete={() => { }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventList;