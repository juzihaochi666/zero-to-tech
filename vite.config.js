import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '127.0.0.1',  // 强制使用 IPv4，避免 localhost 解析到 ::1
    port: 5173,          // 默认端口
    open: true,          // 自动在浏览器打开
  },
});
