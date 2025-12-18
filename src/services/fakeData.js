// Enhanced fake data with more posts using assets
export const fakeUsers = [
  {
    id: '1',
    username: 'aesthetic.vibes',
    fullName: 'Aesthetic Vibes',
    profilePicture: '/src/assets/user1.jpg',
    isVerified: false,
    followers: 1250,
    following: 890,
    posts: 45
  },
  {
    id: '2',
    username: 'moonlight.dreams',
    fullName: 'Moonlight Dreams',
    profilePicture: '/src/assets/user2.jpg',
    isVerified: false,
    followers: 2100,
    following: 456,
    posts: 78
  },
  {
    id: '3',
    username: 'golden.hour',
    fullName: 'Golden Hour',
    profilePicture: '/src/assets/user3.jpg',
    isVerified: false,
    followers: 890,
    following: 234,
    posts: 32
  },
  {
    id: '4',
    username: 'vintage.soul',
    fullName: 'Vintage Soul',
    profilePicture: '/src/assets/user4.jpg',
    isVerified: false,
    followers: 3400,
    following: 567,
    posts: 89
  },
  {
    id: '5',
    username: 'ocean.waves',
    fullName: 'Ocean Waves',
    profilePicture: '/src/assets/user5.jpg',
    isVerified: false,
    followers: 1890,
    following: 345,
    posts: 56
  },
  {
    id: '6',
    username: 'starry.nights',
    fullName: 'Starry Nights',
    profilePicture: '/src/assets/user6.jpg',
    isVerified: false,
    followers: 2567,
    following: 678,
    posts: 123
  },
  {
    id: '7',
    username: 'nature.lover',
    fullName: 'Nature Lover',
    profilePicture: '/src/assets/user7.jpg',
    isVerified: true,
    followers: 5670,
    following: 234,
    posts: 156
  },
  {
    id: '8',
    username: 'city.explorer',
    fullName: 'City Explorer',
    profilePicture: '/src/assets/user8.jpg',
    isVerified: false,
    followers: 3210,
    following: 567,
    posts: 89
  },
  {
    id: '9',
    username: 'coffee.addict',
    fullName: 'Coffee Addict',
    profilePicture: '/src/assets/user9.jpg',
    isVerified: false,
    followers: 1456,
    following: 234,
    posts: 67
  },
  {
    id: '10',
    username: 'wanderlust.soul',
    fullName: 'Wanderlust Soul',
    profilePicture: '/src/assets/user10.jpg',
    isVerified: true,
    followers: 4567,
    following: 345,
    posts: 123
  },
  {
    id: '11',
    username: 'foodie.adventures',
    fullName: 'Foodie Adventures',
    profilePicture: '/src/assets/user11.jpg',
    isVerified: false,
    followers: 2890,
    following: 456,
    posts: 89
  },
  {
    id: '12',
    username: 'fitness.guru',
    fullName: 'Fitness Guru',
    profilePicture: '/src/assets/user12.jpg',
    isVerified: true,
    followers: 6789,
    following: 567,
    posts: 234
  }
];

export const fakePosts = [
  {
    id: '1',
    user: fakeUsers[0],
    imageUrl: '/src/assets/img1.jpg',
    image: '/src/assets/img1.jpg',
    caption: 'Golden hour magic at the beach. Nothing beats this peaceful moment watching the sun dip into the ocean.',
    likes: 1234,
    comments: [
      { id: '1', user: fakeUsers[1], text: 'Amazing shot!', createdAt: '2h' },
      { id: '2', user: fakeUsers[2], text: 'Love this view!', createdAt: '1h' }
    ],
    createdAt: '3h',
    location: 'Malibu Beach, CA'
  },
  {
    id: '2',
    user: fakeUsers[1],
    imageUrl: '/src/assets/img2.jpg',
    image: '/src/assets/img2.jpg',
    caption: 'Morning fuel for another coding session. Clean setup, strong coffee, and endless possibilities ahead.',
    likes: 892,
    comments: [
      { id: '3', user: fakeUsers[0], text: 'That setup looks clean!', createdAt: '30m' },
      { id: '4', user: fakeUsers[3], text: 'What IDE are you using?', createdAt: '15m' }
    ],
    createdAt: '5h',
    location: 'San Francisco, CA'
  },
  {
    id: '3',
    user: fakeUsers[2],
    imageUrl: '/src/assets/img3.jpg',
    image: '/src/assets/img3.jpg',
    caption: 'Reached the summit after 3 hours of hiking. The view from up here makes every step worth it.',
    likes: 2156,
    comments: [
      { id: '5', user: fakeUsers[4], text: 'Incredible view! Where is this?', createdAt: '2h' },
      { id: '6', user: fakeUsers[5], text: 'Need to visit this place!', createdAt: '1h' }
    ],
    createdAt: '8h',
    location: 'Rocky Mountains, CO'
  },
  {
    id: '4',
    user: fakeUsers[3],
    imageUrl: '/src/assets/img4.jpg',
    image: '/src/assets/img4.jpg',
    caption: 'Made this pizza from scratch tonight. Fresh basil from the garden and homemade dough - perfection.',
    likes: 567,
    comments: [
      { id: '7', user: fakeUsers[0], text: 'Looks delicious! Recipe please?', createdAt: '45m' }
    ],
    createdAt: '12h',
    location: 'New York, NY'
  },
  {
    id: '5',
    user: fakeUsers[4],
    imageUrl: '/src/assets/img5.jpg',
    image: '/src/assets/img5.jpg',
    caption: 'The city comes alive at night. Captured this skyline from my favorite rooftop spot downtown.',
    likes: 1789,
    comments: [
      { id: '8', user: fakeUsers[2], text: 'Beautiful capture!', createdAt: '3h' },
      { id: '9', user: fakeUsers[1], text: 'Love the composition!', createdAt: '2h' }
    ],
    createdAt: '1d',
    location: 'Tokyo, Japan'
  },
  {
    id: '6',
    user: fakeUsers[5],
    imageUrl: '/src/assets/img6.jpg',
    image: '/src/assets/img6.jpg',
    caption: 'Saturday morning at the farmers market. Supporting local vendors and getting the freshest ingredients.',
    likes: 934,
    comments: [
      { id: '10', user: fakeUsers[3], text: 'Love supporting local!', createdAt: '4h' }
    ],
    createdAt: '2d',
    location: 'Portland, OR'
  },
  {
    id: '7',
    user: fakeUsers[6],
    imageUrl: '/src/assets/img7.jpg',
    image: '/src/assets/img7.jpg',
    caption: 'Deep in the forest where phone signals disappear and peace begins. Nature is the best therapist.',
    likes: 2341,
    comments: [
      { id: '11', user: fakeUsers[2], text: 'So peaceful!', createdAt: '1h' },
      { id: '12', user: fakeUsers[4], text: 'Need this right now', createdAt: '30m' }
    ],
    createdAt: '6h',
    location: 'Redwood National Park'
  },
  {
    id: '8',
    user: fakeUsers[7],
    imageUrl: '/src/assets/img8.jpg',
    image: '/src/assets/img8.jpg',
    caption: 'Sunday brunch done right. Fluffy pancakes, fresh berries, and maple syrup - weekend perfection.',
    likes: 1456,
    comments: [
      { id: '13', user: fakeUsers[5], text: 'This looks incredible!', createdAt: '2h' },
      { id: '14', user: fakeUsers[0], text: 'Recipe please!', createdAt: '1h' }
    ],
    createdAt: '4h',
    location: 'Brooklyn, NY'
  },
  {
    id: '9',
    user: fakeUsers[0],
    imageUrl: '/src/assets/img9.jpg',
    image: '/src/assets/img9.jpg',
    caption: 'Cozy Sunday afternoon with a good book and perfectly brewed coffee. Simple pleasures are the best.',
    likes: 987,
    comments: [
      { id: '15', user: fakeUsers[1], text: 'Perfect Sunday vibes!', createdAt: '3h' },
      { id: '16', user: fakeUsers[3], text: 'What are you reading?', createdAt: '2h' }
    ],
    createdAt: '7h',
    location: 'Home'
  },
  {
    id: '10',
    user: fakeUsers[1],
    imageUrl: '/src/assets/img1.jpg',
    image: '/src/assets/img1.jpg',
    caption: 'Another breathtaking sunset from this Greek island. Every evening here feels like a painting come to life.',
    likes: 3245,
    comments: [
      { id: '17', user: fakeUsers[0], text: 'Stunning colors!', createdAt: '4h' },
      { id: '18', user: fakeUsers[2], text: 'Take me there!', createdAt: '3h' }
    ],
    createdAt: '9h',
    location: 'Santorini, Greece'
  },
  {
    id: '11',
    user: fakeUsers[2],
    imageUrl: '/src/assets/img2.jpg',
    image: '/src/assets/img2.jpg',
    caption: 'Manhattan from street level. The architecture here tells stories of ambition reaching toward the sky.',
    likes: 1678,
    comments: [
      { id: '19', user: fakeUsers[5], text: 'Love the perspective!', createdAt: '5h' },
      { id: '20', user: fakeUsers[1], text: 'Amazing shot!', createdAt: '4h' }
    ],
    createdAt: '11h',
    location: 'Manhattan, NY'
  },
  {
    id: '12',
    user: fakeUsers[3],
    imageUrl: '/src/assets/img3.jpg',
    image: '/src/assets/img3.jpg',
    caption: 'Just finished an intense workout session. Pushing limits and feeling stronger with each rep.',
    likes: 2134,
    comments: [
      { id: '21', user: fakeUsers[3], text: 'You inspire me!', createdAt: '6h' },
      { id: '22', user: fakeUsers[0], text: 'Keep it up!', createdAt: '5h' }
    ],
    createdAt: '13h',
    location: 'Local Gym'
  },
  {
    id: '13',
    user: fakeUsers[4],
    imageUrl: '/src/assets/img4.jpg',
    image: '/src/assets/img4.jpg',
    caption: 'Spent hours at the modern art museum today. This piece stopped me in my tracks - pure creative genius.',
    likes: 1892,
    comments: [
      { id: '23', user: fakeUsers[2], text: 'Beautiful piece!', createdAt: '7h' },
      { id: '24', user: fakeUsers[4], text: 'So inspiring!', createdAt: '6h' }
    ],
    createdAt: '15h',
    location: 'MoMA, NYC'
  },
  {
    id: '14',
    user: fakeUsers[5],
    imageUrl: '/src/assets/img5.jpg',
    image: '/src/assets/img5.jpg',
    caption: 'Burning the midnight oil on this new project. When inspiration strikes, sleep can wait.',
    likes: 1234,
    comments: [
      { id: '25', user: fakeUsers[5], text: 'What are you building?', createdAt: '8h' },
      { id: '26', user: fakeUsers[3], text: 'Keep grinding!', createdAt: '7h' }
    ],
    createdAt: '17h',
    location: 'Home Office'
  },
  {
    id: '15',
    user: fakeUsers[6],
    imageUrl: '/src/assets/img6.jpg',
    image: '/src/assets/img6.jpg',
    caption: 'Spring has arrived and the flower market is bursting with color. These tulips brightened my entire day.',
    likes: 2567,
    comments: [
      { id: '27', user: fakeUsers[1], text: 'So pretty!', createdAt: '9h' },
      { id: '28', user: fakeUsers[0], text: 'Love the colors!', createdAt: '8h' }
    ],
    createdAt: '19h',
    location: 'Flower Market'
  },
  {
    id: '16',
    user: fakeUsers[7],
    imageUrl: '/src/assets/img7.jpg',
    image: '/src/assets/img7.jpg',
    caption: 'Lost in the beauty of nature. Every trail leads to a new adventure.',
    likes: 1890,
    comments: [
      { id: '29', user: fakeUsers[2], text: 'Breathtaking!', createdAt: '10h' }
    ],
    createdAt: '21h',
    location: 'Mountain Trail'
  },
  {
    id: '17',
    user: fakeUsers[0],
    imageUrl: '/src/assets/img8.jpg',
    image: '/src/assets/img8.jpg',
    caption: 'Exploring hidden gems in the city. Architecture that tells a thousand stories.',
    likes: 2234,
    comments: [
      { id: '30', user: fakeUsers[3], text: 'Love this perspective!', createdAt: '11h' }
    ],
    createdAt: '1d',
    location: 'Downtown'
  },
  {
    id: '18',
    user: fakeUsers[1],
    imageUrl: '/src/assets/img9.jpg',
    image: '/src/assets/img9.jpg',
    caption: 'Peaceful moments by the water. Sometimes you just need to pause and breathe.',
    likes: 1567,
    comments: [
      { id: '31', user: fakeUsers[4], text: 'So serene!', createdAt: '12h' }
    ],
    createdAt: '1d',
    location: 'Lakeside'
  },
  {
    id: '19',
    user: fakeUsers[2],
    imageUrl: '/src/assets/img1.jpg',
    image: '/src/assets/img1.jpg',
    caption: 'Chasing sunsets and making memories. Life is beautiful when you take time to notice.',
    likes: 2890,
    comments: [
      { id: '32', user: fakeUsers[5], text: 'Stunning capture!', createdAt: '13h' }
    ],
    createdAt: '1d',
    location: 'Beach'
  },
  {
    id: '20',
    user: fakeUsers[3],
    imageUrl: '/src/assets/img2.jpg',
    image: '/src/assets/img2.jpg',
    caption: 'Urban vibes and city lights. There is magic in every corner of this concrete jungle.',
    likes: 1678,
    comments: [
      { id: '33', user: fakeUsers[6], text: 'Amazing shot!', createdAt: '14h' }
    ],
    createdAt: '2d',
    location: 'City Center'
  },
  {
    id: '21',
    user: fakeUsers[8],
    imageUrl: '/src/assets/img3.jpg',
    image: '/src/assets/img3.jpg',
    caption: 'Morning coffee ritual. The perfect start to any productive day.',
    likes: 2345,
    comments: [
      { id: '34', user: fakeUsers[1], text: 'Need this energy!', createdAt: '15h' }
    ],
    createdAt: '2d',
    location: 'Local Cafe'
  },
  {
    id: '22',
    user: fakeUsers[9],
    imageUrl: '/src/assets/img4.jpg',
    image: '/src/assets/img4.jpg',
    caption: 'Adventure awaits around every corner. Pack light, travel far, dream big.',
    likes: 3456,
    comments: [
      { id: '35', user: fakeUsers[2], text: 'Take me with you!', createdAt: '16h' }
    ],
    createdAt: '3d',
    location: 'Mountain Peak'
  },
  {
    id: '23',
    user: fakeUsers[10],
    imageUrl: '/src/assets/img5.jpg',
    image: '/src/assets/img5.jpg',
    caption: 'Homemade pasta night. Nothing beats the satisfaction of cooking from scratch.',
    likes: 1987,
    comments: [
      { id: '36', user: fakeUsers[3], text: 'Recipe please!', createdAt: '17h' }
    ],
    createdAt: '3d',
    location: 'Home Kitchen'
  },
  {
    id: '24',
    user: fakeUsers[11],
    imageUrl: '/src/assets/img6.jpg',
    image: '/src/assets/img6.jpg',
    caption: 'Push your limits. Every rep counts, every drop of sweat is progress.',
    likes: 2876,
    comments: [
      { id: '37', user: fakeUsers[4], text: 'Motivation!', createdAt: '18h' }
    ],
    createdAt: '3d',
    location: 'Gym'
  },
  {
    id: '25',
    user: fakeUsers[0],
    imageUrl: '/src/assets/img7.jpg',
    image: '/src/assets/img7.jpg',
    caption: 'Forest therapy session. Sometimes the best medicine is a walk among trees.',
    likes: 2134,
    comments: [
      { id: '38', user: fakeUsers[5], text: 'So peaceful!', createdAt: '19h' }
    ],
    createdAt: '4d',
    location: 'Forest Trail'
  },
  {
    id: '26',
    user: fakeUsers[1],
    imageUrl: '/src/assets/img8.jpg',
    image: '/src/assets/img8.jpg',
    caption: 'Street art tells stories. Every wall is a canvas waiting for expression.',
    likes: 1765,
    comments: [
      { id: '39', user: fakeUsers[6], text: 'Love this art!', createdAt: '20h' }
    ],
    createdAt: '4d',
    location: 'Art District'
  },
  {
    id: '27',
    user: fakeUsers[2],
    imageUrl: '/src/assets/img9.jpg',
    image: '/src/assets/img9.jpg',
    caption: 'Quiet moments by the lake. Reflection time is essential for the soul.',
    likes: 2543,
    comments: [
      { id: '40', user: fakeUsers[7], text: 'Beautiful view!', createdAt: '21h' }
    ],
    createdAt: '4d',
    location: 'Lakeside Park'
  },
  {
    id: '28',
    user: fakeUsers[8],
    imageUrl: '/src/assets/img1.jpg',
    image: '/src/assets/img1.jpg',
    caption: 'Golden hour magic never gets old. Chasing light and capturing moments.',
    likes: 3210,
    comments: [
      { id: '41', user: fakeUsers[9], text: 'Perfect timing!', createdAt: '22h' }
    ],
    createdAt: '5d',
    location: 'Beach Sunset'
  },
  {
    id: '29',
    user: fakeUsers[9],
    imageUrl: '/src/assets/img2.jpg',
    image: '/src/assets/img2.jpg',
    caption: 'City nights and neon lights. The urban jungle comes alive after dark.',
    likes: 1876,
    comments: [
      { id: '42', user: fakeUsers[10], text: 'Amazing atmosphere!', createdAt: '23h' }
    ],
    createdAt: '5d',
    location: 'Downtown'
  },
  {
    id: '30',
    user: fakeUsers[10],
    imageUrl: '/src/assets/img3.jpg',
    image: '/src/assets/img3.jpg',
    caption: 'Fresh ingredients make all the difference. Farm to table is the way to go.',
    likes: 2987,
    comments: [
      { id: '43', user: fakeUsers[11], text: 'So fresh!', createdAt: '1d' }
    ],
    createdAt: '5d',
    location: 'Farmers Market'
  }
];

export const suggestedUsers = [
  {
    id: '7',
    username: 'dreamy.aesthetics',
    fullName: 'Dreamy Aesthetics',
    profilePicture: '/src/assets/user7.jpg',
    mutualFollowers: ['aesthetic.vibes'],
    isFollowing: false
  },
  {
    id: '8',
    username: 'wanderlust.soul',
    fullName: 'Wanderlust Soul',
    profilePicture: '/src/assets/user8.jpg',
    mutualFollowers: ['golden.hour'],
    isFollowing: false,
    isVerified: true
  }
];

export const currentUser = {
  id: 'current',
  username: 'sahana_8607',
  fullName: 'Deepa Sahana',
  profilePicture: '/src/assets/flower.jpg.jpg',
  followers: 1456,
  following: 892,
  posts: 67,
  bio: 'Living life one post at a time ✨'
};