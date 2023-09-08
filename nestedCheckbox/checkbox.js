let checkboxData = [
    {
        "id": 2,
        "text": "Electronics",
        "expanded": true,
        "spriteCssClass": "folder",
        "items": [
            {
                "id": 3,
                "text": "TV",
                "spriteCssClass": "html"
            },
            {
                "id": 4,
                "text": "Mobile",
                "spriteCssClass": "html"
            },
            {
                "id": 5,
                "text": "Tablets",
                "spriteCssClass": "image"
            }
        ]
    },
    {
        "id": 2,
        "text": "Vegetables",
        "expanded": true,
        "spriteCssClass": "folder",
        "items": [
            {
                "id": 3,
                "text": "Carrot",
                "spriteCssClass": "html"
            },
            {
                "id": 4,
                "text": "Capsicum",
                "spriteCssClass": "html"
            },
            {
                "id": 5,
                "text": "Brinjal",
                "spriteCssClass": "image"
            }
        ]
    }
]



let parent = document.querySelector('#parent');
let subCheckbox = document.querySelectorAll('.suboption');
// for (let i = 0; i < subCheckbox.length; i++) {
//     subCheckbox[i].onclick = function () {
//         let checkedCount = document.querySelectorAll('.suboption:checked').length;
//         parent.checked = checkedCount > 0;
//         parent.indeterminate = checkedCount > 0 && checkedCount < subCheckbox.length;
//     }

// }

// parent.onclick = function () {
//     let checkedCount = document.querySelectorAll('#parent:checked').length;
//     for (let i = 0; i < subCheckbox.length; i++) {
//         subCheckbox[i].checked = checkedCount > 0;
//     }
// }


// for dynamic checkbox creation
let body = document.getElementById('body');
body.addEventListener('change', checkClicked);


let rawHTML = checkboxData.map((element, i) => {
    let x = `<ul><li><input type="checkbox" id="parent${i}"><label for="parent${i}">${element.text}</label></li>`;

    let child = element.expanded ? element.items.map((e, index) => {
        return `<li><label><input type="checkbox" class="suboption-parent${i}">${e.text}</label></li>`
    }) : x += '</ul>';
    x = x + '<ul>' + child.join('') + '</ul></ul>'
    return x;

});

function checkClicked(e) {
    console.log(e.target);
    let clickedCheckboxId = e.target.getAttribute('id');
    if (!clickedCheckboxId) {
        let cildclass = e.target.getAttribute('class')
        let clickedCheckId = cildclass.replace('suboption-', '');
        console.log(clickedCheckId)
        let parentChecked = document.querySelector(`#${clickedCheckId}`);
        let childCheckedCount = document.querySelectorAll(`.suboption-${clickedCheckId}:checked`).length;
        console.log(childCheckedCount);
        let childCount = document.querySelectorAll(`.suboption-${clickedCheckId}`).length;
        console.log(childCheckedCount > 0 && childCount === childCheckedCount);
        parentChecked.indeterminate = childCheckedCount > 0 && childCount !== childCheckedCount;
        parentChecked.checked = childCheckedCount > 0 && childCount === childCheckedCount;
    } else {
        let parentChecked = document.querySelectorAll(`#${clickedCheckboxId}:checked`);
        let child = document.querySelectorAll(`.suboption-${clickedCheckboxId}`);
        child.forEach((e, i) => {
            child[i].checked = parentChecked.length > 0;
        });
    }

}

console.log(rawHTML.join(''));
document.body.insertAdjacentHTML('afterbegin', rawHTML.join(''))
