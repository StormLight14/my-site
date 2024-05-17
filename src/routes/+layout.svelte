<script>
    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';

    import '../app.scss';
    import '$lib/styles/prism-vsc-dark-plus.css';
    import 'open-props/style';
    import 'open-props/normalize';
    import 'open-props/buttons';
</script>

<svelte:head>
    <title>stormyyy's site</title>
</svelte:head>

<div class="container">
    <Navbar/>
    <div class="content">
        <slot/>
        <Footer/>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        gap: 1em;
        min-height: 100vh;
        max-inline-size: 1440px;
    }
</style>
