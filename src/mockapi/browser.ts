import { setupWorker } from "msw";
import { handlers } from "./handler";

export const worker =
  typeof window !== "undefined"
    ? setupWorker(...handlers)
    : { start: () => {} };
