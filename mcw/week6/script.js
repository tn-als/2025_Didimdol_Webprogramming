function showAlert(event) {
    event.preventDefault();
    alert("아직 준비 중입니다.");
}

function addTodo() {
    const input = document.querySelector('#todo-input');
    const value = input.value.trim();
    if (value === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    const li = document.createElement('li');
    li.innerText = value;
    li.style.margin = '10px 0';

    const doneBtn = document.createElement('button');
    doneBtn.innerText = '완료';
    doneBtn.style.marginLeft = '10px';
    doneBtn.onclick = function () {
        addDone(value);
        li.remove();
    };

    li.appendChild(doneBtn);
    document.querySelector('#todo-list').appendChild(li);
    input.value = '';
}

function addDone(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.style.margin = '10px 0';
    document.querySelector('#done-list').appendChild(li);
}

function showTab(event, tab) {
    event?.preventDefault();

    document.getElementById('todo-section').style.display = 'none';
    document.getElementById('done-section').style.display = 'none';
    document.getElementById('faq-section').style.display = 'none';
    document.getElementById('other-section').style.display = 'none';

    if (tab === 'todo') {
        document.getElementById('todo-section').style.display = 'block';
    } else if (tab === 'done') {
        document.getElementById('done-section').style.display = 'block';
    } else if (tab === 'settings') {
        document.getElementById('faq-section').style.display = 'block';
    } else {
        document.getElementById('other-section').style.display = 'block';
    }
}

// 🎞️ 이미지 슬라이더 (배너)
const images = ["dog1.jpg", "dog2.jpg", "dog3.png"];
let index = 0;
setInterval(function () {
    index = (index + 1) % images.length;
    $(".slide-img").fadeOut(500, function () {
        $(this).attr("src", images[index]).fadeIn(500);
    });
}, 3000);

// 🧾 FAQ 아코디언 슬라이드
$(document).ready(function () {
    $('.faq-title').on('click', function () {
        $(this).next('.faq-content').slideToggle();
    });

    // 초기 탭 설정 (To-Do 리스트 보여주기)
    showTab(null, 'todo');
});
