import React, { useState } from 'react';
import EventDetailsPopup from "./EventDetailsPopup.js";

// Define Event interface for type safety
interface Event {
    id: number;
    name: string;
    description: string;
    date: string;
    coordinates: {
        lat: number;
        lon: number;
    };
    author: string;
    imageUrl: string;
}

// Mock event data
const mockEvents: Event[] = [
    {
        id: 1,
        name: "Tech Meetup",
        description: "Networking event for tech professionals",
        date: "2024-12-15",
        coordinates: { lat: 40.7128, lon: -74.0060 },
        author: "John Doe",
        imageUrl: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2017%2F04%2F06155038%2Fperro-beso.jpg?auth=7db092219938909c16f466d602dcf2715cb44547bae1b45714fbfc66be4b16e9&smart=true&width=1200&height=1200&quality=85"
    },
    {
        id: 2,
        name: "Art Gallery Opening",
        description: "Modern art exhibition featuring local artists",
        date: "2024-11-20",
        coordinates: { lat: 40.7589, lon: -73.9851 },
        author: "Sarah Smith",
        imageUrl: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2017%2F04%2F06155038%2Fperro-beso.jpg?auth=7db092219938909c16f466d602dcf2715cb44547bae1b45714fbfc66be4b16e9&smart=true&width=1200&height=1200&quality=85"
    },
    {
        id: 3,
        name: "Art Gallery Opening",
        description: "Modern art exhibition featuring local artists",
        date: "2024-11-20",
        coordinates: { lat: 40.7589, lon: -73.9851 },
        author: "Sarah Smith",
        imageUrl: "https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2017%2F04%2F06155038%2Fperro-beso.jpg?auth=7db092219938909c16f466d602dcf2715cb44547bae1b45714fbfc66be4b16e9&smart=true&width=1200&height=1200&quality=85"
    }
];

// Main Events Page Component
const EventsPage: React.FC = () => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    // Type-safe error handler for image
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.src = '/default-event-image.png';
        target.onerror = null;
    };

    return (
        <div className="events-container">
            <h1 id='title'>Nearby Events</h1>

            <div className="events-list">
                {mockEvents.map(event => (
                    <div
                        key={event.id}
                        className="event-card"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <div className="event-image-container">
                            <img
                                src={event.imageUrl}
                                alt={event.name}
                                className="event-image"
                                onError={handleImageError}
                            />
                        </div>
                        <div className="event-name">{event.name}</div>
                    </div>
                ))}
            </div>

            {selectedEvent && (
                <EventDetailsPopup
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
            <hr/>
        </div>
    );
};

export default EventsPage;