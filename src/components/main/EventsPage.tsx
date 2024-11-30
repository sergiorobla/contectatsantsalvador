import React, { useState } from "react";
import EventDetailsPopup from "./EventDetailsPopup.js";

// Define CustomEvent interface for type safety
interface CustomEvent {
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
const mockEvents: CustomEvent[] = [
  {
    id: 1,
    name: "Tech Meetup",
    description: "Networking event for tech professionals",
    date: "2024-12-15",
    coordinates: { lat: 40.7128, lon: -74.006 },
    author: "John Doe",
    imageUrl:
      "./cofradiaPescadoresSerrallo.png",
  },
  {
    id: 2,
    name: "Art Gallery Opening",
    description: "Modern art exhibition featuring local artists",
    date: "2024-11-20",
    coordinates: { lat: 40.7589, lon: -73.9851 },
    author: "Sarah Smith",
    imageUrl:
      "./correfocSantSalvador.jpg",
  },
  {
    id: 3,
    name: "Art Gallery Opening",
    description: "Modern art exhibition featuring local artists",
    date: "2024-11-20",
    coordinates: { lat: 40.7589, lon: -73.9851 },
    author: "Sarah Smith",
    imageUrl:
      "./santaTecla.jpg",
  },
];

// Main Events Page Component
const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CustomEvent | null>(null);

  // Type-safe error handler for image
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = "/default-event-image.png";
    target.onerror = null; // Prevents infinite loop if the default image fails to load
  };

  return (
    <div className="events-container">

      <div className="events-list">
        {mockEvents.map((event) => (
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
      <hr />
    </div>
  );
};

export default EventsPage;
