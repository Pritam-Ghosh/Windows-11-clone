const notepadApp = document.querySelector('.notepadApp');
const notepad = document.createElement('div');
notepad.innerHTML = `<div class="container">
        <div class="title">Notepad</div>
        <div class="buttons">
            <button class="button" id="NotepadminimizeBtn">-</button>
            <button class="button" id="maximizeBtn">
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
noteOpen.addEventListener('click', noteOpenHandler);

NotepadcloseBtn.addEventListener('click',NotepadcloseBtnHandler);
NotepadminimizeBtn.addEventListener('click',NotepadcloseBtnHandler)