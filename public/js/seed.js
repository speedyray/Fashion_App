window.Seed = (function () {
    function generateVoteCount() {
      return Math.floor((Math.random() * 50) + 15);
    }
  
    const products = [
      {
        id: 1,
        title: 'Halter dress, black white scarf styling',
        description: 'Amazing, adorable chic-sized dress, delivered in just 3 days.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg',
        productImageUrl: 'images/products/image.png',
      },
      {
        id: 2,
        title: 'Unique plus size blouse with white polka dots',
        description: 'Top has a small collar and open neckline to the top of the waist;',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/kristy.png',
        productImageUrl: 'images/products/image-rose.png',
      },
      {
        id: 3,
        title: 'Denim Jumper',
        description: 'The comfort of overalls and a feminine tiered skirt in one.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/veronika.jpg',
        productImageUrl: 'images/products/image-steel.png',
      },
      {
        id: 4,
        title: 'Dress Halter Mustard Jewel',
        description: 'Here’s a stunning slinky stretch halter style dress',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/molly.png',
        productImageUrl: 'images/products/image-yellow.png',
      },
      {
        id: 5,
        title: 'Elegant and adorable Top Cowl Neck ',
        description: 'stretch knit blouse with chiffon cowl neck',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/matthew.png',
        productImageUrl: 'images/products/image-aqua.png',
      },
    ];
  
    return { products: products };
  }());
  