<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import '$lib/styles/app.scss';
</script>

<svelte:head>
    <title>stormyyy's site</title>
</svelte:head>

<div class="container">
    <Navbar/>
    <div>
        <slot/>
    </div>
</div>
