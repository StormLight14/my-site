export async function GET({ fetch }) {
	const response = await fetch('api/posts');
	const posts = await response.json();

	const headers = { 'Content-Type': 'application/xml' };
    const url = "https://stormyyy.dev";

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>Stormyyy's Blog</title>
				<description>Articles about random stuff.</description>
				<link>${url}/blog</link>
				<atom:link href="${url}/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						<item>
							<title>${post.title}</title>
							<description>${post.description}</description>
							<link>/${post.slug}</link>
							<guid isPermaLink="true">${url}/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`
					)
					.join('')}
			</channel>
		</rss>
	`.trim()

	return new Response(xml, { headers })
}
