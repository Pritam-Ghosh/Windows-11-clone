const notepadApp = document.querySelector('.notepadApp');
const notepad = document.createElement('div');
notepad.innerHTML = `<div class="container">
        <div class="title">Notepad</div>
        <div class="buttons">
            <button class="button" id="NotepadminimizeBtn">-</button>
            <button class="button" id="NotepadMaximizeBtn">
                <i class="fa-solid fa-window-maximize"></i>
            </button>
            <button class="button" id="NotepadcloseBtn">X</button>
        </div>
    </div>
                    <div class="notepadNav">
            <div class="notepadMenu">
                <div class="noteOpen">Open</div>
                <input type="file" id="myfile" name="myfile">
            </div>
            <div class="notepadMenu">
                
                <button id="saveNote">Save</button>
            </div>
        </div>
        <textarea name="notepad" id="textArea"></textarea>                       
`


notepadApp.appendChild(notepad);


const noteOpen = document.querySelector('.noteOpen');
const saveNote = document.querySelector('#saveNote');
const NotepadcloseBtn = document.querySelector('#NotepadcloseBtn');
const NotepadMaximizeBtn = document.querySelector('#NotepadMaximizeBtn')

const saveNoteHandler = () => {
    const textArea = document.querySelector('#textArea').value;
    const blob = new Blob([textArea], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.href = URL.createObjectURL(blob);
    anchor.download = 'note.txt';
    anchor.click();
    URL.revokeObjectURL(anchor.href);
};

saveNote.addEventListener('click', saveNoteHandler);

const noteOpenHandler = () => {
    const myfile = document.querySelector('#myfile');
    myfile.type = 'file';
    myfile.accept = 'text/plain';
    
    myfile.click();

    myfile.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector('#textArea').value = e.target.result;
            };
            reader.readAsText(file);
        }
    };
};
const NotepadcloseBtnHandler = () => {
notepadApp.style.display = 'none'
}














// Assuming notepadApp and textArea are already defined
let isNotepadMaximized = false; // Track if the Notepad is maximized

const NotepadMaximizeBtnHandler = () => {
    if (isNotepadMaximized) {
        // Restore to default size
        notepadApp.style.top = '15%'; // Set to default position
        notepadApp.style.left = '30%'; // Set to default position
        notepadApp.style.height = '320px'; // Set to default height
        notepadApp.style.width = '600px'; // Set to default width
        textArea.style.height = '14rem'; // Set to default textarea height
    } else {
        notepadApp.style.top = '0px';
        notepadApp.style.left = '0px';
        notepadApp.style.height = '100%';
        notepadApp.style.width= '100%';
        textArea.style.height = '550px'
    }
    isNotepadMaximized = !isNotepadMaximized; // Toggle the flag
};

// Event Listeners
NotepadMaximizeBtn.addEventListener('click', NotepadMaximizeBtnHandler);

// Other existing event listeners and functions...
noteOpen.addEventListener('click', noteOpenHandler);
NotepadcloseBtn.addEventListener('click', NotepadcloseBtnHandler);
NotepadminimizeBtn.addEventListener('click', NotepadcloseBtnHandler);
















noteOpen.addEventListener('click', noteOpenHandler);

NotepadcloseBtn.addEventListener('click',NotepadcloseBtnHandler);
NotepadminimizeBtn.addEventListener('click',NotepadcloseBtnHandler)
NotepadMaximizeBtn.addEventListener('click',NotepadMaximizeBtnHandler);