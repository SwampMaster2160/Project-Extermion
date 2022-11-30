function addNote() {
	var noteBox = document.getElementById("noteInput");
	var notes = document.getElementById("notes");
	var note = noteBox.value;
	if (note != "") {
		notes.value = notes.value + note + "\n";
		noteBox.value = "";
	}
}