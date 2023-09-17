import React, { useState } from 'react';

const Products = () => {
  // Define an array of sneakers grouped by brand
  const sneakersByBrand = {
    Nike: [
      { id: 1, name: 'Nike Air Force 1', price: 100, image: 'https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1631122839&q=60' },
      { id: 2, name: 'Nike Dunk Low', price: 120, image: 'https://images.stockx.com/images/Nike-Dunk-Low-Mica-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1684307637&q=60' },
      { id: 3, name: 'Air Max', price: 130, image: 'https://images.stockx.com/images/Nike-Air-Max-1-86-Big-Bubble-Obsidian-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1694466291&q=60' },
      { id: 4, name: 'Nike Blazer Mid', price: 110, image: 'https://images.stockx.com/images/Nike-Blazer-Mid-77-Vintage-White-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1606325720&q=60' },
      { id: 5, name: 'React Element 55', price: 95, image: 'https://images.stockx.com/images/Nike-NOCTA-Glide-Drake-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1689836045&q=60' },
      { id: 6, name: 'Nike Air Max 90', price: 125, image: 'https://images.stockx.com/images/Air-Max-95-Anatomy-of-Air-GID-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1668064176&q=60' },
    ],
    Adidas: [
      { id: 7, name: 'Adidas Samba', price: 90, image: 'https://images.stockx.com/images/adidas-Samba-OG-Cloud-White-Core-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1687243797&q=60' },
      { id: 8, name: 'Adidas Stan Smith', price: 95, image: 'https://images.stockx.com/images/adidas-Stan-Smith-The-Simpsons-Homer-Simpson-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1692306511&q=60' },
      { id: 9, name: 'Adidas Ultraboost', price: 85, image: 'https://images.stockx.com/images/adidas-Ultra-Boost-OG-Beyonce-Ivy-Park-Ivy-Heart-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1646033094&q=60' },
      { id: 10, name: 'Adidas Slides ', price: 100, image: 'https://images.stockx.com/images/adidas-Adilette-22-Slides-Black-Product.png?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1686755693&q=60' },
      { id: 11, name: 'Adidas Superstar', price: 120, image: 'https://images.stockx.com/images/adidas-Campus-00s-Core-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1681283876&q=60' },
      { id: 12, name: 'Continental 80', price: 110, image: 'https://images.stockx.com/images/adidas-Samba-OG-Silver-Green-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1694120902&q=60' },
    ],
    Jordan: [
      { id: 13, name: 'Jordan 1 High OG', price: 150, image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Palomino-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1693408205&q=60' },
      { id: 14, name: 'Jordan 3 J Balvin', price: 140, image: 'https://images.stockx.com/images/Air-Jordan-3-Retro-SP-J-Balvin-Updated.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1694459607&q=60' },
      { id: 15, name: 'Jordan 1 Travis s', price: 1000, image: 'https://images.stockx.com/images/Air-Jordan-1-Low-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1629307046&q=60' },
      { id: 16, name: 'Jordan 5 Brown', price: 145, image: 'https://images.stockx.com/images/Air-Jordan-6-Retro-Travis-Scott-British-Khaki-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1620406101&q=60' },
      { id: 17, name: 'Jordan 11 Retro', price: 130, image: 'https://images.stockx.com/images/Air-Jordan-11-Retro-Playoffs-2019-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1606320266&q=60' },
      { id: 18, name: 'Jordan 6 Low', price: 155, image: 'https://images.stockx.com/images/Air-Jordan-5-Retro-Low-CLOT-Jade-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1653399501&q=60' },
    ],
    'New Balance': [
      { id: 19, name: ' 550 green', price: 80, image: 'https://images.stockx.com/images/New-Balance-550-White-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1628002321&q=60' },
      { id: 20, name: ' 4090 black', price: 85, image: 'https://images.stockx.com/images/New-Balance-1906D-Protection-Pack-Black-Leather-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1690467120&q=60' },
      { id: 21, name: ' 2002r White', price: 90, image: 'https://images.stockx.com/images/New-Balance-M2002-Protection-Pack-Rain-Cloud-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1638287519&q=60'  }, 
      { id: 22, name: ' 550 White G', price: 75, image: 'https://images.stockx.com/images/New-Balance-550-White-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1613670436&q=60' },
      { id: 23, name: '960 Grey', price: 95, image: 'https://images.stockx.com/images/New-Balance-327-Turtledove-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1685115560&q=60' },
      { id: 24, name: '9060 Salmon', price: 110, image: 'https://images.stockx.com/images/New-Balance-9060-Sea-Salt-Cherry-Blossom-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1680811275&q=60' },
    ],
    Yeezy: [
      { id: 25, name: 'Yeezy 350v2', price: 220, image: 'https://images.stockx.com/images/adidas-Yeezy-Boost-350-V2-Pure-Oat-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1648503664&q=60' },
      { id: 26, name: 'Yeezy Slide', price: 230, image: 'https://images.stockx.com/images/adidas-Yeezy-Slide-Azure-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1671115369&q=60' },
      { id: 27, name: 'Yeezy 450', price: 210, image: 'https://images.stockx.com/images/Adidas-Yeezy-500-Utility-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1606319127&q=60' },
      { id: 28, name: 'Yeezy Boot', price: 240, image: 'https://images.stockx.com/images/adidas-Yeezy-950-Pirate-Black-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1693591241&q=60' },
      { id: 29, name: 'Yeezy 700v1', price: 215, image: 'https://images.stockx.com/images/adidas-Yeezy-700-V2-Static-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1625589442&q=60' },
      { id: 30, name: 'Yeezy Slide', price: 225, image: 'https://images.stockx.com/images/adidas-Yeezy-Slide-Glow-Green-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=2&trim=color&updated_at=1671115611&q=60' },
    ],
  };
  
  

  const [cart, setCart] = useState([]);

  const addToCart = (sneaker) => {
    // Check if the sneaker is already in the cart based on its ID
    if (!cart.some((item) => item.id === sneaker.id)) {
      // If it's not in the cart, add it
      setCart([...cart, sneaker]);
    }
  };

  return (
    <div className="products-container">
      {Object.entries(sneakersByBrand).map(([brand, sneakers]) => (
        <div key={brand}>
          <h2>{brand}</h2>
          <div className="sneaker-row">
            {sneakers.map((sneaker) => (
              <div key={sneaker.id} className="sneaker-item">
                <img src={sneaker.image} alt={sneaker.name} />
                <p>{sneaker.name}</p>
                <p>${sneaker.price}</p>
                <button
                  onClick={() => addToCart(sneaker)}
                  disabled={cart.some((item) => item.id === sneaker.id)}
                >
                  {cart.some((item) => item.id === sneaker.id)
                    ? 'Added to Cart'
                    : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;