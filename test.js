const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Mock data
global.tournaments = [{ id: 1, location: '서울 마포 롤링다이스', participants: 10 }];
global.braveLeagueTournaments = [];
global.playerDatabase = { 'Alice': { finishes: [] }, 'Bob': { finishes: [] } };
global.isAnonymousPlayer = () => false;
global.t = (k) => k;
global.currentLang = 'ko';

global.document = {
    getElementById: (id) => {
        if (id === 'players-map-container') return global.mockContainer;
        if (id === 'detail-view') return global.mockDetailView;
        if (id === 'main-view') return { classList: { add: () => { }, remove: () => { } } };
        return null;
    },
    querySelectorAll: () => []
};

global.window = {
    scrollTo: () => { },
    location: { hash: '' },
    addEventListener: () => { }
};

global.mockContainer = { innerHTML: '' };
global.mockDetailView = {
    set innerHTML(val) { this._val = val; },
    get innerHTML() { return this._val; },
    classList: { add: () => { }, remove: () => { } }
};

try {
    eval(code);
    renderPlayersDirectory();
    console.log("Success! Map HTML Length:", global.mockContainer.innerHTML.length);
    console.log("Detail HTML Length:", global.mockDetailView.innerHTML.length);
} catch (e) {
    console.error("FATAL ERROR:", e);
}
