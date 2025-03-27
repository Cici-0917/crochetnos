// script.js

const totalImages = 8; // 总图片数量
const imageList = [];

for (let i = 1; i <= totalImages; i++) {
  imageList.push(`img/img${i}.jpg`);
}

let currentIndex = 0;
let lastChangeTime = 0;
const interval = 200; // 切换间隔

const maxImagesOnScreen = 6;
const hoverArea = document.getElementById('hover-area');
const imageQueue = []; // 用于保存最多6张图片的 DOM 元素

hoverArea.addEventListener('mousemove', (event) => {
  const now = Date.now();

  if (now - lastChangeTime > interval) {
    lastChangeTime = now;

    // 生成新图像元素
    const img = document.createElement('img');
    img.src = imageList[currentIndex];
    img.style.left = `${event.clientX - hoverArea.getBoundingClientRect().left}px`;
    img.style.top = `${event.clientY - hoverArea.getBoundingClientRect().top}px`;

    // 添加到容器中
    hoverArea.appendChild(img);
    imageQueue.push(img);

    // 保持最新 6 张图片
    if (imageQueue.length > maxImagesOnScreen) {
      const oldImg = imageQueue.shift();
      hoverArea.removeChild(oldImg);
    }

    // 更新图片索引
    currentIndex = (currentIndex + 1) % imageList.length;
  }
});
