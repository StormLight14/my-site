<script>
    export let data
</script>

<h1>silly blog</h1>

<div class="rss">
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
	<a href="/rss.xml" target="_blank">RSS Feed</a>
</div>

<section class="blog">
    <ul class="posts">
        {#each data.posts as post}
            <li class="post">
                <a href={post.slug} class="title">{post.title}</a>
                <p class="date">{post.date}</p>
                <p class="description">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

<style>
	.rss {
		margin-top: var(--size-1);
		display: flex;
		flex-direction: row;
		gap: var(--size-1);
	}
	.lucide-rss {
		display: inline;
	}
    .posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}

</style>