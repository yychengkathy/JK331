# JK Love Diary

JK Love Diary 是一個以「每日愛與小確幸」為主題的個人日記／照片集網站。  
它用簡單的 IG 風格卡片版面，記錄每日行程、心情金句和照片，並提供前端搜尋功能，方便你快速回顧特定關鍵字的內容。

## Demo

GitHub Pages 連結（部署完成後在這裡填上你的網址）：

`https://你的GitHub帳號.github.io/jk-love-diary/`

## Features 功能特色

- 今日金句區：顯示當日精選 Love Quote。  
- 每日日記卡片：以卡片方式記錄日期、行程、心情與愛情語錄。  
- 收藏語錄列表：集中顯示你最喜歡、想重溫的句子。  
- 相片 Photo Gallery：以響應式圖片格子展示生活照片。  
- 每月回顧區：以月份總結關鍵字與本月精選內容。  
- 即時搜尋：在搜尋框輸入文字，即時篩選日記卡片與收藏語錄（支援中文／英文、包含字匹配）。  

## Tech Stack 技術棧

- 靜態網頁：HTML5 + CSS3 + 原生 JavaScript（Vanilla JS）  
- 響應式設計（Responsive Web Design）：使用 CSS Grid / Flexbox + Media Queries 適配手機、平板與桌面。[web:47][web:49]  
- GitHub Pages：作為免費靜態網站託管平台。[web:14][web:20]

## 專案結構 Project Structure

```text
jk-love-diary/
├─ index.html      # 網站首頁，包含所有內容區塊
├─ style.css       # 顏色、版面與 RWD 設計
├─ script.js       # 搜尋功能（篩選日記與金句）
└─ assets/
   └─ images/      # 生活照片（Gallery 使用的圖片）
      ├─ sunset-placeholder.jpg
      └─ coffee-placeholder.jpg
```

## 使用方式 Usage

### 本地開啟（Local Preview）

1. Clone 或下載此 repo：  
   - 使用 Git：  
     ```bash
     git clone https://github.com/你的帳號/jk-love-diary.git
     cd jk-love-diary
     ```
   - 或直接用 GitHub 的「Download ZIP」下載並解壓縮。  
2. 用瀏覽器打開 `index.html`（直接 double-click 或用 VS Code 的「Open in Browser」外掛）。  
3. 在頁面右上角的搜尋框輸入關鍵字，即可即時篩選日記卡片與收藏語錄。

### 部署到 GitHub Pages

1. 將 `index.html`, `style.css`, `script.js` 和 `assets/` 整個資料夾推送到 GitHub repository 的 `main` 分支。  
2. 在 GitHub 上進入該 repo → **Settings** → **Pages**。  
3. 將 Source 設定為：  
   - Branch：`main`  
   - Folder：`/(root)`（因為 `index.html` 在根目錄）。[web:14][web:75]  
4. 儲存後，等待數十秒至數分鐘，GitHub Pages 會生成一個公開 URL。  

## 自訂內容 Customization

- 要新增或修改日記，請在 `index.html` 的 `Daily Moments` 區塊新增或編輯 `<article class="diary-card">`。  
- 要新增收藏語錄，請在 `Favorite Quotes` 區塊新增 `<li class="quotes-item">`。  
- 要替換照片，只需將你的圖片放入 `assets/images/`，並更新對應的 `<img src="...">` 路徑與文字說明。  
- 若想更改主題顏色（例如改成粉色系或寵物主題），可以在 `style.css` 裡調整背景色與按鈕色。

## License

此專案主要作為個人學習與作品展示用。  
如需引用或改作，請保留原作者註記，並自行確認是否適合你的使用場景。