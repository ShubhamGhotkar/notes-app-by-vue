<template>
  <section
    class="note-container"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
  >
    <header>
      <nav>
        <li>Edit {{ isButtonCheck ? "On" : "Off" }}</li>
        <li>
          <ToggleButton :width="45" v-model="isButtonCheck" color="#3474ac">
          </ToggleButton>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="del-icon"
            @click="handleDelete(ind)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </li>
      </nav>
    </header>
    <main>
      <VueEditor v-model="editorData" :disabled="isButtonCheck" />
    </main>
  </section>
</template>

<script>
import { VueEditor } from "vue2-editor";

import { ToggleButton } from "vue-js-toggle-button";

export default {
  props: ["ind", "notesArray", "notes"],
  components: {
    VueEditor,
    ToggleButton,
  },
  data() {
    return {
      editorData: "",
      isButtonCheck: false,
      updatedData: [],
    };
  },
  created() {
    this.editorData = this.notes.value;
  },
  updated() {
    const updatedNotes = this.notesArray.map((notes) => {
      if (notes.id === this.notes.id) {
        notes.value = this.editorData;
      }
      return notes;
    });

    this.$emit("setValue", updatedNotes);
  },
  methods: {
    dragStart(e) {
      console.log("start", e);
    },
    dragEnd(e) {
      console.log("end", e);
    },

    handleDelete(ind) {
      let arr = this.notesArray.filter((val, indx) => indx !== ind);
      this.updatedData = arr;
      this.$emit("update-data", arr);
    },
  },
};
</script>

<style scoped>
.note-container {
  width: 25vw;
  border: 1.5px solid gray;
  margin: 1.5rem auto;
}
header {
  width: 100%;
  display: flex;
  justify-content: end;

  background-color: navy;
  padding: 1rem 0;
}
nav {
  width: 50%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 2rem;
  color: white;
  list-style: none;
}
.del-icon {
  width: 2.8rem;
  height: 2.8rem;
  stroke: white;
  cursor: pointer;
}

/* Drag and Drop */
</style>
