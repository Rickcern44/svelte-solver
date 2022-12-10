import { writable, readable } from "svelte/store";

//Sets the default auth status to false
export const isAuthenticated = writable(false);
export const user = writable({})