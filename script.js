// script.js

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const diaryCards = document.querySelectorAll('.diary-card');
  const quoteItems = document.querySelectorAll('.quotes-item');

  function filterContent() {
    const keyword = searchInput.value.trim().toLowerCase();

    // 篩選日記卡片
    diaryCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (!keyword || text.includes(keyword)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // 篩選收藏語錄列表項目
    quoteItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!keyword || text.includes(keyword)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // 即時搜尋
  searchInput.addEventListener('input', filterContent);
});