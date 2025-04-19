function createTask(title, description) {
    let completed = false;
  
    return {
      title,
      description,
      isCompleted: () => completed,
      markComplete() {
        completed = true;
        console.log(`✅ "${title}" marked as complete.`);
      },
      getDetails() {
        return {
          title: this.title,
          description: this.description,
          completed: completed
        };
      }
    };
  }

  function createTaskManager() {
    const tasks = [];
  
    return {
      addTask(title, description) {
        const task = createTask(title, description);
        tasks.push(task);
        console.log(`🆕 Task "${title}" added.`);
      },
      listTasks() {
        return tasks.map((task, index) => ({
          id: index + 1,
          ...task.getDetails()
        }));
      },
      completeTask(id) {
        const task = tasks[id - 1];
        if (task) {
          task.markComplete();
        } else {
          console.log("❌ Task not found.");
        }
      },
      deleteTask(id) {
        if (tasks[id - 1]) {
          const removed = tasks.splice(id - 1, 1);
          console.log(`🗑️ Task "${removed[0].title}" deleted.`);
        } else {
          console.log("❌ Task not found.");
        }
        }
    };
  }

  const manager = createTaskManager();

  manager.addTask("Build homepage", "Design and code the main layout");
  manager.addTask("Fix bugs", "Resolve all console errors");
  
  console.log(manager.listTasks());
  
  manager.completeTask(1);
  console.log(manager.listTasks());
  
  manager.deleteTask(2);
  console.log(manager.listTasks());