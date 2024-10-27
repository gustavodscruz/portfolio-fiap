import { Account, Client, Databases } from "appwrite";

export const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("671e7c2a00080871ec57");

export const account = new Account(client);
export const databases = new Databases(client);

