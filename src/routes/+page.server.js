export function load({ cookies }) {
    if (cookies.get('theme') === undefined || cookies.get('theme') === null) {
        cookies.set('theme', 'dark', { path: '/' });
    }
}

export const actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = cookies.get("theme");
        //console.log(theme);
        if (theme === 'dark') {
            cookies.set('theme', 'light', { path: '/' })
        } else {
            cookies.set('theme', 'dark', { path: '/' })
        }
    }
}