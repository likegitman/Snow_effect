
function createSnow(){
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft=randomPosition() + 'px';
    document.body.appendChild(el);
}

function randomPosition(){
    // 웹 브라우저의 안을 벗어나지 않는 선에서 랜덤하게 생성
    return Math.floor(Math.random()*window.innerWidth);
}

for(let i=0;i<500;i++){
    createSnow();
}