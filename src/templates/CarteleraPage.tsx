import React, { useState } from "react";
import { useEvents } from "../context/EventContext";
import EventCard from "../components/Cartelera/EventCard";
import SearchBar from "../components/Cartelera/searchBar";

const EventList: React.FC = () => {
    const { events, setEvents } = useEvents();
    const [filterText, setFilterText] = useState("");
    const [onlyFavourites, setOnlyFavourites] = useState(false);

    // Función de filtro
    const filteredEvents = events.filter((event) => {
        const matchesText =
            event.name.toLowerCase().includes(filterText.toLowerCase()) ||
            event.description.toLowerCase().includes(filterText.toLowerCase());
        const matchesFavourite = onlyFavourites ? event.isFavourite : true;
        return matchesText && matchesFavourite;
    });

    // Función para manejar eliminación
    const handleDelete = (name: string) => {
        if (window.confirm(`¿Estás seguro de que quieres eliminar "${name}"?`)) {
            setEvents((prevEvents) => prevEvents.filter((event) => event.name !== name));
            alert("Evento eliminado con éxito.");
        }
    };

    // Función para alternar favoritos
    const handleFavouriteToggle = (name: string) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.name === name
                    ? { ...event, isFavourite: !event.isFavourite }
                    : event
            )
        );
    };

    return (
        <div>
            {/* Barra de búsqueda */}
            <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />

            {/* Filtro de favoritos */}
            <label className="flex items-center space-x-2 mb-4">
                <input
                    type="checkbox"
                    checked={onlyFavourites}
                    onChange={(e) => setOnlyFavourites(e.target.checked)}
                />
                <span>Solo favoritos</span>
            </label>

            {/* Lista de eventos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                    <EventCard
                        key={event.name}
                        imageUrl={event.imageUrl}
                        name={event.name}
                        date={event.date}
                        description={event.description}
                        coordinates={event.coordinates}
                        isFavourite={event.isFavourite}
                        onFavouriteToggle={() => handleFavouriteToggle(event.name)}
                        onEdit={() => alert(`Editar evento "${event.name}"`)}
                        onDelete={() => handleDelete(event.name)}
                    />
                ))}
            </div>

            {/* Mensaje si no hay eventos */}
            {filteredEvents.length === 0 && (
                <p className="text-center text-gray-500 mt-6">
                    No se encontraron eventos con los filtros seleccionados.
                </p>
            )}
        </div>
    );
};

export default EventList;
