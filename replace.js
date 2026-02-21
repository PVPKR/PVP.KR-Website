const fs = require('fs');

let c = fs.readFileSync('script.js', 'utf8');

c = c.replace(/\bcurrentLang === 'en' \? \(tour\.nameEn \|\| tour\.name\) : tour\.name\b/g, "currentLang === 'en' ? (tour.nameEn || t_name(tour.name)) : t_name(tour.name)");
c = c.replace(/\bcurrentLang === 'en' \? \(tournament\.nameEn \|\| tournament\.name\) : tournament\.name\b/g, "currentLang === 'en' ? (tournament.nameEn || t_name(tournament.name)) : t_name(tournament.name)");

// renderPlayerDetails
c = c.replace(/<h1 class="text-5xl font-black text-\[var\(--text-heading\)\]">\$\{player\.name\}<\/h1>/g, '<h1 class="text-5xl font-black text-[var(--text-heading)]">${t_name(player.name)}</h1>');

// renderPlayersDirectory
c = c.replace(/<h3 class="text-xl font-black text-\[var\(--text-heading\)\] group-hover:text-purple-400 transition-colors">\$\{p\.name\}<\/h3>/g, '<h3 class="text-xl font-black text-[var(--text-heading)] group-hover:text-purple-400 transition-colors">${t_name(p.name)}</h3>');

// bracket quarterfinals/semifinals/final
c = c.replace(/<span class="mr-1">\$\{getBracketEmoji\(match\.player1\)\}<\/span>\$\{match\.player1\}/g, '<span class="mr-1">${getBracketEmoji(match.player1)}</span>${t_name(match.player1)}');
c = c.replace(/<span class="mr-1">\$\{getBracketEmoji\(match\.player2\)\}<\/span>\$\{match\.player2\}/g, '<span class="mr-1">${getBracketEmoji(match.player2)}</span>${t_name(match.player2)}');

c = c.replace(/<span class="mr-1">\$\{getBracketEmoji\(tournament\.bracket\.final\.player1\)\}<\/span>\$\{tournament\.bracket\.final\.player1\}/g, '<span class="mr-1">${getBracketEmoji(tournament.bracket.final.player1)}</span>${t_name(tournament.bracket.final.player1)}');
c = c.replace(/<span class="mr-1">\$\{getBracketEmoji\(tournament\.bracket\.final\.player2\)\}<\/span>\$\{tournament\.bracket\.final\.player2\}/g, '<span class="mr-1">${getBracketEmoji(tournament.bracket.final.player2)}</span>${t_name(tournament.bracket.final.player2)}');

// Standings row
c = c.replace(/<span class="font-extrabold text-\[var\(--text-main\)\]">\$\{s\.player\}<\/span>/g, '<span class="font-extrabold text-[var(--text-main)]">${t_name(s.player)}</span>');

c = c.replace(/<span class="font-extrabold text-\[var\(--text-main\)\] cursor-pointer hover:text-purple-500 transition" onclick="showPlayerDetails\('\\$\\{s\.player\\}'\)">\$\{s\.player\}<\/span>/g, '<span class="font-extrabold text-[var(--text-main)] cursor-pointer hover:text-purple-500 transition" onclick="showPlayerDetails(\\'${ s.player }\\')">${t_name(s.player)}</span>');

fs.writeFileSync('script.js', c);
console.log('Replacements completed.');
