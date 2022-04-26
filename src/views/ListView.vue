<template>
  <div>
    <div class="container">
      <div v-for="(task, index) in tasks" :key="index">
        <div class="card">
          <header class="card-header mt-6">
            <p class="card-header-title">{{ task.subject }}</p>
          </header>
          <div class="card-content">
            <div class="content">{{ task.description }}</div>
            <footer class="card-footer">
              <button class="button is-secundary" @click="edit(index)">
                Editar
              </button>
              <button class="button is-danger" @click="remove(task, index)">
                Excluir
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",

  data() {
    return {
      tasks: [],
      taskSelected: [],
    };
  },
  created() {
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  },
  methods: {
    edit(index) {
      this.$router.push({ name: "form", params: { index } });
    },
    remove(task, index) {
      this.taskSelected = task;
      this.taskSelected.index = index;
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  margin-right: 200px;
}

.card-footer {
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
</style>
