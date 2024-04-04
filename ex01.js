let hora = Number(prompt('Digite a hora'))

if (hora >= 6 && hora < 12) {
    document.write("Bom dia");
} else if (hora >= 6 && 12 < hora) {
    document.write("Boa tarde!");
} else {
    document.write("Boa noite!");
}
