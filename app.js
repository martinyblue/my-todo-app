// app.js

// 필요한 요소 선택
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// 추가 버튼 클릭 시 할 일 추가
addButton.addEventListener('click', function() {
  const todoText = input.value;

  if (todoText === '') {
    alert('할 일을 입력하세요');
    return;
  }

  // 새로운 할 일 항목(li) 생성
  const newTodo = document.createElement('li');
  newTodo.textContent = todoText;

  // 삭제 버튼 생성
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '삭제';
  deleteButton.addEventListener('click', function() {
    todoList.removeChild(newTodo);
  });

  // 할 일 항목에 삭제 버튼 추가
  newTodo.appendChild(deleteButton);
  
  // 할 일 목록에 항목 추가
  todoList.appendChild(newTodo);

  // 입력 필드 초기화
  input.value = '';
});
