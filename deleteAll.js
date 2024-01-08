function deleteAll() {

    var meineListe = document.getElementById('itemList');
    var gesamtPreis = document.getElementById('gesamtpreis')
    meineListe.innerHTML = ''; // Setze den HTML-Inhalt der Liste auf einen leeren String, um sie zu löschen
    gesamtPreis.innerHTML = '';
    
    localStorage.clear();
    
};

