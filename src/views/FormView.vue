<template>
  <div class="container mt-2">
    <form>
      <div class="field">
        <label for="subject">Titulo</label>
        <div class="control">
          <input
            type="text"
            class="input"
            id="subject"
            placeholder="Ex: Estudar Vue"
            v-model="form.subject"
            required
            autocomplete="off"
          />
        </div>
      </div>

      <label for="description">Descrição</label>
      <div class="control">
        <textarea
          type="text"
          class="textarea"
          id="description"
          placeholder="Ex: Preciso estudar Vue"
          v-model="form.description"
          required
          autocomplete="off"
        />
      </div>

      <div class="control">
        <button class="button is-primary" @click="saveTask">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "Form",

  data() {
    return {
      form: {
        subject: "",
        description: "",
      },
      methodSave: "new",
    };
  },
  created() {
    if(this.$route.params.index === 0 || this.$route.params.index !== undefined) {
      this.methodSave = "update";
      let tasks = JSON.parse(localStorage.getItem("tasks"))
      this.form = tasks[this.$route.params.index]
    }
  },
  methods: {
    saveTask() {
      if(this.methodSave === "update"){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.$router.push({ name: "list" })
        return;
      }

      let tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
        tasks.push(this.form);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.$router.push({name: "list"})
    },
  },
};
</script>

<style>
.control {
  padding-top: 10px;
}
</style>
