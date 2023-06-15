import { AppImage, Maybe } from "./api-types"

interface ImagesDto {
  data: AppImage[]
}

const mockResponse: ImagesDto =  {
    data: [
        {
            id: "1",
            title: "Lovely Day",
            description: "A walk in the park",
            thumbnailUrl: "https://fakeql.com/placeholder/100/100/e7d621158ec24ef6dsf3sf43459.png",
            fullImageUrl: "https://fakeql.com/placeholder/1000/800/e7d621158ec24ef6dsf3sf43459.png",
            comments: [
              {
                id: "1",
                comment: "I love this photo!",
                date: "2023-06-15T09:28:16.384Z"
              }
            ]
          },
          {
            id: "2",
            title: "Beautiful Sunset",
            description: "A breathtaking view of the sunset",
            thumbnailUrl: "https://fakeql.com/placeholder/100/100/9e7bcb262e7c89e1.png",
            fullImageUrl: "https://fakeql.com/placeholder/1000/800/9e7bcb262e7c89e1.png",
            comments: [
              {
                id: "2",
                comment: "Amazing colors!",
                date: "2023-06-16T13:45:22.567Z"
              },
              {
                id: "3",
                comment: "Stunning shot!",
                date: "2023-06-17T08:12:35.789Z"
              }
            ]
          },
          {
            id: "3",
            title: "Serene Forest",
            description: "Peaceful ambiance amidst the trees",
            thumbnailUrl: "https://fakeql.com/placeholder/100/100/4b7f9b5a67e0df9.png",
            fullImageUrl: "https://fakeql.com/placeholder/1000/800/4b7f9b5a67e0df9.png",
            comments: []
          },
          {
            id: "4",
            title: "Majestic Mountains",
            description: "A breathtaking view of towering mountains",
            thumbnailUrl: "https://fakeql.com/placeholder/100/100/1f6e4f8b3e90da5f.png",
            fullImageUrl: "https://fakeql.com/placeholder/1000/800/1f6e4f8b3e90da5f.png",
            comments: []
          },
          {
            id: "5",
            title: "Ocean Bliss",
            description: "A peaceful scene by the ocean",
            thumbnailUrl: "https://fakeql.com/placeholder/100/100/7acac79a3b42d1d6.png",
            fullImageUrl: "https://fakeql.com/placeholder/1000/800/7acac79a3b42d1d6.png",
            comments: [
              {
                id: "4",
                comment: "So tranquil!",
                date: "2023-06-18T16:30:45.912Z"
              }
            ]
          },
          {
            id: "6",
            title: "City Lights",
            description: "An enchanting view of a city at night",
            thumbnailUrl: "https://fakeql.com/placeholder/100/100/c726935fc2bb7f6.png",
            fullImageUrl: "https://fakeql.com/placeholder/1000/800/c726935fc2bb7f6.png",
            comments: [
              {
                id: "5",
                comment: "Gorgeous night shot!",
                date: "2023-06-19T11:55:10.621Z"
              },
              {
                id: "6",
                comment: "I miss the city!",
                date: "2023-06-20T09:14:27.415Z"
              }
            ]
          },
      {
        id: "7",
        title: "Lush Greenery",
        description: "A vibrant and lush green landscape",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/62f876a83f21b1b1.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/62f876a83f21b1b1.png",
        comments: []
      },
      {
        id: "8",
        title: "Serenity Lake",
        description: "A calm and peaceful lake surrounded by nature",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/3d097ae04128d7f7.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/3d097ae04128d7f7.png",
        comments: []
      },
      {
        id: "9",
        title: "Autumn Colors",
        description: "A picturesque view of trees in autumn",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/8228b0ec3bce4e65.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/8228b0ec3bce4e65.png",
        comments: [
          {
            id: "7",
            comment: "Fall is my favorite season!",
            date: "2023-06-21T15:27:50.123Z"
          }
        ]
      },
      {
        id: "10",
        title: "Misty Mountains",
        description: "A mystical view of mist-covered mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/11fda7323b55a1b6.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/11fda7323b55a1b6.png",
        comments: [
          {
            id: "8",
            comment: "Magical atmosphere!",
            date: "2023-06-22T10:45:17.876Z"
          },
          {
            id: "9",
            comment: "Nature's beauty at its finest",
            date: "2023-06-23T07:19:59.342Z"
          }
        ]
      },
      {
        id: "11",
        title: "Coastal Sunset",
        description: "A mesmerizing sunset by the coast",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/5e70f218932da9e8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/5e70f218932da9e8.png",
        comments: [
          {
            id: "10",
            comment: "Breathtaking colors!",
            date: "2023-06-24T14:56:38.521Z"
          }
        ]
      },
      {
        id: "12",
        title: "Sunflower Field",
        description: "A field filled with vibrant sunflowers",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/c8e72f29e1501d31.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/c8e72f29e1501d31.png",
        comments: []
      },
      {
        id: "13",
        title: "Snowy Peaks",
        description: "Snow-covered mountains in winter",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/39e1c08481c7b2c2.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/39e1c08481c7b2c2.png",
        comments: [
          {
            id: "11",
            comment: "Winter wonderland!",
            date: "2023-06-25T19:10:45.987Z"
          },
          {
            id: "12",
            comment: "I love skiing in the mountains",
            date: "2023-06-26T12:37:20.231Z"
          }
        ]
      },
      {
        id: "14",
        title: "Sunset Beach",
        description: "A peaceful beach at sunset",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/f253ac3c9edca8d8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/f253ac3c9edca8d8.png",
        comments: []
      },
      {
        id: "15",
        title: "Tropical Paradise",
        description: "A stunning tropical island getaway",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/7c411b40f78f7f0d.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/7c411b40f78f7f0d.png",
        comments: [
          {
            id: "13",
            comment: "I wish I could be there right now!",
            date: "2023-06-27T08:59:59.765Z"
          },
          {
            id: "14",
            comment: "Paradise on Earth",
            date: "2023-06-28T16:23:11.129Z"
          }
        ]
      },
      {
        id: "16",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/993636634d1c86b7.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/993636634d1c86b7.png",
        comments: []
      },
      {
        id: "17",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/fc4ee826b5d9e1b4.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/fc4ee826b5d9e1b4.png",
        comments: [
          {
            id: "15",
            comment: "Nature's power in action!",
            date: "2023-06-29T13:42:57.235Z"
          },
          {
            id: "16",
            comment: "I could sit here all day",
            date: "2023-06-30T10:16:34.782Z"
          }
        ]
      },
      {
        id: "18",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/3b2f7cb7cc8d4dc6.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/3b2f7cb7cc8d4dc6.png",
        comments: []
      },
      {
        id: "19",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/2d144b5c32d8b78e.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/2d144b5c32d8b78e.png",
        comments: [
          {
            id: "17",
            comment: "Nature's beauty is in the details",
            date: "2023-07-01T08:30:12.543Z"
          }
        ]
      },
      {
        id: "20",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/5da6e52b1cddc8fd.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/5da6e52b1cddc8fd.png",
        comments: [
          {
            id: "18",
            comment: "Perfect spot for fishing",
            date: "2023-07-02T15:11:30.952Z"
          }
        ]
      },
      {
        id: "21",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/ab1d4b23a1c88e96.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/ab1d4b23a1c88e96.png",
        comments: []
      },
      {
        id: "22",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/0f2861b4bdfb9dd4.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/0f2861b4bdfb9dd4.png",
        comments: []
      },
      {
        id: "23",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/b17c240014a43dfb.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/b17c240014a43dfb.png",
        comments: [
          {
            id: "19",
            comment: "I love snorkeling here!",
            date: "2023-07-03T12:45:19.871Z"
          },
          {
            id: "20",
            comment: "So many beautiful fish",
            date: "2023-07-04T09:17:42.312Z"
          },
          {
            id: "21",
            comment: "Underwater paradise",
            date: "2023-07-05T17:39:55.753Z"
          }
        ]
      },
      {
        id: "24",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/605fe9b5b7db22de.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/605fe9b5b7db22de.png",
        comments: []
      },
      {
        id: "25",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/980e1225e5f911a7.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/980e1225e5f911a7.png",
        comments: [
          {
            id: "22",
            comment: "Perfect for a peaceful walk",
            date: "2023-07-06T14:22:17.651Z"
          },
          {
            id: "23",
            comment: "Harvest time!",
            date: "2023-07-07T11:06:35.892Z"
          }
        ]
      },
      {
        id: "26",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/0e82498f6c45d6f7.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/0e82498f6c45d6f7.png",
        comments: [
          {
            id: "24",
            comment: "So romantic!",
            date: "2023-07-08T19:57:46.278Z"
          }
        ]
      },
      {
        id: "27",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/20a970f81a8cb6a3.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/20a970f81a8cb6a3.png",
        comments: [
          {
            id: "25",
            comment: "Nature's power in action!",
            date: "2023-07-09T16:32:52.731Z"
          },
          {
            id: "26",
            comment: "I could sit here all day",
            date: "2023-07-10T13:14:24.993Z"
          }
        ]
      },
      {
        id: "28",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/c6e138b9d102ea79.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/c6e138b9d102ea79.png",
        comments: []
      },
      {
        id: "29",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/1c5d98e3dbf48a9c.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/1c5d98e3dbf48a9c.png",
        comments: []
      },
      {
        id: "30",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/8af39379a60e76ea.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/8af39379a60e76ea.png",
        comments: [
          {
            id: "27",
            comment: "Nature's beauty is in the details",
            date: "2023-07-11T10:53:29.451Z"
          }
        ]
      },
      {
        id: "31",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/5d5b9e0e3e3ce0f3.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/5d5b9e0e3e3ce0f3.png",
        comments: [
          {
            id: "28",
            comment: "Perfect spot for fishing",
            date: "2023-07-12T07:32:18.532Z"
          }
        ]
      },
      {
        id: "32",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/3c5b3a83e8d972e5.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/3c5b3a83e8d972e5.png",
        comments: []
      },
      {
        id: "33",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/39e12e4372ce2284.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/39e12e4372ce2284.png",
        comments: []
      },
      {
        id: "34",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/72655c9db0f87b3e.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/72655c9db0f87b3e.png",
        comments: [
          {
            id: "29",
            comment: "I love snorkeling here!",
            date: "2023-07-13T04:21:55.921Z"
          },
          {
            id: "30",
            comment: "So many beautiful fish",
            date: "2023-07-14T01:08:01.267Z"
          },
          {
            id: "31",
            comment: "Underwater paradise",
            date: "2023-07-15T18:37:22.509Z"
          }
        ]
      },
      {
        id: "35",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/10bfb13d8c43dd9b.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/10bfb13d8c43dd9b.png",
        comments: []
      },
      {
        id: "36",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/81c8015db4e4a13b.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/81c8015db4e4a13b.png",
        comments: [
          {
            id: "32",
            comment: "Perfect for a peaceful walk",
            date: "2023-07-16T15:15:45.729Z"
          },
          {
            id: "33",
            comment: "Harvest time!",
            date: "2023-07-17T12:02:19.853Z"
          }
        ]
      },
      {
        id: "37",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/81d05710c31d10fd.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/81d05710c31d10fd.png",
        comments: [
          {
            id: "34",
            comment: "So romantic!",
            date: "2023-07-18T08:49:35.992Z"
          }
        ]
      },
      {
        id: "38",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/71f2f2894f7d09de.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/71f2f2894f7d09de.png",
        comments: [
          {
            id: "35",
            comment: "Nature's power in action!",
            date: "2023-07-19T05:37:57.234Z"
          },
          {
            id: "36",
            comment: "I could sit here all day",
            date: "2023-07-20T02:24:40.366Z"
          }
        ]
      },
      {
        id: "39",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/5e8b44762c8d02f7.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/5e8b44762c8d02f7.png",
        comments: []
      },
      {
        id: "40",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/af3a0f3d18d594d9.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/af3a0f3d18d594d9.png",
        comments: []
      },
      {
        id: "41",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/b41fd3e994c7f95b.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/b41fd3e994c7f95b.png",
        comments: [
          {
            id: "37",
            comment: "Nature's beauty is in the details",
            date: "2023-07-21T23:11:28.475Z"
          }
        ]
      },
      {
        id: "42",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/c29a07cc8f773455.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/c29a07cc8f773455.png",
        comments: [
          {
            id: "38",
            comment: "Perfect spot for fishing",
            date: "2023-07-22T20:02:46.781Z"
          }
        ]
      },
      {
        id: "43",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/82e619e3a6764a79.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/82e619e3a6764a79.png",
        comments: []
      },
      {
        id: "44",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/1158bb58265484c8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/1158bb58265484c8.png",
        comments: []
      },
      {
        id: "45",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/2991e5c596e968e9.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/2991e5c596e968e9.png",
        comments: [
          {
            id: "39",
            comment: "I love snorkeling here!",
            date: "2023-07-23T16:54:57.561Z"
          },
          {
            id: "40",
            comment: "So many beautiful fish",
            date: "2023-07-24T13:43:16.859Z"
          },
          {
            id: "41",
            comment: "Underwater paradise",
            date: "2023-07-25T10:32:27.154Z"
          }
        ]
      },
      {
        id: "46",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/4f4a8609df899a94.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/4f4a8609df899a94.png",
        comments: []
      },
      {
        id: "47",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/8a2140c0ac1e2e30.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/8a2140c0ac1e2e30.png",
        comments: [
          {
            id: "42",
            comment: "Perfect for a peaceful walk",
            date: "2023-07-26T07:23:58.235Z"
          },
          {
            id: "43",
            comment: "Harvest time!",
            date: "2023-07-27T04:16:46.397Z"
          }
        ]
      },
      {
        id: "48",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/7230edf10dc5adcd.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/7230edf10dc5adcd.png",
        comments: [
          {
            id: "44",
            comment: "So romantic!",
            date: "2023-07-28T01:11:37.654Z"
          }
        ]
      },
      {
        id: "49",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/83e3b1743c6ac3e9.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/83e3b1743c6ac3e9.png",
        comments: [
          {
            id: "45",
            comment: "Nature's power in action!",
            date: "2023-07-29T22:07:09.781Z"
          },
          {
            id: "46",
            comment: "I could sit here all day",
            date: "2023-07-30T19:05:30.892Z"
          }
        ]
      },
      {
        id: "50",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/ae4c52699ffbd789.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/ae4c52699ffbd789.png",
        comments: []
      },
      {
        id: "51",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/98c954df588ec059.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/98c954df588ec059.png",
        comments: []
      },
      {
        id: "52",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/f5e2f75e0b61951e.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/f5e2f75e0b61951e.png",
        comments: [
          {
            id: "47",
            comment: "Nature's beauty is in the details",
            date: "2023-07-31T16:04:55.901Z"
          }
        ]
      },
      {
        id: "53",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/b49e63b1a47bc80e.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/b49e63b1a47bc80e.png",
        comments: [
          {
            id: "48",
            comment: "Perfect spot for fishing",
            date: "2023-08-01T12:01:44.022Z"
          }
        ]
      },
      {
        id: "54",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/c2d61de2c3311539.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/c2d61de2c3311539.png",
        comments: []
      },
      {
        id: "55",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/32b5d670f41edaca.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/32b5d670f41edaca.png",
        comments: []
      },
      {
        id: "56",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/68c4283f8011702d.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/68c4283f8011702d.png",
        comments: [
          {
            id: "49",
            comment: "I love snorkeling here!",
            date: "2023-08-02T07:58:36.152Z"
          },
          {
            id: "50",
            comment: "So many beautiful fish",
            date: "2023-08-03T04:57:02.733Z"
          },
          {
            id: "51",
            comment: "Underwater paradise",
            date: "2023-08-04T01:56:19.336Z"
          }
        ]
      },
      {
        id: "57",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/cd9e1d6dbb53a485.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/cd9e1d6dbb53a485.png",
        comments: []
      },
      {
        id: "58",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/33b0e5de8b4fd4c3.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/33b0e5de8b4fd4c3.png",
        comments: [
          {
            id: "52",
            comment: "Perfect for a peaceful walk",
            date: "2023-08-04T22:55:42.816Z"
          },
          {
            id: "53",
            comment: "Harvest time!",
            date: "2023-08-05T19:55:25.522Z"
          }
        ]
      },
      {
        id: "59",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/f201f7cc80b988c8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/f201f7cc80b988c8.png",
        comments: [
          {
            id: "54",
            comment: "So romantic!",
            date: "2023-08-06T16:55:19.938Z"
          }
        ]
      },
      {
        id: "60",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/90f14dc3693e9e72.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/90f14dc3693e9e72.png",
        comments: [
          {
            id: "55",
            comment: "Nature's power in action!",
            date: "2023-08-07T13:55:14.346Z"
          },
          {
            id: "56",
            comment: "I could sit here all day",
            date: "2023-08-08T10:55:08.659Z"
          }
        ]
      },
      {
        id: "61",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/911c4414c850e9f5.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/911c4414c850e9f5.png",
        comments: []
      },
      {
        id: "62",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/8f7071e2da7a5c3c.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/8f7071e2da7a5c3c.png",
        comments: []
      },
      {
        id: "63",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/df3e4df21a1a69a6.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/df3e4df21a1a69a6.png",
        comments: [
          {
            id: "57",
            comment: "Nature's beauty is in the details",
            date: "2023-08-09T07:55:01.179Z"
          }
        ]
      },
      {
        id: "64",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/70b4fcab207e68bb.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/70b4fcab207e68bb.png",
        comments: [
          {
            id: "58",
            comment: "Perfect spot for fishing",
            date: "2023-08-10T04:54:51.612Z"
          }
        ]
      },
      {
        id: "65",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/33b25047ab6c3b0e.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/33b25047ab6c3b0e.png",
        comments: []
      },
      {
        id: "66",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/df1fd7281e4801d2.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/df1fd7281e4801d2.png",
        comments: []
      },
      {
        id: "67",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/14e57d8b9ef39dc8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/14e57d8b9ef39dc8.png",
        comments: [
          {
            id: "59",
            comment: "I love snorkeling here!",
            date: "2023-08-11T01:54:41.318Z"
          },
          {
            id: "60",
            comment: "So many beautiful fish",
            date: "2023-08-11T22:54:23.187Z"
          },
          {
            id: "61",
            comment: "Underwater paradise",
            date: "2023-08-12T19:54:05.930Z"
          }
        ]
      },
      {
        id: "68",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/979bfe4d2818d1b3.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/979bfe4d2818d1b3.png",
        comments: []
      },
      {
        id: "69",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/ee89842a0e3b07f3.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/ee89842a0e3b07f3.png",
        comments: [
          {
            id: "62",
            comment: "Perfect for a peaceful walk",
            date: "2023-08-13T16:53:45.715Z"
          },
          {
            id: "63",
            comment: "Harvest time!",
            date: "2023-08-14T13:53:27.679Z"
          }
        ]
      },
      {
        id: "70",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/75426a907bd59fe8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/75426a907bd59fe8.png",
        comments: [
          {
            id: "64",
            comment: "So romantic!",
            date: "2023-08-15T10:53:09.903Z"
          }
        ]
      },
      {
        id: "71",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/1077c7172ea8a968.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/1077c7172ea8a968.png",
        comments: [
          {
            id: "65",
            comment: "Nature's power in action!",
            date: "2023-08-16T07:52:52.183Z"
          },
          {
            id: "66",
            comment: "I could sit here all day",
            date: "2023-08-17T04:52:34.289Z"
          }
        ]
      },
      {
        id: "72",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/a39e1b53e69d780b.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/a39e1b53e69d780b.png",
        comments: []
      },
      {
        id: "73",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/6d16f43d8b409603.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/6d16f43d8b409603.png",
        comments: []
      },
      {
        id: "74",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/19e9060c71b9e5d2.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/19e9060c71b9e5d2.png",
        comments: [
          {
            id: "67",
            comment: "Nature's beauty is in the details",
            date: "2023-08-18T01:52:14.983Z"
          }
        ]
      },
      {
        id: "75",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/8d01c20aa9d4c91d.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/8d01c20aa9d4c91d.png",
        comments: [
          {
            id: "68",
            comment: "Perfect spot for fishing",
            date: "2023-08-18T22:52:00.447Z"
          }
        ]
      },
      {
        id: "76",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/17fe5433e6f32e6f.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/17fe5433e6f32e6f.png",
        comments: []
      },
      {
        id: "77",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/d82e5ee85f0f4f8f.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/d82e5ee85f0f4f8f.png",
        comments: []
      },
      {
        id: "78",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/edda9825c7d34b4e.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/edda9825c7d34b4e.png",
        comments: [
          {
            id: "69",
            comment: "I love snorkeling here!",
            date: "2023-08-19T19:51:32.906Z"
          },
          {
            id: "70",
            comment: "So many beautiful fish",
            date: "2023-08-20T16:51:20.587Z"
          },
          {
            id: "71",
            comment: "Underwater paradise",
            date: "2023-08-21T13:51:07.342Z"
          }
        ]
      },
      {
        id: "79",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/45e2ed2e9f24ff48.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/45e2ed2e9f24ff48.png",
        comments: []
      },
      {
        id: "80",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/acf9ef72e2d42285.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/acf9ef72e2d42285.png",
        comments: [
          {
            id: "72",
            comment: "Perfect for a peaceful walk",
            date: "2023-08-22T10:50:45.098Z"
          },
          {
            id: "73",
            comment: "Harvest time!",
            date: "2023-08-23T07:50:32.628Z"
          }
        ]
      },
      {
        id: "81",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/5ff50d09fe22a800.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/5ff50d09fe22a800.png",
        comments: [
          {
            id: "74",
            comment: "So romantic!",
            date: "2023-08-24T04:50:20.080Z"
          }
        ]
      },
      {
        id: "82",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/6c6377ae04ad791b.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/6c6377ae04ad791b.png",
        comments: [
          {
            id: "75",
            comment: "Nature's power in action!",
            date: "2023-08-25T01:50:07.491Z"
          },
          {
            id: "76",
            comment: "I could sit here all day",
            date: "2023-08-25T22:49:55.076Z"
          }
        ]
      },
      {
        id: "83",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/2d255ff2cdd40ab8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/2d255ff2cdd40ab8.png",
        comments: []
      },
      {
        id: "84",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/fe1b78e75b4b4028.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/fe1b78e75b4b4028.png",
        comments: []
      },
      {
        id: "85",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/f3de621cc4b51b6d.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/f3de621cc4b51b6d.png",
        comments: [
          {
            id: "77",
            comment: "Nature's beauty is in the details",
            date: "2023-08-26T19:49:42.175Z"
          }
        ]
      },
      {
        id: "86",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/43a7e8e3f07c4b68.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/43a7e8e3f07c4b68.png",
        comments: [
          {
            id: "78",
            comment: "Perfect spot for fishing",
            date: "2023-08-27T16:49:29.482Z"
          }
        ]
      },
      {
        id: "87",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/51a91c6ac13e1121.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/51a91c6ac13e1121.png",
        comments: []
      },
      {
        id: "88",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/11b3968dbb2a9e15.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/11b3968dbb2a9e15.png",
        comments: []
      },
      {
        id: "89",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/4f7922a7e37af491.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/4f7922a7e37af491.png",
        comments: [
          {
            id: "79",
            comment: "I love snorkeling here!",
            date: "2023-08-28T13:49:16.628Z"
          },
          {
            id: "80",
            comment: "So many beautiful fish",
            date: "2023-08-29T10:49:05.130Z"
          },
          {
            id: "81",
            comment: "Underwater paradise",
            date: "2023-08-30T07:48:53.665Z"
          }
        ]
      },
      {
        id: "90",
        title: "Majestic Castle",
        description: "A majestic castle nestled in the mountains",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/9464bcb3d381cd17.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/9464bcb3d381cd17.png",
        comments: []
      },
      {
        id: "91",
        title: "Golden Fields",
        description: "Fields of golden wheat stretching to the horizon",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/4d8a7644d1903af8.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/4d8a7644d1903af8.png",
        comments: [
          {
            id: "82",
            comment: "Perfect for a peaceful walk",
            date: "2023-08-31T04:48:42.091Z"
          },
          {
            id: "83",
            comment: "Harvest time!",
            date: "2023-09-01T01:48:31.427Z"
          }
        ]
      },
      {
        id: "92",
        title: "Moonlit Ocean",
        description: "The moon casting its gentle light over the ocean",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/ed0a4b4a6d3ea1f9.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/ed0a4b4a6d3ea1f9.png",
        comments: [
          {
            id: "84",
            comment: "So romantic!",
            date: "2023-09-01T22:48:21.164Z"
          }
        ]
      },
      {
        id: "93",
        title: "Majestic Waterfall",
        description: "A majestic waterfall surrounded by lush greenery",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/67c82c1e8efdf354.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/67c82c1e8efdf354.png",
        comments: [
          {
            id: "85",
            comment: "Nature's power in action!",
            date: "2023-09-02T19:48:10.572Z"
          },
          {
            id: "86",
            comment: "I could sit here all day",
            date: "2023-09-03T16:48:01.003Z"
          }
        ]
      },
      {
        id: "94",
        title: "Enchanted Forest",
        description: "A magical forest with rays of sunlight",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/9a3f9bde2d478208.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/9a3f9bde2d478208.png",
        comments: []
      },
      {
        id: "95",
        title: "City Lights",
        description: "A stunning view of a city skyline at night",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/54d99a7c3a8e8297.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/54d99a7c3a8e8297.png",
        comments: []
      },
      {
        id: "96",
        title: "Morning Dew",
        description: "A close-up of dewdrops on a leaf",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/4588e59fbc0ea6f3.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/4588e59fbc0ea6f3.png",
        comments: [
          {
            id: "87",
            comment: "Nature's beauty is in the details",
            date: "2023-09-04T13:47:51.614Z"
          }
        ]
      },
      {
        id: "97",
        title: "Peaceful River",
        description: "A tranquil river flowing through a forest",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/64a829b95f7d10e1.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/64a829b95f7d10e1.png",
        comments: [
          {
            id: "88",
            comment: "Perfect spot for fishing",
            date: "2023-09-05T10:47:42.020Z"
          }
        ]
      },
      {
        id: "98",
        title: "Aurora Borealis",
        description: "The mesmerizing Northern Lights in the night sky",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/6d6498c4e9983998.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/6d6498c4e9983998.png",
        comments: []
      },
      {
        id: "99",
        title: "Desert Mirage",
        description: "A surreal mirage in the desert",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/4a526b2775c6e864.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/4a526b2775c6e864.png",
        comments: []
      },
      {
        id: "100",
        title: "Vibrant Coral Reef",
        description: "A vibrant and diverse coral reef underwater",
        thumbnailUrl: "https://fakeql.com/placeholder/100/100/f0df995e0373d0b9.png",
        fullImageUrl: "https://fakeql.com/placeholder/1000/800/f0df995e0373d0b9.png",
        comments: [
          {
            id: "89",
            comment: "I love snorkeling here!",
            date: "2023-09-06T07:47:32.415Z"
          },
          {
            id: "90",
            comment: "So many beautiful fish",
            date: "2023-09-07T04:47:24.020Z"
          },
          {
            id: "91",
            comment: "Underwater paradise",
            date: "2023-09-08T01:47:15.725Z"
          }
        ]
      }
    ]
  }
  

  export default mockResponse;