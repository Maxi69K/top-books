// Top Books
const  tbody = document.getElementById('tbody');
const xml = new XMLHttpRequest();
xml.open(
  'GET',
  'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=NGGzU13YlFGhVDYqwTMU1IORVMjHrjAr'
);
xml.addEventListener('readystatechange', () => {
    if (xml.readyState === 4 && xml.status === 200) {
        displayTable();
    }
})
xml.send();

function displayTable() {
    let data = JSON.parse(xml.responseText);
    let text = '';

    for (let i = 0; i < data.num_results; i++) {
        text += '<tr>';
        text += `<td>${i + 1}</td>`;
        text += `<td>${data.results.books[i].title}</td>`;
        text += `<td>${data.results.books[i].author}</td>`;
        text += `<td>${data.results.books[i].publisher}</td>`;
        text += `<td><a href="${data.results.books[i].amazon_product_url}" class="btn btn-sm btn-info" target="_blank"</a>buy</td>`;
        text += '</tr>';
    }
    
    tbody.innerHTML = text;
}
