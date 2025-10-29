/////////////
    function addTodo() {
      const input = document.getElementById("todoInput");
      const text = input.value.trim();
      if (text === "") return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = text;

      const editBtn = document.createElement("button");
      editBtn.textContent = "✧Edit✧";
      editBtn.onclick = () => editTodo(span, editBtn);

      const delBtn = document.createElement("button");
      delBtn.textContent = "✧DELETE!!✧";
      delBtn.onclick = () => deleteTodo(li);

      li.appendChild(span);
      li.appendChild(editBtn);
      li.appendChild(delBtn);
      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }

    function editTodo(span, editBtn) {
      const currentText = span.textContent;
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentText;

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "✧SAVE!!✧";
      saveBtn.onclick = () => {
        span.textContent = input.value;
        span.style.display = "inline";
        input.remove();
        saveBtn.remove();
        editBtn.style.display = "inline";
      };

      span.style.display = "none";
      editBtn.style.display = "none";
      span.parentNode.insertBefore(input, editBtn);
      span.parentNode.insertBefore(saveBtn, editBtn);
    }

    function deleteTodo(li) {
      if (confirm("✧Attention: You are about to delete a task from your list. Before you confirm this action, please take a moment to reflect. This task may contain important information, serve as a reminder of a goal you’ve set, or represent a meaningful step toward something significant. Deleting it will result in its permanent removal, and recovery will not be possible. We understand the desire to clear space and remove clutter, but ask yourself—has this task truly lost its relevance? Could it benefit from a second look, a revision, or simply a postponement to another day? Rash decisions can lead to regret, especially when the task is tied to something personal, professional, or emotionally important. If you’re certain that it no longer serves a purpose and its deletion won’t disrupt your plans or peace of mind, go ahead and confirm. Otherwise, consider keeping it a little longer. Are you absolutely sure you want to delete this task forever?✧")) {
        li.remove();
      }
    }