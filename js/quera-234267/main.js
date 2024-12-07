//! link: https://quera.org/problemset/234267
//* level: medium
function fetchData() {
    return Promise.resolve([
        { name: 'بهرام', score: 100 },
        { name: 'فاطمه', score: 70 },
        { name: 'زهرا', score: 80 },
        { name: 'علي', score: 90 },
        { name: 'محمد', score: 40 },
        { name: 'مريم', score: 95 },
        { name: 'مهدي', score: 50 },
        { name: 'حسين', score: 45 },
        { name: 'عليرضا', score: 55 },
        { name: 'محمدرضا', score: 80 },
        { name: 'معصومه', score: 20 },
        { name: 'زينب', score: 60 },
        { name: 'رضا', score: 85 },
        { name: 'اميرحسين', score: 10 },
        { name: 'محمدحسين', score: 35 },
        { name: 'مرضيه', score: 75 },
        { name: 'ابوالفضل', score: 65 },
        { name: 'حسن', score: 90 },
        { name: 'محسن', score: 65 },
        { name: 'محمدمهدي', score: 55 },
        { name: 'صديقه', score: 45 },
        { name: 'زهره', score: 80 },
        { name: 'ليلا', score: 60 },
        { name: 'احمد', score: 65 },
        { name: 'طاهره', score: 65 },
        { name: 'عباس', score: 55 },
        { name: 'اعظم', score: 50 },
        { name: 'سميه', score: 55 },
        { name: 'سعيد', score: 45 },
        { name: 'محمدعلي', score: 65 },
        { name: 'سكينه', score: 85 },
        { name: 'رقيه', score: 80 },
        { name: 'مرتضي', score: 100 },
        { name: 'ريحانه', score: 30 },
        { name: 'نرگس', score: 90 },
        { name: 'مصطفي', score: 100 },
        { name: 'خديجه', score: 95 },
        { name: 'مجيد', score: 55 },
        { name: 'محمدجواد', score: 65 },
    ]);
}

const tBody = document.querySelector('tbody');
const manipulateTable = async () => {
    const scores = await fetchData();
    scores.sort((a, b) => b.score - a.score);
    let rank = 0;
    let prevScore = null;
    let rankOffset = 0;
    const rankedScores = scores.map(({ name, score }) => {
        if (score !== prevScore) {
            rank = rankOffset + 1;
        }
        rankOffset++;
        prevScore = score;
        return { rank, name, score };
    });
    const tableRows = rankedScores
        .map(
            (item) =>
                `<tr><td>${item.rank}</td><td>${item.name}</td><td>${item.score}</td></tr>`
        )
        .join('');
    tBody.innerHTML = tableRows;
};

manipulateTable();

