document.getElementById('clean').addEventListener('click', () =>{
    document.getElementById('input').value = '';
    document.getElementById('click').style.display = 'none';
});

document.getElementById('search').addEventListener('click', () =>{
    window.location.href = `https://www.google.com/search?q=${document.getElementById('input').value}`
});