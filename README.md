# NextJS Auth Template

A simple CLI tool to bootstrap Next.js projects with authentication, state management, and database integration. This tool automates the process of setting up your project with a predefined structure, so you can start coding immediately.

## Features

- 🚀 **Quick Project Initialization** – Creates a new Next.js project with authentication pre-configured.
- 🔐 **Built-in Authentication** – Supports Credentials, Google, and GitHub login via AuthJS.
- 🏗 **Pre-configured Redux and MongoDB** – Comes with Redux for state management and MongoDB for storage.
- 🎨 **Styled with TailwindCSS & Shadcn** – Modern UI components and styling included.
- ⚙️ **Configurable Setup** – Easily extend or modify the project structure.

## Usage

### Create a New Project

To generate a new project, run:

```sh
npx nextjs-auth-sakshxm08 init
```

The CLI will prompt you to enter a **project name**. Once entered, it will:

1. Clone the `nextjs-auth-template` repository.
2. Remove the `.git` history to avoid conflicts.
3. Install dependencies.

### Manual Setup

After running the CLI, navigate to your new project folder:

```sh
cd <your-project-name>
npm install
```

To start the development server:

```sh
npm run dev
```

## Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```env
MONGODB_URI=
RESEND_API_KEY=
NEXT_PUBLIC_APP_URL=
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```

Update these values with your actual credentials.

## Authentication Methods

### Email/Password

- Uses **AuthJS** for authentication.
- Supports email verification and password reset.

### Social Login

- **GitHub** OAuth: Callback URL - `{NEXT_PUBLIC_APP_URL}/api/auth/callback/github`
- **Google** OAuth: Redirect URI - `{NEXT_PUBLIC_APP_URL}/api/auth/callback/google`

## Development

To run the project in development mode:

```sh
npm run dev
```

## Support

For issues or feature requests, please visit the [GitHub Repository](https://github.com/sakshxm08/nextjs-auth-template).

## License

MIT License
