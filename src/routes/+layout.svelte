<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';
    import Toggle from '$lib/components/toggle.svelte';

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
    <Toggle />
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        min-height: 100vh;
        max-inline-size: 1440px;
    }
</style>
