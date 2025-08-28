// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有卡片元素
    const cards = document.querySelectorAll('.card');
    
    // 为每个卡片添加点击事件监听器
    cards.forEach((card, index) => {
        // 添加点击事件
        card.addEventListener('click', function() {
            // 添加一个点击效果
            this.classList.add('card-clicked');
            
            // 1秒后移除点击效果
            setTimeout(() => {
                this.classList.remove('card-clicked');
            }, 1000);
        });
    });
    
    // 添加滚动事件监听器，改变导航栏样式
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#4b0082'; // 深紫色
        } else {
            navbar.style.backgroundColor = '#6a0dad'; // 原始紫色
        }
    });
});

// 添加一个函数来动态创建新卡片
function createNewCard(title, description, language, stars, forks) {
    // 创建卡片元素
    const card = document.createElement('div');
    card.className = 'card';
    
    // 设置卡片内容
    card.innerHTML = `
        <div class="card-header">
            <h2 class="card-title">${title}</h2>
        </div>
        <div class="card-body">
            <p class="card-description">${description}</p>
            <div class="card-details">
                <div class="detail-item">
                    <span class="detail-label">语言:</span>
                    <span class="detail-value">${language}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">星标:</span>
                    <span class="detail-value">${stars}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">分支:</span>
                    <span class="detail-value">${forks}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button class="card-button">查看详情</button>
        </div>
    `;
    
    // 添加动画延迟
    const cardsContainer = document.querySelector('.cards-container');
    const cardCount = cardsContainer.children.length;
    card.style.animationDelay = `${cardCount * 0.2}s`;
    
    // 添加点击事件
    card.addEventListener('click', function() {
        this.classList.add('card-clicked');
        setTimeout(() => {
            this.classList.remove('card-clicked');
        }, 1000);
    });
    
    // 为新按钮添加点击事件
    const button = card.querySelector('.card-button');
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        window.location.href = 'https://example.com';
    });
    
    // 将卡片添加到容器中
    cardsContainer.appendChild(card);
    
    return card;
}