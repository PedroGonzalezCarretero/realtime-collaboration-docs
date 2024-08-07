📝 Collaborative Document Editor

Welcome to the Collaborative Document Editor project! This application is built to showcase my skills in building a modern, real-time collaborative web application. The project leverages cutting-edge technologies and provides a range of features designed to enhance user collaboration and interaction.
🚀 Features
🔐 Authentication

    Clerk: Secure and seamless authentication with user management capabilities.

⚡ Real-Time Collaboration

    Liveblocks: Real-time synchronization of documents, ensuring that changes are instantly reflected for all collaborators.
    Authenticate User with Real-time Features: Secure real-time interactions, ensuring authenticated users can collaborate seamlessly.

🗂️ Document Management

    Collaborative Editor Room: Work together on documents in real-time, with changes synced across all users.
    Edit Document Title Feature: Update document titles in real-time, ensuring all collaborators see the latest changes.
    List All Documents on HomePage: Easily access and manage your documents from a centralized homepage.

✨ Live Collaboration Features

    Live Features with Floating Comments: Add and view comments that float next to the relevant document content.
    Sticky Comments: Keep important comments visible and attached to specific parts of the document.
    User Mention Feature: Mention other users in comments to get their attention and foster collaboration.

🔒 Security

    Sentry: Monitor and enhance the security of the application with real-time error tracking and performance monitoring.

📤 Sharing and Permissions

    Share Modal: Invite others to view or edit your documents with a simple and intuitive sharing interface.
    User Permissions: Control who can view or edit documents, ensuring that sensitive information is protected.
    Delete Modal & Feature: Safely delete documents with confirmation prompts to prevent accidental loss of data.

🔔 Notifications

    Notifications Feature: Stay informed about document updates, comments, mentions, and other important activities with real-time notifications.

🛠️ Tech Stack

    Frontend: Next.js - A powerful React framework for building fast and scalable web applications.
    Authentication: Clerk - A user authentication and management solution.
    Real-Time Features: Liveblocks - Real-time collaboration and synchronization.
    Document Editor: JSM-Editor - A robust and feature-rich document editor.

⚙️ Installation

To get started with the project, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/your-username/collaborative-document-editor.git
cd collaborative-document-editor

Install dependencies:

bash

pnpm install

Set up environment variables:
Create a .env.local file in the root directory and add the necessary environment variables for Clerk, Liveblocks, and Sentry.

bash

NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
NEXT_PUBLIC_CLERK_API_KEY=<your-clerk-api-key>
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<your-liveblocks-public-key>
NEXT_PUBLIC_SENTRY_DSN=<your-sentry-dsn>

Run the development server:

bash

    pnpm run dev

    Open http://localhost:3000 with your browser to see the result.

📚 Usage
🔑 Authentication

    Sign Up / Sign In: Use Clerk's secure authentication flow to create an account or log in.

📄 Document Management

    Create a Document: Start a new document from the homepage.
    Edit Document: Collaborate in real-time with other users in the editor room.
    Manage Documents: View all your documents on the homepage and access editing or sharing options.

⚡ Real-Time Collaboration

    Comments and Mentions: Add floating comments and mention users to enhance collaboration.
    Sharing and Permissions: Use the share modal to invite collaborators and set permissions.

🔔 Notifications

    Stay Updated: Receive real-time notifications for document changes, comments, and mentions.

🤝 Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.
