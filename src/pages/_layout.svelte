<script>
  import { loadAuth0 } from "../stores";
</script>

<!-- Wait with rendering the app till the user/guest is verified.
This prevents small UI glitches and premature authorization checks. -->
{#await loadAuth0()}
  <p>loading</p>
{:then}
  <slot />
{/await}
