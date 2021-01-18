class Stack{
    constructor(){
        this._arr = [];
    }
    push(item){
        this._arr.push(item);
    }
    pop(){
        return this._arr.pop();
    }
    top(){
        return this._arr[this._arr.length - 1];
    }
    element(){
        console.log(this._arr);
    }
}
function solution(board, moves) {
    var answer = 0;
    const stack = new Stack();
    for(const i in moves){
        var pos = moves[i]-1;
        for(const j in board){
            if(board[j][pos]!=0){
                if(stack.top()===board[j][pos]){
                    // console.log('stack poped')
                    stack.pop()
                    answer++;
                }else{
                    stack.push(board[j][pos]);
                    // console.log('stack pushed')
                }
                board[j][pos]=0;
                // stack.element()
                break;
            }
        }
    }
    // console.log(answer)
    // stack.element()
    return answer*2;
}
