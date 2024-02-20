export const dummyPosts = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Category1", "Category2"],
    created_at: "2024-01-27T12:00:00Z",
    comments: 10,
    likes: 20,
    dislikes: 5,
    username: "user1",
    key: 1,
  },
  {
    id: 2,
    title: "Consectetur Adipiscing Elit",
    body: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categories: ["Category3", "Category4"],
    created_at: "2024-01-26T10:30:00Z",
    comments: 15,
    likes: 25,
    dislikes: 8,
    username: "user1",
  },
  {
    id: 3,
    title: "Sed Do Eiusmod Tempor Incididunt",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Category5", "Category6"],
    created_at: "2024-01-25T08:45:00Z",
    comments: 8,
    likes: 18,
    dislikes: 3,
    username: "user1",
  },
  {
    id: 4,
    title: "Ut Enim Ad Minim Veniam",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    categories: ["Category7", "Category8"],
    created_at: "2024-01-24T14:20:00Z",
    comments: 12,
    likes: 22,
    dislikes: 6,
    username: "user1",
  },
  {
    id: 5,
    title: "Quis Nostrud Exercitation Ullamco Laboris",
    body: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    categories: ["Category9", "Category10"],
    created_at: "2024-01-23T16:55:00Z",
    comments: 17,
    likes: 30,
    dislikes: 10,
    username: "user5",
  },
  // Add more dummy posts as needed
];

const events = [
  {
    id: 1,
    title: "Hiking Trip to Mount Everest Base Camp",
    description:
      "Join us for an adventurous trek to the base camp of Mount Everest!",
    dateTime: new Date("2024-01-15T08:00:00"),
    organizer: "user1",
    participants: ["user1", "user2", "user3"],
    options: ["Going", "Not going"],
  },
  {
    id: 2,
    title: "Book Discussion: 'To Kill a Mockingbird'",
    description:
      "Let's delve into the themes and characters of Harper Lee's classic novel.",
    dateTime: new Date("2024-02-01T19:00:00"),
    organizer: "user6",
    participants: ["user2", "user6", "user7"],
    options: ["Going", "Not going"],
  },
];

// Additional dummy data for users
const users = [
  {id: "user1", name: "Alice"},
  {id: "user2", name: "Bob"},
  {id: "user3", name: "Charlie"},
  {id: "user4", name: "David"},
  {id: "user5", name: "Emma"},
  {id: "user6", name: "Frank"},
  {id: "user7", name: "Grace"},
];

export const group = {
  id: 1,
  title: "Outdoor Enthusiasts",
  description:
    "A group for people who love outdoor activities like hiking, camping, and cycling.",
  creator: "user1",
  Members: [...users],
  invitations: [...users],
  Requests: [...users],
  Posts: dummyPosts,
  Events: events,
  NumberOfPosts: 50,
  NumberOfMembers: 5,
  NumberOfEvents: 2,
  NumberOf
};
