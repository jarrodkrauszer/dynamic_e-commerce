const db = require('./connection');
const { Product, Category, Company } = require('../models');
const cleanDB = require('./cleanDB');
const { LogOutput } = require('concurrently');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Mens' },
    { name: 'Womens' },
    { name: 'Hats' },
    { name: 'Jackets' },
    { name: 'Sneakers' }
  ]);

  console.log('categories seeded');

  const newProducts = [
    {
      name: 'Camo Down Vest',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'camo-vest.png',
      category: categories[0]._id,
      price: 199.99,
      quantity: 150
    },
    {
      name: 'Floral T-Shirt',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'floral-shirt.png',
      category: categories[0]._id,
      price: 24.99,
      quantity: 200
    },
    {
      name: 'Black & White Longsleeve',
      category: categories[0]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'long-sleeve.png',
      price: 29.99,
      quantity: 78
    },
    {
      name: 'Pink T-shirt',
      category: categories[0]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'pink-shirt.png',
      price: 19.00,
      quantity: 150
    },
    {
      name: 'Jean Long Sleeve',
      category: categories[0]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: 'roll-up-jean-shirt.png',
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Burgundy T-shirt',
      category: categories[0]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'polka-dot-shirt.png',
      price: 19.00,
      quantity: 90
    },
    {
      name: 'Blue Tanktop',
      category: categories[1]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'blue-tank.png',
      price: 19.00,
      quantity: 80
    },
    {
      name: 'Floral Blouse',
      category: categories[1]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'floral-blouse.png',
      price: 29.99,
      quantity: 100
    },
    {
      name: 'Floral Dress',
      category: categories[1]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'floral-skirt.png',
      price: 49.50,
      quantity: 113
    },
    {
      name: 'Red Dots Dres',
      category: categories[1]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'red-polka-dot-dress.png',
      price: 75.25,
      quantity: 200
    },
    {
      name: 'Striped Sweater',
      category: categories[1]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'striped-sweater.png',
      price: 44.99,
      quantity: 100
    },
    {
      name: 'Yellow Track Suit',
      category: categories[1]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'yellow-track-suit.png',
      price: 74.99,
      quantity: 125
    },
    {
      name: 'White Blouse',
      category: categories[1]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'white-vest.png',
      price: 39.99,
      quantity: 125
    },
    {
      name: 'Brown Brim',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'brown-brim.png',
      price: 19.00,
      quantity: 80
    },
    {
      name: 'Brown Cowboy',
      category: categories[2]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'brown-cowboy.png',
      price: 64.99,
      quantity: 110
    },
    {
      name: 'Grey Brim',
      category: categories[2]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'grey-brim.png',
      price: 19.00,
      quantity: 200
    },
    {
      name: 'Blue Beanie',
      category: categories[2]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'blue-beanie.png',
      price: 13.00,
      quantity: 74
    },
    {
      name: 'Green Beanie',
      category: categories[2]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'green-beanie.png',
      price: 13.00,
      quantity: 100
    },
    {
      name: 'Red Beanie',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'red-beanie.png',
      price: 13.00,
      quantity: 125
    },
    {
      name: 'Palm Tree Cap',
      category: categories[2]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'palm-tree-cap.png',
      price: 21.99,
      quantity: 125
    },
    {
      name: 'Black Jean Shearlin',
      category: categories[3]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'black-shearling.png',
      price: 119.00,
      quantity: 80
    },
    {
      name: 'Blue Jean Jacket',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'blue-jean-jacket.png',
      price: 99.00,
      quantity: 110
    },
    {
      name: 'Grey Jean Jacket',
      category: categories[3]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'grey-jean-jacket.png',
      price: 69.00,
      quantity: 200
    },
    {
      name: 'Brown Shearling',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'brown-shearling.png',
      price: 119.99,
      quantity: 74
    },
    {
      name: 'Tan Trench',
      category: categories[3]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'brown-trench.png',
      price: 129.99,
      quantity: 100
    },
    {
      name: 'Adidas NMD',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'adidas-nmd.png',
      price: 119.99,
      quantity: 100
    },
    {
      name: 'Adidas Yeezy',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'yeezy.png',
      price: 199.99,
      quantity: 125
    },
    {
      name: 'Nike White AirForce',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'white-nike-high-tops.png',
      price: 159.99,
      quantity: 125
    },
    {
      name: 'Nike Red High Tops',
      category: categories[4]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'nikes-red.png',
      price: 119.00,
      quantity: 80
    },
    {
      name: 'Nike Brown High Tops',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'nike-brown.png',
      price: 119.00,
      quantity: 110
    },
    {
      name: 'Air Jordan Limited',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'nike-funky.png',
      price: 199.00,
      quantity: 200
    },
    {
      name: 'Timberlands',
      category: categories[4]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'timberlands.png',
      price: 129.00,
      quantity: 74
    }
  ];

  const products = await Product.insertMany(newProducts);

  console.log('products seeded');

  const comapny = await Company.create({
    name: 'UrbanVogue',
    image: 'logo.png',
    address: {
      street: '13 Main St',
      city: 'Trenton',
      state: 'New Jersey',
      postalCode: '08618'
    },
    phone: '(609) 555-5555'
  });

  console.log('company seeded');

  process.exit();
});
