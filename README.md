# 📝 Collaborative Document Editor

Welcome to the Collaborative Document Editor project! This application is built to showcase my skills in building a modern, real-time collaborative web application. The project leverages cutting-edge technologies and provides a range of features designed to enhance user collaboration and interaction.

## 🚀 Features

### 🔐 Authentication
- **Clerk**: Secure and seamless authentication with user management capabilities.

### ⚡ Real-Time Collaboration
- **Liveblocks**: Real-time synchronization of documents, ensuring that changes are instantly reflected for all collaborators.
- **Authenticate User with Real-time Features**: Secure real-time interactions, ensuring authenticated users can collaborate seamlessly.

### 🗂️ Document Management
- **Collaborative Editor Room**: Work together on documents in real-time, with changes synced across all users.
- **Edit Document Title Feature**: Update document titles in real-time, ensuring all collaborators see the latest changes.
- **List All Documents on HomePage**: Easily access and manage your documents from a centralized homepage.

### ✨ Live Collaboration Features
- **Live Features with Floating Comments**: Add and view comments that float next to the relevant document content.
- **Sticky Comments**: Keep important comments visible and attached to specific parts of the document.
- **User Mention Feature**: Mention other users in comments to get their attention and foster collaboration.

### 🔒 Security
- **Sentry**: Monitor and enhance the security of the application with real-time error tracking and performance monitoring.

### 📤 Sharing and Permissions
- **Share Modal**: Invite others to view or edit your documents with a simple and intuitive sharing interface.
- **User Permissions**: Control who can view or edit documents, ensuring that sensitive information is protected.
- **Delete Modal & Feature**: Safely delete documents with confirmation prompts to prevent accidental loss of data.

### 🔔 Notifications
- **Notifications Feature**: Stay informed about document updates, comments, mentions, and other important activities with real-time notifications.

## 🛠️ Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/) - A powerful React framework for building fast and scalable web applications.
- **Authentication**: [Clerk](https://clerk.dev/) - A user authentication and management solution.
- **Real-Time Features**: [Liveblocks](https://liveblocks.io/) - Real-time collaboration and synchronization.
- **Document Editor**: [JSM-Editor](https://jsm-editor.com/) - A robust and feature-rich document editor.

## ⚙️ Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PedroGonzalezCarretero/realtime-collaboration-docs.git
   cd realtime-collaboration-docs


2. **Install Dependencies**:
   ```bash
   npm install

3. **Set up environment variables**:
Create a .env.local file in the root directory and add the necessary environment variables for Clerk, Liveblocks, and Sentry:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   LIVEBLOCKS_SECRET_KEY=
   
   SENTRY_AUTH_TOKEN=

4. **Run the development server**:
   ```bash
   npm run dev


Open http://localhost:3000 with your browser to see the result.
