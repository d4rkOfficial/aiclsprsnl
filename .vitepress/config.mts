import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "李佳骏的个人网站",
    description: "D4rk`s",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "My Agent", link: "/pages/my-agent.md" },
            { text: "My Digit Human", link: "/pages/my-digithuman" },
        ],
        socialLinks: [
            { icon: "tencentqq", link: "/pages/contactme-qq" },
            { icon: "wechat", link: "/pages/contactme-wechat" },
        ],
    },
})
