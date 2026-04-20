# AGENTS.md

## 專案概覽

`hello-ts` 是一個簡單的 TypeScript 入門專案，使用 **Bun** 作為執行環境與套件管理器，**Biome** 作為 linter 與 formatter。

- **語言**：TypeScript（target: ES2024）
- **執行環境**：Bun >= 1.2
- **Linter / Formatter**：Biome
- **模組系統**：ESM（`"type": "module"`）

## 環境設置

```bash
# 安裝相依套件
bun install
```

> 建議使用 Dev Container，環境會自動配置完成。

## 開發工作流程

```bash
# 執行主程式
bun run start

# 監看模式（熱重載）
bun run dev
```

## 測試

```bash
# 執行所有測試
bun run test
```

- 測試檔案以 `*.test.ts` 命名，與原始碼放在同一目錄
- 使用 Bun 內建測試框架（`bun:test`）

## 程式碼風格

```bash
# 自動修正 lint 與格式問題
bun run fix

# 只檢查 TypeScript 型別
bun run check:type

# 只執行 Biome 檢查
bun run check:biome

# 完整檢查
bun run check
```

**Biome 格式規則：**

- 縮排：2 個空格
- 行寬：80 字元
- 引號：單引號
- 分號：必要
- Trailing commas：ES5 規範

## 建置

```bash
# 建置（輸出至 dist/）
bun run build

# 清除建置產物
bun run clean
```

## PR 提交規範

- 提交前務必通過 `bun run check`（型別檢查、lint、測試全部綠燈）
- 修改程式碼邏輯時，需同步更新或新增對應測試
