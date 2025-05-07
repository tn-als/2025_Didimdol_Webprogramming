function showAlert(event) {
    event.preventDefault();
    alert("아직 준비 중입니다. 금방 구현할게용!");
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

    const delBtn = document.createElement('button');
    delBtn.innerText = '삭제';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.querySelector('#todo-list').appendChild(li);
    input.value = '';
}
function adddone() {
    const input = document.querySelector('#done-input');
    const value = input.value.trim();
    if (value === '') {
        alert('완료한 일을 입력해주세요!');
        return;
    }

    const li = document.createElement('li');
    li.innerText = value;
    li.style.margin = '10px 0';

    const delBtn = document.createElement('button');
    delBtn.innerText = '삭제';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.querySelector('#done-list').appendChild(li);
    input.value = '';
}
function addsettings() {
    const input = document.querySelector('#settings-input');
    const value = input.value.trim();
    if (value === '') {
        alert('설정을 입력해주세요!');
        return;
    }

    const li = document.createElement('li');
    li.innerText = value;
    li.style.margin = '10px 0';

    const delBtn = document.createElement('button');
    delBtn.innerText = '삭제';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.querySelector('#settings-list').appendChild(li);
    input.value = '';
}

function showTab(event, tab) {
    event.preventDefault();
    document.getElementById('todo-section').style.display = 'none';
    document.getElementById('done-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';

    if (tab === 'todo') {
        document.getElementById('todo-section').style.display = 'block';
    } else if (tab === 'done') {
        document.getElementById('done-section').style.display = 'block';
    } else if (tab === 'settings') {
        document.getElementById('settings-section').style.display = 'block';
    }
}
