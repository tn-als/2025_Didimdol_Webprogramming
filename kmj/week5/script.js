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
    doneBtn.onclick = function (){
        addDone(value);
        li.remove();
    }

    const delBtn = document.createElement('button');
    delBtn.innerText = '삭제';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    document.querySelector('#todo-list').appendChild(li);
    input.value = '';
}

function addDone(doneWorkValue){
    const input = document.querySelector('#other-section');

    const li = document.createElement('li');
    li.innerText = doneWorkValue;
    li.style.margin = '10px 0';

    const delBtn = document.createElement('button');
    delBtn.innerText = '삭제';
    delBtn.style.marginLeft = '10px';
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.querySelector('#other-section').appendChild(li);
    input.value = '';

}

function showTab(event, tab) {
    event.preventDefault();
    document.getElementById('todo-section').style.display = 'none';
    document.getElementById('other-section').style.display = 'none';

    if (tab === 'todo') {
        document.getElementById('todo-section').style.display = 'block';
    } else {
        document.getElementById('other-section').style.display = 'block';
        const message = {
            'done': '완료한 일 페이지는 곧 준비됩니다.',
            'settings': '설정 페이지는 곧 준비됩니다.'
        };
        document.getElementById('other-message').innerText = message[tab] || '내용을 준비 중입니다.';
    }
}
