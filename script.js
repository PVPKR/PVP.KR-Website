// --- Data ---
const topDecks = [
    { id: 1, name: '녹색 덱', usage: (3 / 16 * 100).toFixed(1), winRate: (3 / 3 * 100).toFixed(1), mainCard: 'deck_green.webp', deckCount: 3, color: '#10b981' },
    { id: 2, name: '황색 덱', usage: (6 / 16 * 100).toFixed(1), winRate: (2 / 6 * 100).toFixed(1), mainCard: 'deck_yellow.webp', deckCount: 6, color: '#fbbf24' },
    { id: 3, name: '청색 덱', usage: (5 / 16 * 100).toFixed(1), winRate: (3 / 5 * 100).toFixed(1), mainCard: 'deck_blue.webp', deckCount: 5, color: '#3b82f6' },
    { id: 4, name: '적색 덱', usage: (2 / 16 * 100).toFixed(1), winRate: (1 / 2 * 100).toFixed(1), mainCard: 'deck_red.webp', deckCount: 2, color: '#ef4444' }
];

const tournaments = [{
    id: 1, name: '25-26 윈터 챔피언 컵', date: '2026-01-18', status: 'completed', participants: 78, location: '서울',
    standings: [
        { rank: 1, player: '전시우', deck: '녹색 덱', score: '9-1', swissRank: 14, prize: '₩2,000,000', country: 'KR', deckList: 'https://cookierunbraverse.com/ko/decks/657' },
        { rank: 2, player: '김민서', deck: '녹색 덱', score: '8-2', swissRank: 4, prize: '₩1,000,000', country: 'KR', deckList: 'https://cookierunbraverse.com/ko/decks/658' },
        { rank: 3, player: '류지현', deck: '청색 덱', score: '7-2', swissRank: 8, prize: '₩600,000', country: 'KR' },
        { rank: 4, player: '김영진', deck: '황색 덱', score: '7-2', swissRank: 2, prize: '₩400,000', country: 'KR' },
        { rank: 5, player: '황정빈', deck: '녹색 덱', score: '6-2', swissRank: 16, country: 'KR' },
        { rank: 6, player: '김지훈', deck: '적색 덱', score: '6-2', swissRank: 5, country: 'KR' },
        { rank: 7, player: '이충현', deck: '황색 덱', score: '6-2', swissRank: 6, country: 'KR' },
        { rank: 8, player: '정기영', deck: '청색 덱', score: '6-2', swissRank: 10, country: 'KR' },
        { rank: 9, player: '강병렬', deck: '적색 덱', score: '6-1', swissRank: 1, country: 'KR' },
        { rank: 10, player: '이창민', deck: '청색 덱', score: '4-3', swissRank: 9, country: 'KR' },
        { rank: 11, player: '이희지', deck: '청색 덱', score: '4-3', swissRank: 12, country: 'KR' },
        { rank: 12, player: '임정훈', deck: '황색 덱', score: '4-3', swissRank: 13, country: 'KR' },
        { rank: 13, player: '이주호', deck: '황색 덱', score: '5-2', swissRank: 3, country: 'KR' },
        { rank: 14, player: '이태연', deck: '녹색 덱', score: '4-3', swissRank: 11, country: 'KR' },
        { rank: 15, player: '박창남', deck: '청색 덱', score: '5-2', swissRank: 7, country: 'KR' },
        { rank: 16, player: '이혁준', deck: '청색 덱', score: '4-3', swissRank: 15, country: 'KR' }
    ]
}, {
    id: 101, name: '브레이브 리그 - 서울 마포 롤링다이스', date: '2026-02-01', status: 'completed', participants: 18, location: '서울 마포',
    deckDistribution: { '녹색 덱': 9, '청색 덱': 3, '적색 덱': 2, '자색 덱': 2, '황색 덱': 1, '혼색 덱': 1 },
    topCutDistribution: { '녹색 덱': 4 },
    bracket: {
        semifinals: [
            { player1: '황현우', player2: '이태석', winner: '황현우' },
            { player1: '김세진', player2: '고윤성', winner: '고윤성' }
        ],
        final: { player1: '황현우', player2: '고윤성', winner: '고윤성' }
    },
    standings: [
        { rank: 1, player: '고윤성', deck: '녹색 덱', score: '4-1', swissRank: 3, country: 'KR', deckList: 'https://cookierunbraverse.com/ko/decks/1517' },
        { rank: 2, player: '황현우', deck: '녹색 덱', score: '5-0', swissRank: 1, country: 'KR' },
        { rank: 3, player: '김세진', deck: '녹색 덱', score: '4-1', swissRank: 2, country: 'KR' },
        { rank: 4, player: '이태석', deck: '녹색 덱', score: '4-1', swissRank: 4, country: 'KR' },
        { rank: 5, player: '이현수', deck: '청색 덱', score: '3-2', swissRank: 5, country: 'KR' },
        { rank: 6, player: '윤세호', deck: '청색 덱', score: '3-2', swissRank: 6, country: 'KR' },
        { rank: 7, player: '이주영', deck: '녹색 덱', score: '2-3', swissRank: 7, country: 'KR' },
        { rank: 8, player: '이준희', deck: '적색 덱', score: '2-3', swissRank: 8, country: 'KR' },
        { rank: 9, player: '전시우', deck: '녹색 덱', score: '2-3', swissRank: 9, country: 'KR' },
        { rank: 10, player: '김정기', deck: '적색 덱', score: '2-3', swissRank: 10, country: 'KR' },
        { rank: 11, player: '장진영', deck: '혼색 덱', score: '2-3', swissRank: 11, country: 'KR' },
        { rank: 12, player: '장세현', deck: '자색 덱', score: '2-3', swissRank: 12, country: 'KR' },
        { rank: 13, player: '임정섭', deck: '녹색 덱', score: '1-4', swissRank: 13, country: 'KR' }
    ]
}, {
    id: 102, name: '브레이브 리그 - 서울 구로 어바웃티씨지', date: '2026-02-01', status: 'completed', participants: 21, location: '서울 구로',
    deckDistribution: { '녹색 덱': 10, '황색 덱': 4, '청색 덱': 3, '적색 덱': 2, '자색 덱': 1, '혼색 덱': 1 },
    topCutDistribution: { '녹색 덱': 5, '황색 덱': 2, '청색 덱': 1 },
    bracket: {
        quarterfinals: [
            { player1: '황현우', player2: '전시우', winner: '황현우' },
            { player1: '정선우', player2: '이주호', winner: '이주호' },
            { player1: '김선규', player2: '이주영', winner: '이주영' },
            { player1: '이태연', player2: '소재현', winner: '이태연' }
        ],
        semifinals: [
            { player1: '황현우', player2: '이주호', winner: '황현우' },
            { player1: '이주영', player2: '이태연', winner: '이주영' }
        ],
        final: { player1: '황현우', player2: '이주영', winner: '이주영' }
    },
    standings: [
        { rank: 1, player: '이주영', deck: '녹색 덱', score: '3-1', swissRank: 6, country: 'KR', deckList: 'https://cookierunbraverse.com/ko/decks/1518' },
        { rank: 2, player: '황현우', deck: '녹색 덱', score: '4-0', swissRank: 1, country: 'KR' },
        { rank: 3, player: '이태연', deck: '녹색 덱', score: '4-0', swissRank: 2, country: 'KR' },
        { rank: 4, player: '이주호', deck: '황색 덱', score: '3-1', swissRank: 5, country: 'KR' },
        { rank: 5, player: '김선규', deck: '녹색 덱', score: '3-1', swissRank: 3, country: 'KR' },
        { rank: 6, player: '정선우', deck: '황색 덱', score: '3-1', swissRank: 4, country: 'KR' },
        { rank: 7, player: '소재현', deck: '청색 덱', score: '3-1', swissRank: 7, country: 'KR' },
        { rank: 8, player: '전시우', deck: '녹색 덱', score: '2-2', swissRank: 8, country: 'KR' },
        { rank: 9, player: '박현우', deck: '황색 덱', score: '2-2', swissRank: 9, country: 'KR' },
        { rank: 10, player: '임정섭', deck: '적색 덱', score: '2-2', swissRank: 10, country: 'KR' },
        { rank: 11, player: '이현수', deck: '청색 덱', score: '2-2', swissRank: 11, country: 'KR' },
        { rank: 12, player: '이태석', deck: '황색 덱', score: '2-2', swissRank: 12, country: 'KR' },
        { rank: 13, player: '김민서', deck: '녹색 덱', score: '2-2', swissRank: 13, country: 'KR' },
        { rank: 14, player: '오민우', deck: '녹색 덱', score: '1-3', swissRank: 14, country: 'KR' },
        { rank: 15, player: '이형로', deck: '청색 덱', score: '1-3', swissRank: 15, country: 'KR' },
        { rank: 16, player: '강병렬', deck: '적색 덱', score: '1-3', swissRank: 16, country: 'KR' },
        { rank: 17, player: '장진영', deck: '혼색 덱', score: '1-3', swissRank: 17, country: 'KR' },
        { rank: 18, player: '이가온', deck: '녹색 덱', score: '1-3', swissRank: 18, country: 'KR' },
        { rank: 19, player: '이준희', deck: '녹색 덱', score: '1-3', swissRank: 19, country: 'KR' }
    ]
}, {
    id: 2, name: '2025 썸머 챔피언컵', date: '2025-07-13', status: 'completed', participants: 73, location: '서울',
    standings: [
        { rank: 1, player: '박상진', deck: '자색 덱', score: '8-2', swissRank: 10, country: 'KR' },
        { rank: 2, player: '이주호', deck: '적색 덱', score: '9-1', swissRank: 1, country: 'KR' },
        { rank: 3, player: '이창섭', deck: '적색 덱', score: '6-3', swissRank: 13, country: 'KR' },
        { rank: 4, player: '장성용', deck: '적색 덱', score: '7-2', swissRank: 3, country: 'KR' },
        { rank: 5, player: '김선규', deck: '적색 덱', score: '5-3', swissRank: 9, country: 'KR' },
        { rank: 6, player: '허승주', deck: '녹색 덱', score: '6-2', swissRank: 5, country: 'KR' },
        { rank: 7, player: '이현수', deck: '녹색 덱', score: '5-3', swissRank: 11, country: 'KR' },
        { rank: 8, player: '송윤태', deck: '녹색 덱', score: '5-3', swissRank: 15, country: 'KR' },
        { rank: 9, player: '이준희', deck: '자색 덱', score: '4-3', swissRank: 16, country: 'KR' },
        { rank: 10, player: '최다현', deck: '황색 덱', score: '5-2', swissRank: 8, country: 'KR' },
        { rank: 11, player: '장하준', deck: '자색 덱', score: '4-3', swissRank: 12, country: 'KR' },
        { rank: 12, player: '오민우', deck: '적색 덱', score: '5-2', swissRank: 4, country: 'KR' },
        { rank: 13, player: '임정훈', deck: '황색 덱', score: '4-3', swissRank: 14, country: 'KR' },
        { rank: 14, player: '송경섭', deck: '적색 덱', score: '5-2', swissRank: 6, country: 'KR' },
        { rank: 15, player: '박성민', deck: '녹색 덱', score: '5-2', swissRank: 7, country: 'KR' },
        { rank: 16, player: '신재용', deck: '적색 덱', score: '5-2', swissRank: 2, country: 'KR' }
    ]
}, {
    id: 107, name: '브레이브 리그 - 서울 역삼 토너먼트센터', date: '2026-02-07', status: 'completed', participants: 11, location: '서울 역삼',
    topCutDistribution: { '녹색 덱': 2, '황색 덱': 1, '적색 덱': 1 },
    bracket: {
        semifinals: [
            { player1: '김태경', player2: '김민서', winner: '김민서' },
            { player1: '황상진', player2: '김지훈', winner: '황상진' }
        ],
        final: { player1: '김민서', player2: '황상진', winner: '김민서' }
    },
    standings: [
        { rank: 1, player: '김민서', deck: '녹색 덱', score: '3-0', swissRank: 4, country: 'KR' },
        { rank: 2, player: '황상진', deck: '황색 덱', score: '3-0', swissRank: 2, country: 'KR' },
        { rank: 3, player: '김태경', deck: '녹색 덱', score: '3-0', swissRank: 1, country: 'KR' },
        { rank: 4, player: '김지훈', deck: '적색 덱', score: '3-0', swissRank: 3, country: 'KR' },
        { rank: 5, player: '강병렬', deck: '적색 덱', score: '2-2', swissRank: 5, country: 'KR' },
        { rank: 6, player: '이준희', deck: '자색 덱', score: '2-2', swissRank: 6, country: 'KR' },
        { rank: 7, player: '이가온', deck: '녹색 덱', score: '2-2', swissRank: 7, country: 'KR' },
        { rank: 8, player: '이현수', deck: '자색 덱', score: '2-2', swissRank: 8, country: 'KR' },
        { rank: 9, player: '이태석', deck: '황색 덱', score: '1-3', swissRank: 9, country: 'KR' },
        { rank: 10, player: '이혁준', deck: '적색 덱', score: '1-3', swissRank: 10, country: 'KR' },
        { rank: 11, player: '김도현', deck: '황색 덱', score: '1-3', swissRank: 11, country: 'KR' }
    ]
}, {
    id: 105, name: '브레이브 리그 - 경기 부천 하비게임몰', date: '2026-02-07', status: 'completed', participants: 10, location: '경기 부천',
    topCutDistribution: { '녹색 덱': 3, '적색 덱': 2, '황색 덱': 2, '혼색 덱': 1 },
    bracket: {
        quarterfinals: [
            { player1: '김세진', player2: '황현우', winner: '황현우' },
            { player1: '김정기', player2: '최준하', winner: '김정기' },
            { player1: '이명준', player2: '장진영', winner: '이명준' },
            { player1: '전시우', player2: '임정섭', winner: '임정섭' }
        ],
        semifinals: [
            { player1: '황현우', player2: '김정기', winner: '김정기' },
            { player1: '이명준', player2: '임정섭', winner: '이명준' }
        ],
        final: { player1: '김정기', player2: '이명준', winner: '김정기' }
    },
    standings: [
        { rank: 1, player: '김세진', deck: '녹색 덱', score: '3-0', swissRank: 1, country: 'KR' },
        { rank: 2, player: '전시우', deck: '녹색 덱', score: '3-0', swissRank: 2, country: 'KR' },
        { rank: 3, player: '이명준', deck: '황색 덱', score: '2-1', swissRank: 3, country: 'KR' },
        { rank: 4, player: '김정기', deck: '적색 덱', score: '2-1', swissRank: 4, country: 'KR' },
        { rank: 5, player: '최준하', deck: '황색 덱', score: '2-1', swissRank: 5, country: 'KR' },
        { rank: 6, player: '장진영', deck: '혼색 덱', score: '1-2', swissRank: 6, country: 'KR' },
        { rank: 7, player: '임정섭', deck: '적색 덱', score: '1-2', swissRank: 7, country: 'KR' },
        { rank: 8, player: '황현우', deck: '녹색 덱', score: '1-2', swissRank: 8, country: 'KR' },
        { rank: 9, player: '김영진', deck: '황색 덱', score: '0-3', swissRank: 9, country: 'KR' },
        { rank: 10, player: '김광진', deck: '적색 덱', score: '0-3', swissRank: 10, country: 'KR' }
    ]
}, {
    id: 104, name: '브레이브 리그 - 부산 포춘팩토리', date: '2026-02-07', status: 'completed', participants: 10, location: '부산',
    topCutDistribution: { '청색 덱': 3, '적색 덱': 1 },
    bracket: {
        semifinals: [
            { player1: '이창섭', player2: '안민섭', winner: '안민섭' },
            { player1: '이재웅', player2: '주강은', winner: '이재웅' }
        ],
        final: { player1: '안민섭', player2: '이재웅', winner: '안민섭' }
    },
    standings: [
        { rank: 1, player: '이창섭', deck: '청색 덱', score: '3-0', swissRank: 1, country: 'KR' },
        { rank: 2, player: '이재웅', deck: '적색 덱', score: '2-1', swissRank: 2, country: 'KR' },
        { rank: 3, player: '주강은', deck: '청색 덱', score: '2-1', swissRank: 3, country: 'KR' },
        { rank: 4, player: '안민섭', deck: '청색 덱', score: '2-1', swissRank: 4, country: 'KR' },
        { rank: 5, player: '박진영', deck: '녹색 덱', score: '2-1', swissRank: 5, country: 'KR' },
        { rank: 6, player: '안성민', deck: '황색 덱', score: '1-2', swissRank: 6, country: 'KR' },
        { rank: 7, player: '류지현', deck: '청색 덱', score: '1-2', swissRank: 7, country: 'KR' },
        { rank: 8, player: '오승훈', deck: '적색 덱', score: '1-2', swissRank: 8, country: 'KR' },
        { rank: 9, player: '송경섭', deck: '적색 덱', score: '1-2', swissRank: 9, country: 'KR' },
        { rank: 10, player: '박태균', deck: '적색 덱', score: '0-3', swissRank: 10, country: 'KR' }
    ]
}, {
    id: 106, name: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', status: 'completed', participants: 7, location: '창원',
    topCutDistribution: { '적색 덱': 1, '황색 덱': 1, '청색 덱': 1, '녹색 덱': 1 },
    bracket: {
        semifinals: [
            { player1: '차주환', player2: '김지민', winner: '김지민' },
            { player1: '김동환', player2: '윤영진', winner: '김동환' }
        ],
        final: { player1: '김지민', player2: '김동환', winner: '김동환' }
    },
    standings: [
        { rank: 1, player: '차주환', deck: '황색 덱', score: '3-0', swissRank: 1, country: 'KR' },
        { rank: 2, player: '김동환', deck: '적색 덱', score: '2-1', swissRank: 2, country: 'KR' },
        { rank: 3, player: '윤영진', deck: '청색 덱', score: '2-1', swissRank: 3, country: 'KR' },
        { rank: 4, player: '김지민', deck: '녹색 덱', score: '2-1', swissRank: 4, country: 'KR' },
        { rank: 5, player: '순대', deck: '자색 덱', score: '1-2', swissRank: 5, country: 'KR' },
        { rank: 6, player: '정기영', deck: '청색 덱', score: '1-2', swissRank: 6, country: 'KR' },
        { rank: 7, player: '안현빈', deck: '적색 덱', score: '0-3', swissRank: 7, country: 'KR' }
    ]
}, {
    id: 109, name: '브레이브 리그 - 서울 구로 어바웃티씨지', date: '2026-02-08', status: 'completed', participants: 16, location: '서울 구로',
    deckDistribution: { '녹색 덱': 6, '적색 덱': 3, '황색 덱': 3, '청색 덱': 3, '자색 덱': 1 },
    topCutDistribution: { '녹색 덱': 4, '청색 덱': 2, '자색 덱': 1, '황색 덱': 1 },
    bracket: {
        quarterfinals: [
            { player1: '고윤성', player2: '황상진', winner: '고윤성' },
            { player1: '진시우', player2: '이태연', winner: '이태연' },
            { player1: '김도현', player2: '김민서', winner: '김도현' },
            { player1: '이주영', player2: '박성민', winner: '이주영' }
        ],
        semifinals: [
            { player1: '고윤성', player2: '이태연', winner: '고윤성' },
            { player1: '김도현', player2: '이주영', winner: '이주영' }
        ],
        final: { player1: '고윤성', player2: '이주영', winner: '고윤성' }
    },
    standings: [
        { rank: 1, player: '고윤성', deck: '녹색 덱', score: '3-0', swissRank: 1, country: 'KR' },
        { rank: 2, player: '이주영', deck: '녹색 덱', score: '3-0', swissRank: 2, country: 'KR' },
        { rank: 3, player: '김도현', deck: '청색 덱', score: '2-1', swissRank: 3, country: 'KR' },
        { rank: 4, player: '전시우', deck: '녹색 덱', score: '2-1', swissRank: 4, country: 'KR' },
        { rank: 5, player: '이태연', deck: '녹색 덱', score: '2-1', swissRank: 5, country: 'KR' },
        { rank: 6, player: '김민서', deck: '자색 덱', score: '2-1', swissRank: 6, country: 'KR' },
        { rank: 7, player: '박성민', deck: '청색 덱', score: '2-1', swissRank: 7, country: 'KR' },
        { rank: 8, player: '황상진', deck: '황색 덱', score: '2-1', swissRank: 8, country: 'KR' },
        { rank: 9, player: '박현우', score: '1-2', swissRank: 9, country: 'KR' },
        { rank: 10, player: '최진욱', score: '1-2', swissRank: 10, country: 'KR' },
        { rank: 11, player: '진수', score: '1-2', swissRank: 11, country: 'KR' },
        { rank: 12, player: '강병렬', score: '1-2', swissRank: 12, country: 'KR' },
        { rank: 13, player: '김종민', score: '1-2', swissRank: 13, country: 'KR' },
        { rank: 14, player: '이태석', score: '0-3', swissRank: 14, country: 'KR' },
        { rank: 15, player: '한상원', score: '0-3', swissRank: 15, country: 'KR' },
        { rank: 16, player: '왕현식', score: '0-3', swissRank: 16, country: 'KR' }
    ]
}, {
    id: 108, name: '브레이브 리그 - 부산 부산더락', date: '2026-02-08', status: 'completed', participants: 10, location: '부산',
    deckDistribution: { '황색 덱': 1, '녹색 덱': 3, '청색 덱': 3, '적색 덱': 3 },
    topCutDistribution: { '청색 덱': 3, '녹색 덱': 1 },
    bracket: {
        semifinals: [
            { player1: 'Player 2', player2: 'Player 3', winner: 'Player 2' },
            { player1: 'Player 4', player2: 'Player 1', winner: 'Player 1' }
        ],
        final: { player1: 'Player 2', player2: 'Player 1', winner: 'Player 1' }
    },
    standings: [
        { rank: 1, player: 'Player 1', deck: '녹색 덱', score: '-', swissRank: '-', country: 'KR' },
        { rank: 2, player: 'Player 2', deck: '청색 덱', score: '-', swissRank: '-', country: 'KR' },
        { rank: 3, player: 'Player 3', deck: '청색 덱', score: '-', swissRank: '-', country: 'KR' },
        { rank: 4, player: 'Player 4', deck: '청색 덱', score: '-', swissRank: '-', country: 'KR' },
        { rank: 5, player: 'Player 5', score: '-', swissRank: '-', country: 'KR' },
        { rank: 6, player: 'Player 6', score: '-', swissRank: '-', country: 'KR' },
        { rank: 7, player: 'Player 7', score: '-', swissRank: '-', country: 'KR' },
        { rank: 8, player: 'Player 8', score: '-', swissRank: '-', country: 'KR' },
        { rank: 9, player: 'Player 9', score: '-', swissRank: '-', country: 'KR' },
        { rank: 10, player: 'Player 10', score: '-', swissRank: '-', country: 'KR' }
    ]
}, {
    id: 103, name: '브레이브 리그 - 경기 평택 하비베이스', date: '2026-02-07', status: 'completed', participants: 0, location: '경기 평택',
    standings: []
}];

const playerDatabase = {
    '전시우': { name: '전시우', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 1, deck: '녹색 덱' }] },
    '김민서': { name: '김민서', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 2, deck: '녹색 덱' }] },
    '류지현': { name: '류지현', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 3, deck: '청색 덱' }] },
    '김영진': { name: '김영진', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 4, deck: '황색 덱' }] },
    '황정빈': { name: '황정빈', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 5, deck: '녹색 덱' }] },
    '김지훈': { name: '김지훈', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 6, deck: '적색 덱' }] },
    '이충현': { name: '이충현', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 7, deck: '황색 덱' }] },
    '정기영': { name: '정기영', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 8, deck: '청색 덱' }] },
    '강병렬': { name: '강병렬', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 9, deck: '적색 덱' }] },
    '이창민': { name: '이창민', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 10, deck: '청색 덱' }] },
    '이희지': { name: '이희지', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 11, deck: '청색 덱' }] },
    '임정훈': {
        name: '임정훈', country: 'KR', finishes: [
            { tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 12, deck: '황색 덱' },
            { tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 13, deck: '황색 덱' }
        ]
    },
    '이주호': {
        name: '이주호', country: 'KR', finishes: [
            { tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 13, deck: '황색 덱' },
            { tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 2, deck: '적색 덱' }
        ]
    },
    '이태연': { name: '이태연', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 14, deck: '녹색 덱' }] },
    '박창남': { name: '박창남', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 15, deck: '청색 덱' }] },
    '이혁준': { name: '이혁준', country: 'KR', finishes: [{ tournament: '25-26 윈터 챔피언 컵', date: '2026-01-18', rank: 16, deck: '청색 덱' }] },
    '박상진': { name: '박상진', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 1, deck: '자색 덱' }] },
    '이창섭': { name: '이창섭', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 3, deck: '적색 덱' }] },
    '장성용': { name: '장성용', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 4, deck: '적색 덱' }] },
    '김선규': { name: '김선규', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 5, deck: '적색 덱' }] },
    '허승주': { name: '허승주', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 6, deck: '녹색 덱' }] },
    '이현수': { name: '이현수', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 7, deck: '녹색 덱' }] },
    '송윤태': { name: '송윤태', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 8, deck: '녹색 덱' }] },
    '이준희': { name: '이준희', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 9, deck: '자색 덱' }] },
    '최다현': { name: '최다현', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 10, deck: '황색 덱' }] },
    '장하준': { name: '장하준', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 11, deck: '자색 덱' }] },
    '오민우': { name: '오민우', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 12, deck: '적색 덱' }] },
    '송경섭': { name: '송경섭', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 14, deck: '적색 덱' }] },
    '박성민': { name: '박성민', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 15, deck: '녹색 덱' }] },
    '신재용': { name: '신재용', country: 'KR', finishes: [{ tournament: '2025 썸머 챔피언컵', date: '2025-07-13', rank: 16, deck: '적색 덱' }] },
    '고윤성': {
        name: '고윤성', country: 'KR', finishes: [
            { tournament: '브레이브 리그 - 서울 마포 롤링다이스', date: '2026-02-01', rank: 1, deck: '녹색 덱' },
            { tournament: '브레이브 리그 - 서울 구로 어바웃티씨지', date: '2026-02-08', rank: 1, deck: '녹색 덱' }
        ]
    },
    '이주영': { name: '이주영', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 서울 구로 어바웃티씨지', date: '2026-02-01', rank: 1, deck: '녹색 덱' }] },
    '최진욱': { name: '최진욱', country: 'KR', finishes: [] },
    '진수': { name: '진수', country: 'KR', finishes: [] },
    '김종민': { name: '김종민', country: 'KR', finishes: [] },
    '한상원': { name: '한상원', country: 'KR', finishes: [] },
    '왕현식': { name: '왕현식', country: 'KR', finishes: [] },
    '김태경': { name: '김태경', country: 'KR', finishes: [] },
    '황상진': { name: '황상진', country: 'KR', finishes: [] },
    '이가온': { name: '이가온', country: 'KR', finishes: [] },
    '김도현': { name: '김도현', country: 'KR', finishes: [] },
    '김정기': { name: '김정기', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 경기 부천 하비게임몰', date: '2026-02-07', rank: 1, deck: '적색 덱' }] },
    '김동환': { name: '김동환', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', rank: 1, deck: '적색 덱' }] },
    '안민섭': { name: '안민섭', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 부산 포춘팩토리', date: '2026-02-07', rank: 1, deck: '청색 덱' }] },
    '차주환': { name: '차주환', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', rank: 1, deck: '황색 덱' }] },
    '윤영진': { name: '윤영진', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', rank: 3, deck: '청색 덱' }] },
    '김지민': { name: '김지민', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', rank: 4, deck: '녹색 덱' }] },
    '순대': { name: '순대', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', rank: 5, deck: '자색 덱' }] },
    '안현빈': { name: '안현빈', country: 'KR', finishes: [{ tournament: '브레이브 리그 - 창원 마블보드게임', date: '2026-02-07', rank: 7, deck: '자색 덱' }] }
};

// Update existing players in database - ONLY WINNERS for Brave League
playerDatabase['김민서'].finishes.push({ tournament: '브레이브 리그 - 서울 역삼 토너먼트센터', date: '2026-02-07', rank: 1, deck: '녹색 덱' });
// playerDatabase['김지훈'], playerDatabase['강병렬'] 등 다른 선수들의 기록은 정책에 따라 추가하지 않음


const braveLeagueTournaments = [
    { id: 101, name: '서울 마포 롤링다이스', date: '2월 1일(일) 12:00', participants: 18 },
    { id: 102, name: '서울 구로 어바웃티씨지', date: '2월 1일(일) 16:00', participants: 21 },
    { id: 103, name: '경기 평택 하비베이스', date: '2월 7일(토) 13:00', participants: 0 },
    { id: 104, name: '부산 포춘팩토리', date: '2월 7일(토) 14:00', participants: 10 },
    { id: 105, name: '경기 부천 하비게임몰', date: '2월 7일(토) 14:00', participants: 10 },
    { id: 106, name: '창원 마블보드게임', date: '2월 7일(토) 15:00', participants: 7 },
    { id: 107, name: '서울 역삼 토너먼트센터', date: '2월 7일(토) 15:00', participants: 11 },
    { id: 108, name: '부산 부산더락', date: '2월 8일(일) 14:00', participants: 10 },
    { id: 109, name: '서울 구로 어바웃티씨지', date: '2월 8일(일) 15:00', participants: 16 },
    { id: 110, name: '부산 하비베이스', date: '2월 14일(토) 13:00', participants: 0 },
    { id: 111, name: '부산 포춘팩토리', date: '2월 14일(토) 14:00', participants: 0 },
    { id: 112, name: '경기 부천 하비게임몰', date: '2월 14일(토) 14:00', participants: 0 },
    { id: 113, name: '창원 마블보드게임', date: '2월 14일(토) 15:00', participants: 0 },
    { id: 114, name: '서울 역삼 토너먼트센터', date: '2월 14일(토) 15:00', participants: 0 },
    { id: 115, name: '경기 성남 카드빈', date: '2월 15일(일) 13:00', participants: 0 },
    { id: 116, name: '부산 부산더락', date: '2월 15일(일) 14:00', participants: 0 },
    { id: 117, name: '서울 마포 롤링다이스', date: '2월 18일(수) 12:00', participants: 0 },
    { id: 118, name: '경기 성남 카드빈', date: '2월 18일(수) 15:00', participants: 0 },
    { id: 119, name: '경기 평택 하비베이스', date: '2월 21일(토) 13:00', participants: 0 },
    { id: 120, name: '경기 부천 하비게임몰', date: '2월 21일(토) 14:00', participants: 0 },
    { id: 121, name: '경기 군포 금정배틀시티', date: '2월 21일(토) 15:00', participants: 0 },
    { id: 123, name: '창원 마블보드게임', date: '2월 21일(토) 15:00', participants: 0 },
    { id: 124, name: '서울 구로 어바웃티씨지', date: '2월 22일(일) 15:00', participants: 0 },
    { id: 125, name: '경기 성남 카드빈', date: '2월 28일(토) 13:00', participants: 0 },
    { id: 126, name: '경기 군포 금정배틀시티', date: '2월 28일(토) 15:00', participants: 0 }
];

const upcomingTournaments = [
    { id: 2, name: '월드 챔피언십 25-26', date: '2026년 4월 (예정)', status: 'upcoming' },
    { id: 3, name: '브레이브리그 파이널 시즌 1', date: '2026년 6월 (예정)', status: 'upcoming' },
    { id: 4, name: '26-27 썸머 챔피언컵', date: '2026년 7월 (예정)', status: 'upcoming' },
    { id: 5, name: '브레이브리그 파이널 시즌 2', date: '2026년 9월 (예정)', status: 'upcoming' },
    { id: 6, name: '브레이브리그 파이널 시즌 3', date: '2026년 12월 (예정)', status: 'upcoming' },
    { id: 7, name: '27-28 윈터 챔피언컵', date: '2027년 1월 (예정)', status: 'upcoming' }
];

const deckColors = {
    '녹색 덱': '#10b981',
    '황색 덱': '#fbbf24',
    '청색 덱': '#3b82f6',
    '적색 덱': '#ef4444',
    '자색 덱': '#a855f7',
    '혼색 덱': 'rgba(255, 255, 255, 0.3)',
    'other': '#64748b'
};

// --- State ---
let showAllUpcoming = false;
let showAllBraveLeague = false;

// --- Routing System ---
function handleRouting() {
    const hash = window.location.hash;

    if (hash.startsWith('#tournament/')) {
        const id = parseInt(hash.replace('#tournament/', ''));
        renderTournamentDetails(id);
    } else if (hash.startsWith('#player/')) {
        const playerName = decodeURIComponent(hash.replace('#player/', ''));
        renderPlayerDetails(playerName);
    } else if (hash === '#upcoming') {
        renderAllUpcomingView();
    } else if (hash === '#brave-league') {
        renderAllBraveLeagueView();
    } else {
        renderHomeView();
    }
}

// Navigation wrappers
function showTournamentDetails(id) { window.location.hash = `#tournament/${id}`; }
function showPlayerDetails(name) {
    if (isAnonymousPlayer(name)) return;
    window.location.hash = `#player/${encodeURIComponent(name)}`;
}
function showAllUpcomingView() { window.location.hash = '#upcoming'; }
function showAllBraveLeagueView() { window.location.hash = '#brave-league'; }
function renderHome() { window.location.hash = ''; }

// Listen for hash changes
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

// --- Utils ---
const isAnonymousPlayer = (name) => name && name.startsWith('Player ');

const getRankIcon = (rank) => {
    if (rank === 1) return '<span class="text-2xl">🥇</span>';
    if (rank === 2) return '<span class="text-2xl">🥈</span>';
    if (rank === 3) return '<span class="text-2xl">🥉</span>';
    return `<span class="text-gray-400 font-bold">#${rank}</span>`;
};

const getDeckEmoji = (deckName) => {
    if (deckName.includes('녹색')) return '🟢';
    if (deckName.includes('황색')) return '🟡';
    if (deckName.includes('청색')) return '🔵';
    if (deckName.includes('적색')) return '🔴';
    if (deckName.includes('자색')) return '🟣';
    if (deckName.includes('혼색')) return '⚪';
    if (!deckName) return '';
    return '🃏';
};

const getRankColor = (rank) => {
    if (rank === 1) return 'bg-yellow-50 border-yellow-200';
    if (rank === 2) return 'bg-gray-50 border-gray-200';
    if (rank === 3) return 'bg-orange-50 border-orange-200';
    return 'bg-white border-gray-100';
};

// Helper to render a distribution block
const renderDistBlock = (title, distData, totalCount) => {
    if (!distData || Object.keys(distData).length === 0) return '';
    const sorted = Object.entries(distData).sort((a, b) => b[1] - a[1]);
    const total = totalCount || Object.values(distData).reduce((a, b) => a + b, 0);

    let currentPerc = 0;
    const gradient = sorted.map(([name, count]) => {
        const start = currentPerc;
        currentPerc += (count / total) * 100;
        return `${deckColors[name] || deckColors['other']} ${start}% ${currentPerc}%`;
    }).join(', ');

    return `
        <div class="glass-card p-6">
            <p class="text-center text-xs font-black text-slate-500 uppercase tracking-widest mb-4">${title}</p>
            <div class="flex flex-col items-center">
                <div class="pie-chart shadow-2xl mb-6 relative overflow-hidden" style="background: conic-gradient(${gradient})">
                    <div class="absolute inset-[30%] bg-slate-900 rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 gap-x-6 gap-y-2 w-full">
                    ${sorted.map(([name, count]) => `
                        <div class="flex items-center gap-2">
                            <div class="w-2 h-2 rounded-sm shadow-sm" style="background: ${deckColors[name] || deckColors['other']}"></div>
                            <span class="text-[10px] font-bold text-slate-400">${name}</span>
                            <span class="text-[10px] font-black text-slate-500 ml-auto">${count} (${((count / total) * 100).toFixed(1)}%)</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
};

// --- Render functions ---
function renderHomeView() {
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('detail-view').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Render Decks
    const decksGrid = document.getElementById('top-decks-grid');

    // 기존 버튼들 제거 (중복 생성 방지)
    const oldBraveBtn = document.getElementById('btn-show-all-brave');
    if (oldBraveBtn) oldBraveBtn.remove();
    const oldUpcomingBtn = document.getElementById('btn-show-all-upcoming');
    if (oldUpcomingBtn) oldUpcomingBtn.remove();
    decksGrid.innerHTML = topDecks.map((deck, idx) => `
        <div class="glass-card p-6 flex flex-col items-center">
            <span class="text-purple-500 font-black text-xl mb-4">#${idx + 1}</span>
            <div class="w-full aspect-[3/4] mb-6 rounded-xl overflow-hidden shadow-inner border border-[var(--card-border)] flex items-center justify-center" style="background: var(--card-inner-bg)">
                ${deck.mainCard ? `<img src="${deck.mainCard}" class="w-full h-full object-contain p-2">` : `<span class="text-7xl">${deck.emoji}</span>`}
            </div>
            <h3 class="text-xl font-extrabold text-[var(--text-heading)] mb-2">${deck.name}</h3>
            <p class="text-sm font-semibold text-[var(--text-muted)] mb-6">${deck.deckCount} Decks</p>
            <div class="grid grid-cols-2 gap-4 w-full">
                <div class="text-center p-2 rounded-xl border border-green-500/20" style="background: var(--stat-bg-green)">
                    <div class="text-lg font-bold text-green-400">${deck.winRate}%</div>
                    <div class="text-[10px] uppercase tracking-wider text-green-300/60 font-bold">Win Rate</div>
                </div>
                <div class="text-center p-2 rounded-xl border border-blue-500/20" style="background: var(--stat-bg-blue)">
                    <div class="text-lg font-bold text-blue-400">${deck.usage}%</div>
                    <div class="text-[10px] uppercase tracking-wider text-blue-300/60 font-bold">Usage</div>
                </div>
            </div>
        </div>
    `).join('');

    // Recent Tournaments
    const recentList = document.getElementById('recent-tournaments-list');
    recentList.innerHTML = tournaments.filter(t => t.id < 100).map(t => `
        <div onclick="showTournamentDetails(${t.id})" class="glass-card p-5 flex items-center justify-between cursor-pointer group">
            <div class="flex items-center gap-5">
                <div class="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-2xl group-hover:bg-purple-500/20 transition">🏆</div>
                <div>
                    <h3 class="font-bold text-[var(--text-heading)] text-lg">${t.name}</h3>
                    <div class="flex gap-4 text-sm text-[var(--text-muted)] mt-1">
                        <span class="flex items-center gap-1">📅 ${t.date}</span>
                        <span class="flex items-center gap-1">📍 ${t.location}</span>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--text-muted)] group-hover:text-purple-500 transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6"/></svg>
        </div>
    `).join('');

    // Brave League - 3 most recent completed
    const braveList = document.getElementById('brave-league-list');
    const recentCompletedBrave = tournaments
        .filter(t => t.id >= 100 && t.status === 'completed')
        .sort((a, b) => b.id - a.id)
        .slice(0, 3);

    braveList.innerHTML = recentCompletedBrave.map(t => {
        let winnerName = null;
        if (t.bracket && t.bracket.final && t.bracket.final.winner) {
            winnerName = t.bracket.final.winner;
        } else if (t.standings) {
            const sWinner = t.standings.find(s => s.rank === 1);
            if (sWinner) winnerName = sWinner.player;
        }

        const participantCount = t.participants || (t.standings ? t.standings.length : 0);

        return `
            <div onclick="showTournamentDetails(${t.id})" class="glass-card p-4 border-l-4 border-green-500 cursor-pointer hover:bg-green-500/10 transition group">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-[var(--text-heading)] group-hover:text-green-400 transition">${t.shortName || t.name.replace('브레이브 리그 - ', '')}</h3>
                        <div class="text-xs text-[var(--text-muted)] mt-2">
                            <span>📅 ${t.date}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-[10px] font-black text-green-400 uppercase tracking-widest">${participantCount} Participants</div>
                        ${winnerName ? `<div class="text-[11px] font-black text-yellow-500 mt-1 flex items-center justify-end gap-1 italic"><span class="text-sm">🏆</span> 1st: ${winnerName}</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (braveLeagueTournaments.length > 3) {
        braveList.insertAdjacentHTML('afterend', `
            <button id="btn-show-all-brave" class="w-full mt-4 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl text-green-400 font-black text-xs tracking-widest hover:border-green-500 transition uppercase">
                ALL BRAVE LEAGUE
            </button>
        `);
        document.getElementById('btn-show-all-brave').onclick = showAllBraveLeagueView;
    }

    // Upcoming
    const upcomingList = document.getElementById('upcoming-tournaments-list');
    const displayUpcoming = showAllUpcoming ? upcomingTournaments : upcomingTournaments.slice(0, 3);

    upcomingList.innerHTML = displayUpcoming.map(t => `
        <div class="p-5 rounded-2xl border border-yellow-500/20 shadow-sm transition-colors" style="background: var(--stat-bg-blue)">
            <h3 class="font-bold text-[var(--text-heading)]">${t.name}</h3>
            <p class="text-sm font-semibold text-orange-500 mt-1">🗓 ${t.date}</p>
        </div>
    `).join('');

    if (upcomingTournaments.length > 3) {
        upcomingList.insertAdjacentHTML('afterend', `
            <button id="btn-show-all-upcoming" class="w-full mt-4 py-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl text-orange-500 font-black text-xs tracking-widest hover:border-yellow-500 transition uppercase">
                ALL UPCOMING TOURNAMENTS
            </button>
        `);
        document.getElementById('btn-show-all-upcoming').onclick = showAllUpcomingView;
    }
}

function renderTournamentDetails(id) {
    const tournament = tournaments.find(t => t.id === id) || braveLeagueTournaments.find(t => t.id === id);
    if (!tournament) return;
    const detailView = document.getElementById('detail-view');
    const mainView = document.getElementById('main-view');

    mainView.classList.add('hidden');
    detailView.classList.remove('hidden');

    // Calculate distributions
    let mainDist = tournament.deckDistribution || {};
    if (!tournament.deckDistribution && tournament.standings) {
        tournament.standings.forEach(s => {
            if (s.deck) mainDist[s.deck] = (mainDist[s.deck] || 0) + 1;
        });
    }

    const isCompleted = tournament.status === 'completed';

    detailView.innerHTML = `
        <button onclick="window.history.back()" class="mb-10 flex items-center gap-2 text-purple-400 font-extrabold hover:text-purple-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg> GO BACK
        </button>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div class="lg:col-span-2 space-y-10">
                <section class="glass-card p-10 cursor-pointer hover:border-purple-500/50 transition group" onclick="${tournament.externalURL ? `window.open('${tournament.externalURL}', '_blank')` : ''}">
                    <div class="flex items-start justify-between">
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                <h1 class="text-4xl font-black text-[var(--text-heading)]">${tournament.name}</h1>
                                ${tournament.externalURL ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-slate-600 group-hover:text-purple-400 transition"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>' : ''}
                            </div>
                            <div class="flex flex-wrap gap-6 text-slate-400 font-medium">
                                <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ${tournament.date}</span>
                                <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> ${tournament.location}</span>
                                <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> ${tournament.participants} Participants</span>
                            </div>
                        </div>
                        <div class="px-6 py-2 ${isCompleted ? 'bg-green-500 shadow-green-900/40' : 'bg-blue-500 shadow-blue-900/40'} text-white rounded-full font-black text-sm tracking-widest uppercase shadow-lg">
                            ${tournament.status || (isCompleted ? 'COMPLETED' : 'UPCOMING')}
                        </div>
                    </div>
                </section>

                <section class="space-y-6">


                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                            <h2 class="text-2xl font-black text-[var(--text-heading)]">Final Standings</h2>
                        </div>
                        
                        <div class="glass-card overflow-hidden">
                            <div class="grid grid-cols-12 gap-2 px-6 py-4 bg-[var(--footer-bg)] border-b border-[var(--card-border)] text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">
                                <div class="col-span-1 text-center">#</div>
                                <div class="col-span-4 pl-2">Player</div>
                                <div class="col-span-3 text-center">RECORD</div>
                                <div class="col-span-3">Deck</div>
                                <div class="col-span-1 text-center">List</div>
                            </div>
                            <div class="divide-y border-[var(--card-border)]">
                                ${tournament.standings ? tournament.standings.slice().sort((a, b) => a.rank - b.rank).map(s => `
                                    <div class="grid grid-cols-12 gap-2 px-6 py-4 items-center hover:bg-white/5 transition group">
                                        <div class="col-span-1 text-center font-bold text-slate-500">
                                            ${s.rank <= 3 ? getRankIcon(s.rank) : s.rank}
                                        </div>
                                        <div class="col-span-4 flex items-center gap-3">
                                            <img src="https://flagcdn.com/kr.svg" alt="KR" class="w-6 h-4 shadow-sm rounded-sm object-cover">
                                            ${isAnonymousPlayer(s.player)
            ? `<span class="font-extrabold text-[var(--text-main)]">${s.player}</span>`
            : `<span class="font-extrabold text-[var(--text-main)] cursor-pointer hover:text-purple-500 transition" onclick="showPlayerDetails('${s.player}')">${s.player}</span>`
        }
                                        </div>
                                        <div class="col-span-3 text-center">
                                            <div class="font-black text-[var(--text-heading)]">${s.score}</div>
                                            ${(tournament.id >= 100 && tournament.bracket) ? (
            (tournament.bracket.quarterfinals && s.rank <= 8) ? `<div class="text-[10px] text-yellow-500 font-bold">Top 8</div>` :
                (!tournament.bracket.quarterfinals && tournament.bracket.semifinals && s.rank <= 4) ? `<div class="text-[10px] text-yellow-500 font-bold">Top 4</div>` : ''
        ) : ''}
                                            ${(s.swissRank && tournament.id < 100) ? `<div class="text-[10px] text-purple-400 font-bold">#${s.swissRank} Swiss</div>` : ''}
                                        </div>
                                        <div class="col-span-3 flex items-center gap-2">
                                            ${s.deck ? `
                                                <span class="text-lg">${getDeckEmoji(s.deck)}</span>
                                                <span class="text-sm font-bold text-slate-400">${s.deck}</span>
                                            ` : '<span class="text-[var(--text-muted)] opacity-30">-</span>'}
                                        </div>
                                        <div class="col-span-1 text-center">
                                            ${s.deckList ? `
                                                <button onclick="window.open('${s.deckList}', '_blank')" class="p-2 rounded-lg bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--card-border)] hover:border-purple-500 hover:text-purple-500 transition shadow-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/></svg>
                                                </button>
                                            ` : '<span class="text-[var(--text-muted)] opacity-30">-</span>'}
                                        </div>
                                    </div>
                                `).join('') : `
                                    <div class="p-10 text-center">
                                        <p class="text-[var(--text-muted)] font-bold">결과가 아직 발표되지 않았습니다.</p>
                                    </div>
                                `}
                            </div>
                        </div>
                    </div>


                    ${tournament.bracket ? `
                    <div class="space-y-6 mb-12">
                         <div class="flex items-center justify-between">
                            <h2 class="text-2xl font-black text-[var(--text-heading)]">Main Event Bracket</h2>
                        </div>
                        <div class="space-y-12 py-10 overflow-x-auto">
                            <div class="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 min-w-max md:min-w-0 px-4">
                                <!-- Quarterfinals -->
                                ${tournament.bracket.quarterfinals ? `
                                <div class="flex flex-col gap-8 w-64">
                                    ${tournament.bracket.quarterfinals.map((match, idx) => `
                                        <div class="relative group">
                                            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition"></div>
                                            <div class="relative glass-card overflow-hidden">
                                                <div class="flex flex-col divide-y divide-white/5">
                                                    <div class="flex items-center justify-between px-4 py-3 ${match.winner === match.player1 ? 'bg-purple-500/20' : ''}">
                                                        <span class="font-bold text-sm ${match.winner === match.player1 ? 'text-white' : 'text-slate-400'}">${match.player1}</span>
                                                        ${match.winner === match.player1 ? '<span class="text-xs font-black text-purple-400">WIN</span>' : ''}
                                                    </div>
                                                    <div class="flex items-center justify-between px-4 py-3 ${match.winner === match.player2 ? 'bg-purple-500/20' : ''}">
                                                        <span class="font-bold text-sm ${match.winner === match.player2 ? 'text-white' : 'text-slate-400'}">${match.player2}</span>
                                                        ${match.winner === match.player2 ? '<span class="text-xs font-black text-purple-400">WIN</span>' : ''}
                                                    </div>
                                                </div>
                                            </div>
                                            ${idx % 2 === 0 ? '<div class="hidden md:block absolute -right-6 top-[220%] w-6 h-0.5 bg-white/10 origin-left rotate-45 transform translate-y-[-50%] z-0" style="width: 24px;"></div>' : ''}
                                            <div class="hidden md:block absolute -right-6 top-1/2 w-6 h-0.5 bg-white/10"></div>
                                        </div>
                                    `).join('')}
                                </div>
                                ` : ''}

                                <!-- Semifinals -->
                                <div class="flex flex-col gap-12 w-64">
                                    ${tournament.bracket.semifinals.map((match, idx) => `
                                        <div class="relative group">
                                            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition"></div>
                                            <div class="relative glass-card overflow-hidden">
                                                <div class="flex flex-col divide-y divide-white/5">
                                                    <div class="flex items-center justify-between px-4 py-3 ${match.winner === match.player1 ? 'bg-purple-500/20' : ''}">
                                                        <span class="font-bold text-sm ${match.winner === match.player1 ? 'text-white' : 'text-slate-400'}">${match.player1}</span>
                                                        ${match.winner === match.player1 ? '<span class="text-xs font-black text-purple-400">WIN</span>' : ''}
                                                    </div>
                                                    <div class="flex items-center justify-between px-4 py-3 ${match.winner === match.player2 ? 'bg-purple-500/20' : ''}">
                                                        <span class="font-bold text-sm ${match.winner === match.player2 ? 'text-white' : 'text-slate-400'}">${match.player2}</span>
                                                        ${match.winner === match.player2 ? '<span class="text-xs font-black text-purple-400">WIN</span>' : ''}
                                                    </div>
                                                </div>
                                            </div>
                                            ${idx === 0 ? '<div class="hidden md:block absolute -right-10 top-1/2 w-10 h-0.5 bg-white/10"></div>' : ''}
                                            ${idx === 1 ? '<div class="hidden md:block absolute -right-10 top-1/2 w-10 h-0.5 bg-white/10"></div>' : ''}
                                        </div>
                                    `).join('')}
                                </div>

                                <!-- Final -->
                                <div class="relative w-80 group">
                                    <div class="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                                    <div class="relative glass-card border-2 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                        <div class="bg-yellow-500/10 px-4 py-2 border-b border-yellow-500/30 flex items-center justify-center gap-2">
                                            <span class="text-lg">👑</span>
                                            <span class="text-xs font-black text-yellow-500 tracking-widest uppercase">Grand Final</span>
                                        </div>
                                        <div class="flex flex-col divide-y divide-white/5">
                                            <div class="flex items-center justify-between px-6 py-5 ${tournament.bracket.final.winner === tournament.bracket.final.player1 ? 'bg-yellow-500/20' : ''}">
                                                <span class="font-black text-lg ${tournament.bracket.final.winner === tournament.bracket.final.player1 ? 'text-white' : 'text-slate-400'}">${tournament.bracket.final.player1}</span>
                                                ${tournament.bracket.final.winner === tournament.bracket.final.player1 ? '<span class="px-2 py-1 rounded-md bg-yellow-500 text-slate-900 text-[10px] font-black">CHAMPION</span>' : ''}
                                            </div>
                                            <div class="flex items-center justify-between px-6 py-5 ${tournament.bracket.final.winner === tournament.bracket.final.player2 ? 'bg-yellow-500/20' : ''}">
                                                <span class="font-black text-lg ${tournament.bracket.final.winner === tournament.bracket.final.player2 ? 'text-white' : 'text-slate-400'}">${tournament.bracket.final.player2}</span>
                                                ${tournament.bracket.final.winner === tournament.bracket.final.player2 ? '<span class="px-2 py-1 rounded-md bg-yellow-500 text-slate-900 text-[10px] font-black">CHAMPION</span>' : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ` : ''}


                </section>
            </div>

            <div class="space-y-8">
                <section class="glass-card p-8">
                    <h2 class="text-xl font-black text-[var(--text-heading)] mb-8 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10Z"/></svg>
                        Deck Distribution
                    </h2>
                    <div class="space-y-12">
                        ${renderDistBlock('Overall Distribution', mainDist, tournament.deckDistribution ? tournament.participants : null)}
                        ${renderDistBlock('Finals Qualifiers Distribution', tournament.topCutDistribution)}
                    </div>
                </section>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAllUpcomingView() {
    const detailView = document.getElementById('detail-view');
    const mainView = document.getElementById('main-view');

    mainView.classList.add('hidden');
    detailView.classList.remove('hidden');

    detailView.innerHTML = `
        <button onclick="window.history.back()" class="mb-10 flex items-center gap-2 text-purple-400 font-extrabold hover:text-purple-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg> GO BACK
        </button>

        <div class="mb-10">
            <h1 class="text-4xl font-black text-white mb-2">Upcoming Tournaments</h1>
            <p class="text-slate-400 font-bold italic">다음 공식 이벤트 일정을 확인하세요.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${upcomingTournaments.map(t => `
                <div class="glass-card p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform border border-white/5">
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-yellow-900/30 flex items-center justify-center text-2xl mb-4">🗓</div>
                        <h3 class="font-extrabold text-xl text-slate-100 mb-2">${t.name}</h3>
                        <p class="text-sm font-semibold text-orange-400">${t.date}</p>
                    </div>
                    <div class="mt-6 pt-4 border-t border-white/5">
                        <span class="text-xs font-black text-slate-500 uppercase tracking-widest">Status: ${t.status}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderAllBraveLeagueView() {
    const detailView = document.getElementById('detail-view');
    const mainView = document.getElementById('main-view');

    mainView.classList.add('hidden');
    detailView.classList.remove('hidden');

    // 주차별 그룹화 로직
    const weeks = {
        '1주차 (2/1 - 2/7)': [],
        '2주차 (2/8 - 2/14)': [],
        '3주차 (2/15 - 2/21)': [],
        '4주차 (2/22 - 2/28)': []
    };

    braveLeagueTournaments.forEach(t => {
        const dayMatch = t.date.match(/2월 (\d+)일/);
        if (dayMatch) {
            const day = parseInt(dayMatch[1]);
            if (day <= 7) weeks['1주차 (2/1 - 2/7)'].push(t);
            else if (day <= 14) weeks['2주차 (2/8 - 2/14)'].push(t);
            else if (day <= 21) weeks['3주차 (2/15 - 2/21)'].push(t);
            else weeks['4주차 (2/22 - 2/28)'].push(t);
        }
    });

    detailView.innerHTML = `
        <button onclick="window.history.back()" class="mb-10 flex items-center gap-2 text-purple-400 font-extrabold hover:text-purple-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg> GO BACK
        </button>

        <div class="mb-14">
            <h1 class="text-4xl font-black text-[var(--text-heading)] mb-2">February Brave League</h1>
            <p class="text-[var(--text-muted)] font-bold italic mb-10">주차별 브레이브 리그 일정을 확인하세요.</p>
            
            <!-- Overall Stats Section -->
            ${(() => {
            let totalP = 0;
            let aggMain = {};
            let aggTop = {};
            const completedBL = tournaments.filter(t => t.id >= 100 && t.status === 'completed');

            completedBL.forEach(t => {
                totalP += (t.participants || 0);
                if (t.deckDistribution) {
                    Object.entries(t.deckDistribution).forEach(([name, count]) => {
                        aggMain[name] = (aggMain[name] || 0) + count;
                    });
                }
                if (t.topCutDistribution) {
                    Object.entries(t.topCutDistribution).forEach(([name, count]) => {
                        aggTop[name] = (aggTop[name] || 0) + count;
                    });
                }
            });

            if (completedBL.length === 0) return '';

            return `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    <div class="glass-card p-8 flex flex-col justify-center border-l-4 border-purple-500">
                        <div class="text-xs font-black text-purple-400 uppercase tracking-widest mb-2">Total Participants</div>
                        <div class="text-5xl font-black text-white">${totalP} <span class="text-xl text-slate-500">Decks</span></div>
                        <div class="text-xs font-bold text-slate-500 mt-4 italic">${completedBL.length} Completed Tournaments</div>
                    </div>
                    ${renderDistBlock('Overall Deck Distribution', aggMain)}
                    ${renderDistBlock('Top Cut Distribution', aggTop)}
                </div>
                `;
        })()}
        </div>

        <div class="space-y-12">
            ${Object.entries(weeks).map(([weekName, list]) => list.length > 0 ? `
                <div class="space-y-6">
                    <div class="flex items-center gap-4">
                        <h2 class="text-2xl font-black text-green-400 whitespace-nowrap">${weekName}</h2>
                        <div class="h-px bg-gradient-to-r from-green-900/50 to-transparent w-full"></div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        ${list.map(t => {
            const fullData = tournaments.find(td => td.id === t.id);
            const isDone = fullData && fullData.status === 'completed';

            // Determine True Winner (Favor bracket winner over swiss rank 1)
            let winnerName = 'TBD';
            if (isDone && fullData) {
                if (fullData.bracket && fullData.bracket.final && fullData.bracket.final.winner) {
                    winnerName = fullData.bracket.final.winner;
                } else if (fullData.standings) {
                    const sWinner = fullData.standings.find(s => s.rank === 1);
                    if (sWinner) winnerName = sWinner.player;
                }
            }

            const pCount = fullData ? fullData.participants : t.participants;

            return `
                            <div onclick="showTournamentDetails(${t.id})" class="glass-card p-5 border-l-4 ${isDone ? 'border-purple-500 bg-purple-500/5' : 'border-green-500'} hover:bg-green-500/10 transition cursor-pointer group">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="font-bold text-[var(--text-heading)] text-sm leading-tight group-hover:text-green-400 transition">${t.name}</h3>
                                    ${isDone ? '<span class="text-[10px] font-black bg-purple-500 text-white px-2 py-0.5 rounded-full uppercase">Done</span>' : ''}
                                </div>
                                <div class="space-y-1">
                                    <div class="text-[10px] text-[var(--text-muted)] flex items-center gap-1">
                                        <span>📅 ${t.date}</span>
                                    </div>
                                    ${isDone ? `
                                        <div class="text-[10px] font-bold text-slate-400">
                                            👥 Participants: ${pCount || '-'}
                                        </div>
                                        <div class="text-[10px] font-black text-yellow-500 flex items-center gap-1">
                                            👑 1st: ${winnerName}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                            `;
        }).join('')}
                    </div>
                </div>
            ` : '').join('')}
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPlayerDetails(playerName) {
    const player = playerDatabase[playerName];
    if (!player) return;

    const detailView = document.getElementById('detail-view');
    const mainView = document.getElementById('main-view');

    mainView.classList.add('hidden');
    detailView.classList.remove('hidden');

    detailView.innerHTML = `
        <button onclick="window.history.back()" class="mb-10 flex items-center gap-2 text-purple-400 font-extrabold hover:text-purple-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg> GO BACK
        </button>

        <div class="glass-card p-10 mb-10 overflow-hidden relative">
            <div class="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <img src="https://flagcdn.com/kr.svg" alt="KR" class="w-64 h-auto transform rotate-12">
            </div>
            <div class="flex items-center gap-6 relative z-10">
                <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl overflow-hidden">
                    <img src="./cookie  icon.webp" alt="Profile" class="w-full h-full object-cover">
                </div>
                <div>
                    <div class="flex items-center gap-3">
                        <h1 class="text-5xl font-black text-[var(--text-heading)]">${player.name}</h1>
                        <img src="https://flagcdn.com/kr.svg" alt="KR" class="w-10 h-7 shadow-lg rounded-md border border-[var(--card-border)]">
                    </div>
                    <p class="text-[var(--text-muted)] font-bold mt-2 text-lg">South Korea • Competitive Player</p>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <h2 class="text-3xl font-black text-[var(--text-heading)] flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                Latest Tournament Finishes
            </h2>
            
            <div class="glass-card overflow-hidden">
                <div class="grid grid-cols-12 gap-2 px-6 py-4 bg-[var(--footer-bg)] border-b border-[var(--card-border)] text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest">
                    <div class="col-span-1 text-center">#</div>
                    <div class="col-span-4 pl-2">Tournament</div>
                    <div class="col-span-4 pl-4">Deck</div>
                    <div class="col-span-3 text-right pr-2">Date</div>
                </div>
                <div class="divide-y border-[var(--card-border)]">
                    ${player.finishes.map(f => `
                        <div class="grid grid-cols-12 gap-2 px-6 py-5 items-center hover:bg-white/5 transition group">
                            <div class="col-span-1 text-center font-bold text-[var(--text-muted)]">
                                ${getRankIcon(f.rank)}
                            </div>
                            <div class="col-span-4 pl-2">
                                <div class="font-extrabold text-[var(--text-heading)]">${f.tournament}</div>
                            </div>
                            <div class="col-span-4 flex items-center gap-2 pl-4">
                                <span class="text-lg">${getDeckEmoji(f.deck)}</span>
                                <span class="text-sm font-bold text-[var(--text-muted)]">${f.deck}</span>
                            </div>
                            <div class="col-span-3 text-right">
                                <div class="font-black text-sm text-[var(--text-muted)]">${f.date}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Initial initialization
function init() {
    handleRouting();
}

init();
