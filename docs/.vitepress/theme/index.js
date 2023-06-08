import { useData, useRoute } from "vitepress";
import giscusTalk from "vitepress-plugin-comment-with-giscus";
import theme from "vitepress/theme";
import "./styles/custom.scss";

export default {
  enhanceApp(ctx) {
    theme.enhanceApp(ctx);
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = useData();
    const route = useRoute();
    // 评论组件
    giscusTalk(
      {
        // 填写上述备份好的字段
        repo: "FreelyCoding/freelycoding",
        repoId: "R_kgDOJIgwDg",
        category: "Announcements",
        categoryId: "DIC_kwDOJIgwDs4CU0Ut",
        mapping: "pathname",
      },
      {
        frontmatter,
        route,
      }
    );
  },
  ...theme,
};