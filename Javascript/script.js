showNotes();

// If user enter title in our site then
let titleBtn = document.getElementById('addBtn')
titleBtn.addEventListener('click', function(e) {
    let addTitle = document.getElementById('addTitle')
    let title = localStorage.getItem('title')
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')
    let newDate = new Date()
    let date = newDate.toLocaleDateString()
    let timeNew = newDate.toLocaleTimeString()
    let time = localStorage.getItem('time')
    let exactPeriod = `Saved this on${date} at ${timeNew}`;
    let important = localStorage.getItem('important')
    let importantDum = localStorage.getItem('importantDum')


    if (time == null) {
        timeObj = []
    } else {
        timeObj = JSON.parse(time)
    }

    if (title == null) {
        tObj = [];
    } else {
        tObj = JSON.parse(title);
    }
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if (important == null) {
        importantObj = [];
    } else {
        importantObj = JSON.parse(important)
    }
    if (importantDum == null) {
        importantDumObj = [];
    } else {
        importantDumObj = JSON.parse(importantDum)
    }
    console.log(`The date is ${date}`);
    timeObj.push(exactPeriod);
    importantObj.push('btn-outline-info');
    importantDumObj.push('btn-outline-danger');
    let TitleValue = addTitle.value;
    tObj.push(TitleValue);
    let pushValue = addTxt.value;
    notesObj.push(pushValue);

    localStorage.setItem("title", JSON.stringify(tObj))
    localStorage.setItem("important", JSON.stringify(importantObj))
    localStorage.setItem("importantDum", JSON.stringify(importantDumObj))
    addTitle.value = " ";
    localStorage.setItem("notes", JSON.stringify(notesObj))
    localStorage.setItem("time", JSON.stringify(timeObj))
    addTxt.value = " ";
    location.reload()
})


// Function to showElement from LocalStorage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let title = localStorage.getItem('title')

    if (title == null) {
        tObj = [];
    } else {
        tObj = JSON.parse(title);
    }
    // var date = new Date()

    let time = localStorage.getItem('time')

    if (time == null) {
        timeObj = []
    } else {
        timeObj = JSON.parse(time)
    }
    let important = localStorage.getItem('important')

    if (important == null) {
        timeObj = []
    } else {
        importantObj = JSON.parse(important)
    }

    let html = '';
    notesObj.forEach(function(element, index) {


        html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;margin:10px 20px">
        <div class="card-body" style='height:auto;'>
            <h5 class="card-title titleSearch">${tObj[index]}</h5>
            <p class="card-text notes edit-element">${element}</p>
            <button href="" id="${index}" onclick='deleteNote(this.id)'  type='button' style='margin:10px 0px;display:block;'class="btn btn-outline-primary container">Delete Note</button>
            <button href="" id="${index}" onclick='edit(this.id)'  type='button' style='margin:10px auto;width:110px;'class="btn btn-outline-warning" >Edit Note</button>
            <button href="" id="${index}" onclick='save(this.id)'  type='button' style='margin:10px auto;width:110px;'class="btn btn-outline-success">Save Note</button>
            <button href="" id="${index}" onclick='important(this.id)' type='button'  style='display:block;margin:0px 0px;'class='btn ${importantObj[index]} container'>Mark as Important</button>
            </div>
            <div class="card-footer text-muted">
           ${timeObj[index]}
          </div>
    </div>
        `
    });
    let notesElm = document.getElementById('notes');
    // 
    let noteChecker = document.getElementById('noteContent')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

        noteChecker.innerHTML = '<i>Here are your added notes</i>'
    } else {
        noteChecker.innerHTML = '<i>You have nothing here! Add Notes</i>'
    }
}

// Function to mark as Important
function important(importantValue) {

    let importantDum = localStorage.getItem('importantDum')

    if (importantDum == null) {
        importantDumObj = [];
    } else {
        importantDumObj = JSON.parse(importantDum)
    }
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let title = localStorage.getItem('title')

    if (title == null) {
        tObj = [];
    } else {
        tObj = JSON.parse(title);
    }
    // var date = new Date()

    let time = localStorage.getItem('time')

    if (time == null) {
        timeObj = []
    } else {
        timeObj = JSON.parse(time)
    }
    let important = localStorage.getItem('important')

    if (important == null) {
        timeObj = []
    } else {
        importantObj = JSON.parse(important)
    }

    importantObj[importantValue] = "btn-danger";
    notesObj.unshift(notesObj[importantValue])
    timeObj.unshift(timeObj[importantValue])
    tObj.unshift(tObj[importantValue])
    importantObj.unshift(importantObj[importantValue])
        // notesObj.splice(, 1);
    var add = parseInt(importantValue) + 1
    tObj.splice(add, 1);
    timeObj.splice(add, 1);
    notesObj.splice(add, 1);
    importantObj.splice(add, 1);
    console.log(add)

    localStorage.setItem('important', JSON.stringify(importantObj));
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem('time', JSON.stringify(timeObj));
    localStorage.setItem("title", JSON.stringify(tObj));

    showNotes()

}
// Function to delete a note
function deleteNote(anyValue) {
    console.log(anyValue);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(anyValue, 1);
    let title = localStorage.getItem('title')

    if (title == null) {
        tObj = [];
    } else {
        tObj = JSON.parse(title);
    }
    tObj.splice(anyValue, 1);

    let time = localStorage.getItem('time')

    if (time == null) {
        timeObj = []
    } else {
        timeObj = JSON.parse(time)
    }
    timeObj.splice(anyValue, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("title", JSON.stringify(tObj));
    localStorage.setItem("time", JSON.stringify(timeObj));
    if (notesObj.length == 0) {
        console.log('0');
        location.reload()

    }
    showNotes();
}

// Searching Box
let searchTxt = document.getElementById('searchTxt');
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', function(e) {

        let notes = localStorage.getItem('notes');
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes);
        }

        let title = localStorage.getItem('title')

        if (title == null) {
            tObj = [];
        } else {
            tObj = JSON.parse(title);
        }

        let checker = searchTxt.value;

        for (let i = 0; i < notesObj.length; i++) {

            let ch = document.getElementsByClassName('notes')[i].innerText.toLowerCase().indexOf(checker.toLowerCase())
            let many = document.querySelectorAll('.noteCard')
            let searchTitle = document.getElementsByClassName('titleSearch')[i].innerText.toLowerCase().indexOf(checker.toLowerCase())

            if (ch > -1) {
                many[i].style.display = '';
            } else {
                many[i].style.display = 'none';
            }

            if (searchTitle > -1) {
                many[i].style.display = '';
            } else {
                many[i].style.display = 'none';

            }
        }
    })
    // Searching Box
    // let searchTxt = document.getElementById('searchTxt');
    // Page Scroller
const scroll = document.querySelector("#scrollToTop");

scroll.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behaviour: "smooth",
        });
    })
    // Edi t
function edit(editValue) {
    var edit = document.querySelectorAll('.edit-element')
    edit[editValue].setAttribute('contenteditable', 'true');
    console.log(edit[1].setAttribute('contenteditable', 'true'));
}

function save(saveValue) {
    var edit = document.querySelectorAll('.edit-element')
    edit[saveValue].setAttribute('contenteditable', 'false');

    let add2 = parseInt(saveValue) + 1
    let newElement = document.querySelector(`#notes > div:nth-child(${add2}) > div.card-body > p`).innerText;

    console.log(newElement);
    // var hi = edit[saveValue].innerText
    let notes = localStorage.getItem('notes')

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj[saveValue] = newElement

    localStorage.setItem("notes", JSON.stringify(notesObj))

}