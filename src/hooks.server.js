export const handle = (async ({ event, resolve }) => {
    const cookieTheme = event.cookies.get("theme");

    if (cookieTheme) {
        return await resolve(event, {
            transformPageChunk: ({ html }) => html.replace(/color-scheme="*"/, `color-scheme="${cookieTheme}"`),
        });
    }
})