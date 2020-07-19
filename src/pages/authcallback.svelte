<script>
  import { goto } from "@sveltech/routify";
  import { auth0_store, user_store } from "../stores.js";

  async function handlecallback() {
    await $auth0_store.handleRedirectCallback();
    const user = await $auth0_store.getUser();
    const accessToken = await $auth0_store.getTokenSilently();
    user_store.set({
      user: user,
      accessToken: accessToken
    });
    $goto("/");
  }

  handlecallback();
</script>
