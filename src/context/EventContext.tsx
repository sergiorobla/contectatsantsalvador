import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Event } from "../data/types"; // Importa el tipo de Event desde types.ts
import { events as initialEvents } from "../data/data"; // Importa los eventos desde data.ts

// El tipo del contexto
interface EventContextType {
    events: Event[];
    setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [events, setEvents] = useState<Event[]>([]); // Estado inicial vacío

    useEffect(() => {
        setEvents(initialEvents); // Cargar los eventos desde data.ts
    }, []);

    return (
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    );
};

// Custom Hook para usar el contexto de eventos
export const useEvents = () => {
    const context = React.useContext(EventContext);
    if (!context) {
        throw new Error("useEvents must be used within an EventProvider");
    }
    return context;
};
