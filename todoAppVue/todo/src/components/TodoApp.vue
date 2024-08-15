<template>
  <div class="panels-wrapper">
    <div class="panels-container">
      <div class="left-panel">
        <button @click="addNote(newNote)">Add Note</button>
        <textarea
          type="text"
          v-model="newNote"
          @keyup.enter="addNote(newNote)"
        ></textarea>
      </div>
      <hr />
      <div class="right-panel">
        <section class="notes-section">
          <div class="note-card" v-for="(note, index) in notes" :key="index">
            <div class="card-controls">
              <button class="delete-note" @click="deleteNote(index)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                  />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                  />
                </svg>
              </button>
              <button class="edit-note" @click="updateNote(note)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
                  />
                </svg>
              </button>
              <button class="update-note" @click="doneUpdateNote(note)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
                  />
                </svg>
              </button>
            </div>

            <div class="card-text">
              <textarea
                type="text"
                v-if="note.editing"
                ref="editInput"
                v-model="note.title"
                @keyup.enter="doneUpdateNote(note)"
                @keyup.esc="doneUpdateNote(note)"
              ></textarea>
              <div class="note-text" v-if="!note.editing">{{ note.title }}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: "",
      noteEdited: false,
      currentDate: new Date(),
      notes: [],
      beforeEditCache: "",
    };
  },
  mounted() {},
  computed: {
    formattedDate() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return this.currentDate.toLocaleDateString(undefined, options);
    },
    notesFromLocalStorage() {
      return JSON.parse(localStorage.getItem("notes") || "[]");
    },
  },
  methods: {
    addNote(newNote) {
      console.log(newNote);
      if (newNote.trim().length == 0 || !newNote) {
        return;
      }
      this.notes.push({
        id: Date.now(),
        title: newNote,
        editing: false,
        hasCompleted: false,
      });
      console.log(this.notes);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      this.newNote = "";
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
    updateNote(note) {
      console.log(note);
      this.beforeEditCache = note.title;
      note.editing = true;
      this.$nextTick(() => {
        this.$refs.editInput.forEach((input, index) => {
          if (this.notes[index].editing) {
            input.focus();
          }
        });
      });
    },
    doneUpdateNote(note) {
      if (note.title.trim() == "") {
        note.title = this.beforeEditCache;
      }

      const updatedNotes = this.notes.map((n) => {
        if (n.id === note.id) {
          return { ...n, title: note.title, editing: false };
        } else {
          return n;
        }
      });
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      note.editing = false;
    },
  },
  created() {
    this.notes = this.notesFromLocalStorage;
    if (localStorage.getItem("notes")) {
      try {
        this.notes = JSON.parse(localStorage.getItem("notes"));
      } catch (e) {
        localStorage.removeItem("notes");
      }
    } else {
      this.notes = [];
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&display=swap");
@import "../../../output.css";
/* Option 2: Import via CSS */
/* Option 2: Import via CSS */

* {
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
