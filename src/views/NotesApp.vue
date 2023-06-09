<template>
  <section class="notes-section">
    <!-- Header  -->
    <TheHeader />
    <div class="data-container">
      <div class="todo-container">
        <!-- Add to notes -->
        <button class="notes-btn" @click="addNotes">Add Notes</button>
        <!-- Notes Component -->
        <Notes
          v-for="(notes, ind) in notesArray"
          :key="notes.id"
          :ind="ind"
          :notesArray="notesArray"
          @update-data="updateData"
          @setValue="setValue"
          :notes="notes"
        />
      </div>
      <!-- Doing container -->
      <div class="doing-container"></div>
      <!-- Done container -->
      <div class="done-container"></div>
    </div>
  </section>
</template>

<script>
import Notes from "../components/TheNotes.vue";
import TheHeader from "../components/TheHeader.vue";
import { v4 as uuidv4 } from "uuid";

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

  created() {
    const localData = this.getDataFromLocalStorage();
    this.notesArray = localData;
  },

  methods: {
    // Add to notes arrayx
    addNotes() {
      // create new notes
      let notes = {
        id: uuidv4(),
        value: "",
      };

      // push to notesArray
      this.notesArray.push(notes);
      this.setToLocalStorage(this.notesArray);
    },

    setValue(value) {
      this.setToLocalStorage(value);
    },

    deleteNotes() {
      //   console.log("notes");
    },

    updateData(data) {
      this.setToLocalStorage(data);
    },

    // set to Local Storage
    setToLocalStorage(data) {
      localStorage.setItem("Notes", JSON.stringify(data));
    },

    // get the data form local storage
    getDataFromLocalStorage() {
      let data = localStorage.getItem("Notes");
      let x = JSON.parse(data);
      return x;
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
