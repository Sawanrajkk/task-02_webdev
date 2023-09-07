const colorPicker = document.getElementById('colorPicker');
const generateManualButton = document.getElementById('generateManual');
const generateRandomButton = document.getElementById('generateRandom');
const generatedColor = document.getElementById('generatedColor');
const copyButton = document.getElementById('copyButton');

function updateBackgroundColorManually() {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    generatedColor.textContent = selectedColor;
}

function generateRandomColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    generatedColor.textContent = randomColor;
}

function copyToClipboard() {
    const textToCopy = generatedColor.textContent;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to clipboard: ' + textToCopy);
}

colorPicker.addEventListener('input', updateBackgroundColorManually);
generateManualButton.addEventListener('click', updateBackgroundColorManually);
generateRandomButton.addEventListener('click', generateRandomColor);
copyButton.addEventListener('click', copyToClipboard);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
