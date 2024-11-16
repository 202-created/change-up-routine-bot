import { createGithubIssue } from "./modules/github.js";
import { buildMessage } from "./modules/message.js";

const run = async () => {
  const notificationMessage = buildMessage();

  console.log(notificationMessage);

  createGithubIssue(notificationMessage);
};

run();
