<script>
	import { Rss } from 'lucide-svelte';
    export let data
</script>

<h1>silly blog</h1>

<div class="rss">
	<Rss/>
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