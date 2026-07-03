const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');
const themeToggle = document.getElementById('themeToggle');
const fontSelector = document.getElementById('fontSelector');
const historyDiv = document.getElementById('history');
const audioPlayer = document.getElementById('audioPlayer');

const debounce = (fn, delay) => {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
};

const playAudio = (url) => {
    audioPlayer.src = url;
    audioPlayer.play();
};

const searchWord = async (word) => {
    const cleanWord = word.trim();
    if (!cleanWord) return;
    
    resultDiv.innerHTML = `<p>Buscando...</p>`;
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
        const data = await res.json();
        
        if (data.title) {
            resultDiv.innerHTML = `<p>Palabra no encontrada.</p>`;
            return;
        }

        const entry = data[0];
        const audioUrl = entry.phonetics.find(p => p.audio)?.audio;
        
        let htmlContent = `<div class="result-card"><h2>${entry.word}</h2>`;
        if (audioUrl) htmlContent += `<button onclick="playAudio('${audioUrl}')">🔊 Escuchar pronunciación</button>`;

        entry.meanings.forEach(m => {
            htmlContent += `<h3>${m.partOfSpeech}</h3><ul>`;
            m.definitions.forEach(def => htmlContent += `<li>${def.definition}</li>`);
            if (m.synonyms.length > 0) htmlContent += `<p><strong>Sinónimos:</strong> ${m.synonyms.slice(0, 5).join(', ')}</p>`;
            htmlContent += `</ul>`;
        });

        if (entry.sourceUrls) {
            htmlContent += `<p><strong>Fuente:</strong> <a href="${entry.sourceUrls[0]}" target="_blank" rel="noopener noreferrer">Dictionary API</a></p>`;
        }
        
        resultDiv.innerHTML = htmlContent + `</div>`;
        addToHistory(entry.word);
    } catch (e) {
        resultDiv.innerHTML = `<p>Error de conexión al servidor.</p>`;
    }
};

const addToHistory = (word) => {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(word)) {
        history.unshift(word);
        if (history.length > 5) history.pop();
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
    renderHistory();
};

const renderHistory = () => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    historyDiv.innerHTML = history.length > 0 ? `<span>Recientes: </span>` + history.map(w => `<button onclick="searchWord('${w}')">${w}</button>`).join('') : '';
};

searchInput.addEventListener('input', debounce((e) => searchWord(e.target.value), 500));
themeToggle.onclick = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
};
fontSelector.onchange = (e) => document.body.style.fontFamily = e.target.value;

renderHistory();