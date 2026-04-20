# hello-ts

一個簡單的 TypeScript 入門專案。

## 前置需求

請選擇以下任一方式準備開發環境：

### 選項 A：使用 Dev Container（推薦）

無需手動安裝任何工具，環境會自動配置完成。

**需要安裝：**

- [Docker](https://www.docker.com/products/docker-desktop)
- [VS Code](https://code.visualstudio.com/) + [Dev Containers 擴充功能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

**步驟：**

1. 用 VS Code 開啟專案資料夾
2. 按下左下角的 `><` 圖示，選擇 **Reopen in Container**
3. 等待容器建置完成，Bun 會自動安裝

### 選項 B：自行安裝 Bun

**步驟：**

1. 依照 [Bun 官方文件](https://bun.sh/docs/installation) 安裝 Bun（需 `>= 1.2`）

## 安裝

```bash
bun install
```

## 啟動專案

```bash
bun start
```

執行後會在終端機印出：

```
Hello, TypeScript!
```

## 其他指令

| 指令                  | 說明                                              |
| --------------------- | ------------------------------------------------- |
| `bun run dev`         | 以監看模式執行（檔案變更時自動重啟）                 |
| `bun run build`       | 將 TypeScript 編譯為 JavaScript（輸出至 `dist/`）  |
| `bun run clean`       | 刪除 `dist/` 輸出目錄                              |
| `bun test`            | 執行測試                                           |
| `bun run check:type`  | 執行型別檢查，不產生編譯輸出                         |
| `bun run check:biome` | 執行 Biome 程式碼檢查                               |
| `bun run check`       | 一次執行型別檢查、Biome 檢查及測試                   |
| `bun run fix`         | 自動修正 Biome 問題                                 |

## 專案結構

```
hello-ts/
├── index.ts           # 主程式入口
├── index.test.ts      # 測試檔案
├── tsconfig.json      # TypeScript 設定
├── biome.json         # Biome Lint 與格式化設定
├── bun.lock           # Bun 相依套件鎖定
├── .gitignore         # Git 忽略清單
└── package.json       # 專案設定與相依套件
```
