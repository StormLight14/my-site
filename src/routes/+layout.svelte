<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
    import { enhance } from '$app/forms';

    import '../app.scss';
    import 'open-props/style';
    import 'open-props/normalize';
    import 'open-props/buttons';
</script>

<svelte:head>
    <title>stormyyy's site</title>
</svelte:head>

<div class="container">
    <Navbar/>
    <div>
        <slot/>
        <Footer/>
    </div>
    <button class="theme-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    </button>
</div>

<style>
    .theme-toggle {
        float: right;
    }
    .container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        min-height: 100vh;
        min-width: 100%;
        max-inline-size: 1440px;
    }
</style>
