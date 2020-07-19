<script>
  import { auth0_store, user_store } from "../stores.js";

  async function login() {
    await $auth0_store.loginWithRedirect({
      redirect_uri: "http://localhost:5000/authcallback"
    });
  }

  async function logout() {
    $auth0_store.logout();
  }
</script>

<button on:click={login}>Login!</button>
<button on:click={logout}>Logout!</button>

{#if $user_store}{JSON.stringify({ $user_store })}{/if}
