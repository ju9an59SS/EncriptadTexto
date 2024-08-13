document.getElementById('enc-btn').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje').value;
    const desplazamiento = generateRandomShift();
    localStorage.setItem('desplazamiento', desplazamiento);
    document.getElementById('resultado').innerText = caesarCipher(mensaje, desplazamiento);
});

document.getElementById('dec-btn').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje').value;
    const desplazamiento = parseInt(localStorage.getItem('desplazamiento'), 10) || 0;
    document.getElementById('resultado').innerText = caesarCipher(mensaje, -desplazamiento);
});

document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('mensaje').value = '';
    document.getElementById('resultado').innerText = '';
    localStorage.removeItem('desplazamiento');
});

function generateRandomShift() {
    return Math.floor(Math.random() * 25) + 1;
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (/[a-zA-Z]/.test(char)) {
            const code = char.charCodeAt();
            const offset = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - offset + shift) % 26 + 26) % 26 + offset);
        }
        return char;
    }).join('');
}
