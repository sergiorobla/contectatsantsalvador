import React from "react";

interface EventCardProps {
    imageUrl: string;
    name: string;
    date: string;
    description: string;
    coordinates: [number, number];
    isFavourite: boolean;
    onFavouriteToggle: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
    imageUrl,
    name,
    date,
    description,
    coordinates,
    isFavourite,
    onFavouriteToggle,
    onEdit,
    onDelete
}) => {
    return (
        <div style={styles.card}>
            <img style={styles.image} src={imageUrl} alt={name} />
            <div style={styles.cardContent}>
                <h3 style={styles.title}>{name}</h3>
                <h4 style={styles.date}>{date}</h4>
                <p style={styles.description}>{description}</p>
                <div style={styles.buttonsContainer}>
                    <button
                        style={styles.button}
                        onClick={onEdit}
                    >
                        Editar
                    </button>
                    <button
                        style={styles.button}
                        onClick={onDelete}
                    >
                        Eliminar
                    </button>
                    <button
                        style={{
                            ...styles.button,
                            backgroundColor: isFavourite ? "green" : "gray",
                        }}
                        onClick={onFavouriteToggle}
                    >
                        {isFavourite ? "Favorito" : "No favorito"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: "20rem",
        height: "auto", // Ajusta la altura dependiendo del contenido, pero con una altura mínima
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "1.5rem",
        marginTop: "10px", // Márgen superior de las tarjetas
        display: "flex" as "flex", // Aseguramos que el valor sea el tipo adecuado
        flexDirection: "column" as "column", // Valor específico para `flexDirection`
    },
    image: {
        width: "100%",
        height: "auto",
    },
    cardContent: {
        padding: "1rem",
        flex: 1, // Esto hace que el contenido de la tarjeta ocupe el espacio disponible
    },
    title: {
        fontSize: "1.4rem",
        fontWeight: "600",
    },
    date: {
        fontSize: "1.2rem",
        color: "#555",
    },
    description: {
        fontSize: "1rem",
        color: "#333",
        marginTop: "0.5rem",
    },
    coordinates: {
        fontSize: "1rem",
        color: "#333",
        marginTop: "0.5rem",
    },
    buttonsContainer: {
        display: "flex" as "flex", // Aseguramos que el valor sea el tipo adecuado
        justifyContent: "space-between",
        marginTop: "1rem",
        gap: "1rem", // Asegura que haya espacio entre los botones
    },
    button: {
        padding: "0.5rem 1rem",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600",
        flex: 1, // Asegura que todos los botones tengan el mismo tamaño
        minHeight: "40px", // Altura mínima uniforme
        textAlign: "center" as "center", // Valor específico de textAlign
    }
};

export default EventCard;
