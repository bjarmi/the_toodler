export const data = {
  boards: [
    {
      id: 1,
      name: "Trip to the Netherlands!",
      thumbnailPhoto: "poo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris leo, sodales eget porta eget, ornare et nulla. Vivamus ultricies.",
    },
    {
      id: 2,
      name: "Boring stuff",
      thumbnailPhoto: "heart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris leo, sodales eget porta eget, ornare et nulla. Vivamus ultricies.",
    },
    {
      id: 3,
      name: "Bucket list",
      thumbnailPhoto: "cartShopping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris leo, sodales eget porta eget, ornare et nulla. Vivamus ultricies.",
    },
  ],
  lists: [
    {
      id: 1,
      name: "Must see!",
      color: "#ffffff",
      boardId: 1,
    },
    {
      id: 2,
      name: "One-day trips!",
      color: "#00ff00",
      boardId: 1,
    },
    {
      id: 3,
      name: "Backlog",
      color: "#dddddd",
      boardId: 2,
    },
    {
      id: 4,
      name: "In progress",
      color: "#cccccc",
      boardId: 2,
    },
    {
      id: 5,
      name: "Done",
      color: "#555555",
      boardId: 2,
    },
    {
      id: 6,
      name: "Top 10",
      color: "#ff0000",
      boardId: 3,
    },
    {
      id: 7,
      name: "Top 10-20",
      color: "#0000ff",
      boardId: 3,
    },
    {
      id: 8,
      name: "Last",
      color: "#ff00ff",
      boardId: 3,
    },
  ],
  tasks: [
    {
      id: 1,
      name: "Van Gogh Museum",
      description: "Take a walk in the musem of Van Gogh!",
      isFinished: false,
      listId: 1,
    },
    {
      id: 2,
      name: "Sunflower fields",
      description: "Want to see the sunflower fields in the Netherlands!",
      isFinished: true,
      listId: 1,
    },
    {
      id: 3,
      name: "Rotterdam port",
      description: "See the biggest shipping port in Europe!",
      isFinished: false,
      listId: 2,
    },
    {
      id: 4,
      name: "Helicopter ride over Amsterdam",
      description:
        "A breath-taking view over the infamous Amsterdam city in a helicopter",
      isFinished: true,
      listId: 2,
    },
    {
      id: 5,
      name: "Take out trash",
      description: "Gotta take out the trash...",
      isFinished: false,
      listId: 3,
    },
    {
      id: 6,
      name: "Do laundry",
      description: "Wash those whites!",
      isFinished: false,
      listId: 3,
    },
    {
      id: 7,
      name: "Do homework",
      description: "This math doesn't calculate itself!",
      isFinished: false,
      listId: 4,
    },
    {
      id: 8,
      name: "Haircut",
      description: "This hair doesn't cut itself!",
      isFinished: false,
      listId: 4,
    },
    {
      id: 9,
      name: "Clean toilet",
      description: "Mom says you need to clean the toilet!",
      isFinished: true,
      listId: 5,
    },
    {
      id: 10,
      name: "Vacuum the living room",
      description: "The living room is a mess!",
      isFinished: true,
      listId: 5,
    },
    {
      id: 11,
      name: "Trip to the Moon",
      description: "I have always wanted to go to the Moon!",
      isFinished: false,
      listId: 6,
    },
    {
      id: 12,
      name: "Scuba diving in the Caribbean",
      description: "Hire an instructor to learn how to dive!",
      isFinished: true,
      listId: 6,
    },
    {
      id: 13,
      name: "Buy a puppy!",
      description: "I have always wanted an English bulldog!",
      isFinished: false,
      listId: 7,
    },
    {
      id: 14,
      name: "Trip to Japan",
      description: "A picture wearing a samurai costume!",
      isFinished: true,
      listId: 7,
    },
    {
      id: 15,
      name: "Buy tickets for an NBA game",
      description: "Let's go Lakers!",
      isFinished: false,
      listId: 8,
    },
    {
      id: 16,
      name: "Road trip to USA",
      description: "From east coast to west coast!",
      isFinished: true,
      listId: 8,
    },
  ],
};
