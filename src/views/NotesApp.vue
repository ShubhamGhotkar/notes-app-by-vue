<template>
  <section class="notes-section">
    <div class="todo-container">
      <draggable group="todo-group" v-model="notesArray">
        <Notes
          v-for="(notes, ind) in notesArray"
          :key="notes.id"
          :ind="ind"
          :notesArray="notesArray"
          @update-data="updateData"
          @setValue="setValue"
          :notes="notes"
          name="notesArray"
        />
      </draggable>
    </div>
    <!-- Doing container -->
    <div class="doing-container">
      <draggable group="todo-group" v-model="doingArray">
        <Notes
          v-for="(notes, ind) in doingArray"
          :key="notes.id"
          :ind="ind"
          :notesArray="doingArray"
          @update-data="updateData"
          @setValue="setValue"
          :notes="notes"
          name="doingArray"
        />
      </draggable>
    </div>
    <!-- Done container -->
    <div class="done-container">
      <draggable group="todo-group" v-model="doneArray">
        <Notes
          v-for="(notes, ind) in doneArray"
          :key="notes.id"
          :ind="ind"
          :notesArray="doneArray"
          @update-data="updateData"
          @setValue="setValue"
          :notes="notes"
          name="doneArray"
        />
      </draggable>
    </div>

    <button class="notes-btn" @click="addNotes">Add Notes</button>
  </section>
</template>

<script>
import Notes from "../components/TheNotes.vue";
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    Notes,
    draggable,
  },

  data() {
    return {
      notesArray: [],
      doingArray: [],
      doneArray: [],
    };
  },

  created() {
    this.setDataToVariable();
  },

  updated() {
    this.setData();
  },

  methods: {
    //FUNCTION FOR  SET DATA TO LOCAL STORAGE
    setData() {
      this.setToLocalStorage("Notes", this.notesArray);
      this.setToLocalStorage("Doing", this.doingArray);
      this.setToLocalStorage("Done", this.doneArray);
    },

    // FUNCTION TO CHECK DATA AND UPDATE ACCORDING TO ARRAY
    checkData(data, name) {
      if (name === "notesArray") {
        this.setToLocalStorage("Notes", data);
      } else if (name === "doingArray") {
        this.setToLocalStorage("Doing", data);
      } else {
        this.setToLocalStorage("Done", data);
      }
    },

    // ADD NOTES TO THE ARRAY
    addNotes() {
      let notes = {
        id: uuidv4(),
        value: "",
      };

      this.notesArray.push(notes);
      this.setToLocalStorage("Notes", this.notesArray);
    },

    // FUNCTION FOR SET VALUE TO THE LOCAL STORAGE AFTER CHECKING
    setValue(data, name) {
      this.checkData(data, name);
    },

    // FUNCTION FOR SET DATA TO VARIABLE
    setDataToVariable() {
      this.notesArray = this.getDataFromLocalStorage("Notes");
      this.doingArray = this.getDataFromLocalStorage("Doing");
      this.doneArray = this.getDataFromLocalStorage("Done");
    },

    // FUNCTION FOR UPDATE THE DATA
    updateData(data, name) {
      this.checkData(data, name);

      this.setDataToVariable();
    },

    // FUNCTION FOR SET THE DATA FOR LOCAL STORAGE
    setToLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },

    // FUNCTION FOR GET THE DATA FROM LOCAL STORAGE
    getDataFromLocalStorage(key) {
      let data = localStorage.getItem(key);
      let x = JSON.parse(data);
      return x;
    },
  },
};
</script>

<style scoped>
.notes-section {
  width: 96vw;
  margin: 8rem auto 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.todo-container {
  width: 33%;
}
.doing-container {
  width: 33%;
  min-height: 91vh;
  display: block;
  border-left: 2px solid gray;
  border-right: 2px solid gray;
}
.done-container {
  width: 33%;
  min-height: 91vh;
}

.notes-btn {
  padding: 1.5rem 3rem;
  border: none;
  background-color: navy;
  color: white;
  font-size: 2rem;
  border-radius: 1rem;
  cursor: pointer;
  margin: 1.2rem 3rem 1rem 0;

  align-self: flex-end;
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  z-index: 99;
}

.notes-btn:hover {
  background-color: rgb(64, 64, 201);
}
</style>
