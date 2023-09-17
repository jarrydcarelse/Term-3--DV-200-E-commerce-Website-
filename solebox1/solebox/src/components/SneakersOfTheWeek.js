// SneakersOfTheWeek.js
import React from 'react';

const SneakersOfTheWeek = () => {
  // Define your sneakers of the week data here
  const sneakers = [
    {
      id: 1,
      name: 'Yeezy 350v2',
      image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Core-Black-White-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1648065370&q=60',
    },
    {
      id: 2,
      name: 'Yeezy 700v1',
      image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-700-Analog-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1688626040&q=60',
    },
    {
      id: 3,
      name: 'Jordan 3',
      image: 'https://images.stockx.com/images/Air-Jordan-3-Retro-SP-J-Balvin-Updated.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1694459607&q=60',
    },
    {
        id: 4,
        name: 'Crocs',
        image: 'https://images.stockx.com/images/Crocs-Classic-Clog-Lightning-McQueen-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1620405722&q=60',
      },
      {
        id: 5,
        name: 'Yeezy Foam Runner',
        image: 'https://images.stockx.com/images/adidas-Yeezy-Foam-RNR-Carbon-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1692211809&q=60',
      },
    
    // Add more sneakers as needed
  ];

  return (
    <section className="sneakers-of-the-week">
      <h2>Sneakers of the Week</h2>
      <div className="sneakers-list">
        {sneakers.map((sneaker) => (
          <div key={sneaker.id} className="sneaker-item">
            <img src={sneaker.image} alt={sneaker.name} />
            <p>{sneaker.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SneakersOfTheWeek;
