#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import git from "simple-git";
import chalk from "chalk";
import fs from "fs";
import path from "path";

// GitHub repo URL (replace with your actual repo)
const REPO_URL = "https://github.com/sakshxm08/nextjs-auth-template.git";

// Function to create a new project
async function createProject() {
  // Ask for project name
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter your project name:",
      validate: (input) => (input ? true : "Project name cannot be empty!"),
    },
  ]);

  // Define the project path
  const projectPath = path.join(process.cwd(), projectName);

  // Check if the directory already exists
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red("❌ A folder with this name already exists!"));
    process.exit(1);
  }

  console.log(chalk.green("\n🚀 Cloning the NextJS Auth Template...\n"));

  try {
    // Clone the repository into the specified path
    await git().clone(REPO_URL, projectPath);
    console.log(chalk.green("\n✅ Repository cloned successfully!"));

    // Remove the .git folder to avoid conflicts
    fs.rmSync(path.join(projectPath, ".git"), { recursive: true, force: true });

    // Create the .env.local file
    const envContent = `
# MongoDB URI for database connection
MONGODB_URI=

# Resend API Key for sending emails
RESEND_API_KEY=

# Base URL for the app (make sure to update this!)
NEXT_PUBLIC_APP_URL=

# Secret for signing JWT tokens - Generate using 'npx auth secret'
AUTH_SECRET=

# GitHub OAuth credentials
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

# Google OAuth credentials
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
    `;

    // Write the .env.local file in the project folder
    fs.writeFileSync(
      path.join(projectPath, ".env.local"),
      envContent.trim(),
      "utf-8"
    );
    console.log(chalk.green("\n✅ .env.local file created successfully!"));

    console.log(chalk.green("\n✅ Project setup complete!"));

    console.log(chalk.green("\n✅ Project setup complete!"));
    console.log(chalk.blue("\n👉 cd " + projectName));
    console.log(chalk.blue("👉 npm install"));
    console.log(chalk.blue("👉 npm run dev"));
    console.log(
      chalk.green(
        "\n🔧 For making the code your own and understanding how it works, please read the README.md file inside the project."
      )
    );
  } catch (error) {
    console.log(
      chalk.red("❌ An error occurred while setting up the project:")
    );
    console.error(error);
    process.exit(1);
  }
}

// Setup CLI program
program
  .version("1.0.0")
  .description(
    "NextJS Auth Template CLI - Bootstrap your Next.js projects with authentication, state management, and database integration"
  );

// Command to initialize a new project
program
  .command("init")
  .description(
    "Create a new Next.js project with pre-configured authentication, Redux, and MongoDB"
  )
  .action(createProject);

// Error handling for invalid commands
program.on("command:*", function () {
  console.log(
    chalk.red(
      "\n❌ Invalid command! Please use 'nextjs-auth init' to initialize a new project."
    )
  );
  process.exit(1);
});

program.parse(process.argv);
