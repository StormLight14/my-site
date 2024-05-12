<script>
    import Navbar from '$lib/Navbar.svelte';
    import '../app.scss';
</script>

<div class="container">
    <Navbar/>
    <div>
        <slot/>
    </div>
</div>
