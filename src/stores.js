import { writable } from "svelte/store";
import createAuth0Client from "@auth0/auth0-spa-js";

export const auth0_store = writable(0);
export const user_store = writable(0);

export async function loadAuth0() {
  auth0_store.set(
    await createAuth0Client({
      // i need a better way to handle this, ill keep looking, tried rollup config and replace plugin in base config
      domain: "#######",
      client_id: "#######",
    })
  );
}
