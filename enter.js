function handleKeyPress(event) {
    // Überprüfen Sie, ob die gedrückte Taste die Enter-Taste ist (keyCode 13)
    if (event.keyCode === 13) {
        addItem();
    }
}