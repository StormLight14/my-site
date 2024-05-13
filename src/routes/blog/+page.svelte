<script>
    export let data
</script>

<h1>silly blog</h1>
<p>i might write something</p>

<section>
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