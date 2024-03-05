# Discord Clone README

Welcome to the repository for our end-to-end, full-stack, real-time Discord clone. This project is designed to replicate the core features of Discord, allowing for real-time messaging, voice and video calls, server and channel management, and much more, all within a beautifully designed UI that's fully responsive and supports both light and dark modes.

## Key Features

- **Real-Time Messaging:** Utilize Socket.io for seamless real-time messaging across users.
- **Attachments:** Send attachments in messages with the integration of UploadThing.
- **Message Management:** Real-time capabilities for editing and deleting messages for all users.
- **Channel Creation:** Support for creating text, audio, and video call channels.
- **Direct Conversations:** Enable 1:1 conversations and video calls between members.
- **Member Management:** Administer member roles (Guest, Moderator), including kicking and role changes.
- **Invite System:** Generate unique invite links with a fully operational invite system.
- **Infinite Loading:** Implement @tanstack/query for loading messages in batches of 10 for efficient data fetching.
- **Server Customization:** Features for server creation and customization.
- **UI/UX:** Beautiful User Interface using TailwindCSS and ShadcnUI for a modern look and feel.
- **Responsive Design:** Ensure full responsiveness and a mobile-friendly user interface.
- **Themes:** Light and Dark mode support for user preference.
- **Websocket Fallback:** Polling with alerts in environments where websockets are not supported.
- **Database:** Leverage Prisma ORM with a MySQL database hosted on Planetscale for robust data management.
- **Authentication:** Secure authentication mechanism using Clerk.

## Technologies

- **Frontend:** TailwindCSS, ShadcnUI for styling; Socket.io for websockets.
- **Backend:** Node.js, Express for server-side logic; Socket.io for real-time communication.
- **Database:** Prisma ORM with MySQL (Planetscale).
- **Authentication:** Clerk for secure authentication flows.
- **Other Tools:** Git & GitHub for version control and collaboration, UploadThing for file uploads.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- A Planetscale account for the MySQL database.
- An account with Clerk for authentication.

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/ahmad2shadab/next13-discord-app.git
cd next13-discord-app
```

1. **Install dependencies:**

```bash
npm install
```

1. **Set up environment variables:**

- Copy the .env.example file to a new file named .env and fill in your details for the database, authentication, and any other services.

1. **Run migrations:**

```bash
npx prisma migrate dev

```

1. **Start the development server:**

```bash
npm run dev

```

Your server should now be running on `http://localhost:3000`.

# Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to submit pull requests to the project.

# License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

# Acknowledgements

- [Socket.io](https://socket.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Planetscale](https://planetscale.com/)
- [Clerk](https://clerk.dev/)
- [UploadThing](https://uploadthing.com/)
- [ShadcnUI](https://ui.shadcn.com/)

---

Thank you for checking out our project! If you have any questions or suggestions, feel free to open an issue or submit a pull request.