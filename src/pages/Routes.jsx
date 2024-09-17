import React from 'react';
import './Routes.css'; // For the CSS styling
import ImageGrid from '../components/ImageGrid';

const tripsData = [
    {
        departing: "24 SEP 2024",
        trip: "Zanzibar to Nairobi",
        route: "ZANZIBAR → NAIROBI",
        days: 12,
        price: {
            original: "$3,185",
            discounted: "$2,389",
        },
    },
    {
        departing: "27 SEP 2024",
        trip: "Stone Town to Nairobi",
        route: "ZANZIBAR → NAIROBI",
        days: 9,
        price: {
            original: "$2,720",
            discounted: "$2,040",
        },
    },
    {
        departing: "10 OCT 2024",
        trip: "Kilimanjaro Climb - Lemosho Route",
        route: "ARUSHA → ARUSHA",
        days: 10,
        price: {
            original: "$6,977",
            discounted: "$6,821",
        },
    },
    {
        departing: "15 OCT 2024",
        trip: "Tanzania to Zanzibar: White Sands & Wilderness",
        route: "ARUSHA → STONE TOWN",
        days: 9,
        price: {
            original: "$3,385",
            discounted: "$2,494",
        },
    },
    {
        departing: "20 OCT 2024",
        trip: "On Safari in Kenya & Tanzania",
        route: "NAIROBI → ARUSHA",
        days: 11,
        price: {
            original: "$8,378",
            discounted: "$8,143",
        },
    },
    {
        departing: "25 OCT 2024",
        trip: "Kenya & Tanzania: The Safari Experience",
        route: "NAIROBI → ARUSHA",
        days: 14,
        price: {
            original: "$14,948",
            discounted: "$14,598",
        },
    },
    {
        departing: "30 OCT 2024",
        trip: "Tanzania Private Safari",
        route: "ARUSHA → ARUSHA",
        days: 10,
        price: {
            original: "$8,884",
            discounted: "$8,004",
        },
    },
];


const TravellingRoutes = () => {
    return (
        <div className="table-container">
            <h2 className='title'> Tanzania Tours & Vacations</h2>
            <p className='description'>Experience the thrill of wildlife safaris, the serenity of ancient ruins, and the vibrant culture of Tanzania.Encounter the Big Five up close in Ngorongoro Crater.Experience the vibrant markets, traditional dances, and local cuisine.Let us help you plan the perfect adventure in Tanzania.</p>
            <ImageGrid />
            <p className='title'> Explore Tanzania: A Journey of a Lifetime Awaits</p>
            <p className="description">Discover the beauty and adventure of Tanzania with our specially curated travel deals. Whether you're drawn to the stunning Serengeti, the majestic Mount Kilimanjaro, or the pristine beaches of Zanzibar, Tanzania offers an array of unforgettable experiences for every type of traveler.</p>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>Departing</th>
                        <th>Trip</th>
                        <th>Route</th>
                        <th>Days</th>
                        <th>From USD</th>
                    </tr>
                </thead>
                <tbody>
                    {tripsData.map((trip) => (
                        <tr key={trip.id}>
                            <td>{trip.departing}</td>
                            <td>
                                <div className="trip-details">
                                    <div className="trip-title">{trip.trip}</div>
                                    <div className="sub-trip">{trip.subTrip}</div>
                                </div>
                            </td>
                            <td>
                                <iframe src="https://www.google.com/maps/place/Prestige+Cinemas/@-1.3004547,36.7847607,17z/data=!3m1!4b1!4m6!3m5!1s0x182f109c77089bd7:0x41b7b12fb74250d8!8m2!3d-1.3004601!4d36.7873356!16s%2Fg%2F11g6x7yx2l?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D" frameborder="0"></iframe>
                                {/* <img className="trip-image" src="https://www.shutterstock.com/image-vector/trail-map-tourists-hiking-footpath-260nw-1248093616.jpg" alt={trip.trip} /> */}
                            </td>
                            <td>{trip.days}</td>
                            <td>
                                <div className="price-section">
                                    <span className="original-price">{trip.price.original}</span>
                                    <span className="discounted-price">{trip.price.discounted}</span>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="view-trip-link">
                                    View trip &rarr;
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TravellingRoutes;
