
var BookmarkInput = document.getElementById('BookmarkInput');
var websiteInput = document.getElementById('websiteInput');
var tbody = document.getElementById('tbody');


if (localStorage.getItem('BookMarkdate') !== null) {
    var BookMarkarray = JSON.parse(localStorage.getItem('BookMarkdate'));
    var allBookMark = BookMarkarray;
    Displaytable();
}

else {
    var allBookMark = [];
}


//*****************************************************************************//


function creatBookmark() {

    BookMark = {
        BookMarkname: BookmarkInput.value,
        webSiteURL: websiteInput.value
    }



    if (BookMark.BookMarkname.length < 4) {
        alert('less than 4 letter');
    }

    else if (websiteInput.value.includes('.com')) {
        allBookMark.push(BookMark);

        var stringDate = JSON.stringify(allBookMark);
        // console.log(stringDate);
        localStorage.setItem('BookMarkdate', stringDate);
        RetriveBookMark();
    }

    else {
        alert('add .com');
    }


    console.log(BookMark);
    console.log(allBookMark);

}

//*****************************************************************************//


function clearBookMark() {

    BookmarkInput.value = "";
    websiteInput.value = "";

}


//*****************************************************************************//


function RetriveBookMark() {
    var trs = "";
    for (var i = 0; i < allBookMark.length; i++) {
        trs = `<tr>
        <td>${i + 1}</td>
        <td>${allBookMark[i].BookMarkname}</td>
        <td>
        <a href="https://${allBookMark[i].webSiteURL}" target="_blank"> <button class="lasboot btn btn-primary">
        <i class="fa-solid fa-eye pe-2"></i> Visit
        </button></a>
        </td>
        <td> 
         <button onclick="DeleteBookMark(${i})" class="lasboot2 btn btn-danger">
         <i class="fa-solid fa-trash-can"></i> Delete
        </button>
        </td>
        </tr>`
    }
    tbody.innerHTML += trs;
    console.log(trs);
}

//*****************************************************************************//

function Displaytable() {
    var trs = "";
    for (var i = 0; i < allBookMark.length; i++) {
        trs += `<tr>
        <td>${i + 1}</td>
        <td>${allBookMark[i].BookMarkname}</td>
        <td>
        <a href="https://${allBookMark[i].webSiteURL}" target="_blank"> <button class="lasboot btn btn-primary">
        <i class="fa-solid fa-eye pe-2"></i> Visit
        </button></a>
        </td>
        <td> 
         <button onclick="DeleteBookMark(${i})" class="lasboot2 btn btn-danger">
         <i class="fa-solid fa-trash-can"></i> Delete
        </button>
        </td>
        </tr>`
    }
    tbody.innerHTML = trs;
    console.log(trs);
}

//*****************************************************************************//


function DeleteBookMark(index) {
    allBookMark.splice(index, 1);
    Displaytable();

    localStorage.setItem('BookMarkdate', JSON.stringify(allBookMark));
}


//*****************************************************************************//






