import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2cwb2bh0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
