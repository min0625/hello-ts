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
3. 等待容器建置完成，Node.js 與 nvm 會自動安裝

### 選項 B：使用 nvm 自行準備環境

**步驟：**

1. 安裝 [nvm](https://github.com/nvm-sh/nvm)
2. 在專案根目錄執行以下指令，安裝並切換至指定的 Node.js 版本（`v25.9.0`）：

```bash
nvm install
nvm use
```

## 安裝

```bash
npm install
```

## 啟動專案

```bash
npm start
```

執行後會在終端機印出：

```
Hello, TypeScript!
```

## 其他指令

| 指令                   | 說明                                              |
| ---------------------- | ------------------------------------------------- |
| `npm run build`        | 將 TypeScript 編譯為 JavaScript（輸出至 `dist/`） |
| `npm run typecheck`    | 執行型別檢查，不產生編譯輸出                      |
| `npm run lint`         | 執行 ESLint 程式碼檢查                            |
| `npm run lint:fix`     | 自動修正 ESLint 問題                              |
| `npm run format`       | 使用 Prettier 格式化程式碼                        |
| `npm run format:check` | 檢查程式碼格式是否符合規範                        |
| `npm run check`        | 一次執行型別檢查、Lint、格式檢查及測試            |
| `npm run fix`          | 自動修正 Lint 及格式問題                          |

## 專案結構

```
hello-ts/
├── index.ts           # 主程式入口
├── tsconfig.json      # TypeScript 設定
├── eslint.config.js   # ESLint 設定
├── .prettierrc        # Prettier 格式化設定
├── .prettierignore    # Prettier 忽略清單
├── .nvmrc             # Node.js 版本鎖定
├── .gitignore         # Git 忽略清單
└── package.json       # 專案設定與相依套件
```
