const zip = rows => rows[0].map((_,c) => rows.map(row => row[c]))

export function checkWin(board) {
    let win = false;
    board.forEach((row, idx) => {
        let tmp = row.map(x => x===row[0] && x !== '').every(x => x);
        
        if(tmp) win = board[idx][0];
    });

    zip(board).forEach((column, idx) => {
        let tmp = column.map(x => x===column[0] && x !== '').every(x => x);
        if(tmp) win = board[0][idx];
    });
    if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== '') win = board[0][0];
    if(board[2][0] === board[2][1] && board[2][0] === board[0][2] && board[2][0] !== '') win = board[2][0];
    return win;
}