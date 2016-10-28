


var myAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt(inputText) {
    
    var originalText = inputText.toLowerCase();
    var encryptedText = "";
    var i, j, newIndex = 0;
    
    for (i = 0; i < originalText.length; i++) {
            for (j = 0; j < myAlphabet.length; j++) {
            if (originalText[i] == myAlphabet[j]) {
                newIndex = j + 6;
                if (newIndex > myAlphabet.length - 1) {
                    newIndex %= 26;
                }
                encryptedText += myAlphabet[newIndex];
            } else if (originalText[i] == ' ') {
                encryptedText += originalText[i];
                break;
            }
        }
    }
    return encryptedText;
}

function performEncryption() {
    var originalText = document.getElementById('original-ta').value;
    var encryptedText = encrypt(originalText);
    document.getElementById('original-ta').value = encryptedText;
}

function decrypt(inputText) {
    
    var originalText = inputText.toLowerCase();
    var decryptedText = "";
    var i, j, newIndex = 0;
    
    for (i = 0; i < originalText.length; i++) {
            for (j = 0; j < myAlphabet.length; j++) {
            if (originalText[i] == myAlphabet[j]) {
                newIndex = j - 6;
                if (newIndex < 0) {
                    newIndex += 26;
                }
                decryptedText += myAlphabet[newIndex];
            } else if (originalText[i] == ' ') {
                decryptedText += originalText[i];
                break;
            }
        }
    }
    return decryptedText;
}

function performDecryption() {
    var encryptedText = document.getElementById('encrypted-ta').value;
    var decryptedText = decrypt(encryptedText);
    document.getElementById('encrypted-ta').value = decryptedText;
}

function resetTextArea(textAreaId) {
    document.getElementById(textAreaId).value = "";
}