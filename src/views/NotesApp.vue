<template>
  <section class="notes-section">
    <TheHeader />
    <div class="data-container">
      <div class="todo-container">
        <button class="notes-btn" @click="addNotes">Add Notes</button>
        <Notes
          v-for="(notes, ind) in notesArray"
          :key="ind"
          :ind="ind"
          :notesArray="notesArray"
          @update-data="updateData"
          :notes="notes"
        />
      </div>
      <div class="doing-container"></div>
      <div class="done-container"></div>
    </div>
  </section>
</template>

<script>
import Notes from "../components/TheNotes.vue";
import TheHeader from "../components/TheHeader.vue";

export default {
  components: {
    Notes,
    TheHeader,
  },

  data() {
    return {
      notesArray: [],
    };
  },

  methods: {
    addNotes() {
      let notes = {
        id: Math.random(),
        description: "",
      };
      this.notesArray.push(notes);
    },
    deleteNotes() {
      //   console.log("notes");
    },

    updateData(data) {
      this.notesArray = data;
    },
  },
};
</script>

<style scoped>
.notes-section {
  width: 100vw;

  /* display: flex; */
}

.data-container {
  width: 100%;
  display: flex;
  justify-content: space-between;

  gap: 0.5rem;
}
.todo-container {
  width: 33%;

  display: flex;
  flex-direction: column;
}
.doing-container {
  width: 33%;

  display: block;
}
.done-container {
  width: 33%;
}

.notes-btn {
  padding: 0.8rem 2rem;
  border: none;
  background-color: navy;
  color: white;
  font-size: 1.6rem;
  border-radius: 1rem;
  cursor: pointer;
  margin: 1.2rem 3rem 1rem 0;

  align-self: flex-end;
}

.notes-btn:hover {
  background-color: rgb(64, 64, 201);
}
</style>
