// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div id="statusArea" className="status">Next player: <span>{{whosTurn}}</span></div>
    <div id="winnerArea" className="winner">Winner: <span>{{winner}}</span></div>
    <button (click)="Reset()">Reset</button>
    <section>
      <div class="row" *ngFor="let row of [1, 2, 3]">
        <button *ngFor="let col of [1, 2, 3]" class="square" style="width:40px;height:40px;" (click)="ClickBoard(row, col)">{{GetRow(row,col)}}</button>
      </div>
    </section>
  `,
  styles: []
})

export class MainAppComponent implements OnInit {
  public whosTurn: string = "X";
  public winner: string = "None";
  private xTurn: boolean = true;

  private board: number[][] = this.initBoard();

  public Reset(): void{
    this.winner = "None";
    this.whosTurn = "X";
    this.xTurn = true;
    this.board = this.initBoard();
  }

  public ClickBoard(x: number, y: number): void{
    x--;
    y--;
    if(this.board[x][y] !== -1 || this.winner !=="None"){
      return;
    }
    this.board[x][y] = this.xTurn? 1:0;
    if(this.CheckWin(x, y)){
      this.winner = this.xTurn?"X":"O";
    }
    this.xTurn = !this.xTurn;
    this.whosTurn = this.xTurn? "X":"O";
  }

  public GetRow(x: number, y: number): string {
    x--;
    y--;
    switch(this.board[x][y]){
      case -1:{
        return "";
      }
      case 1: {
        return "X";
      }
      case 0:{
        return "O";
      }
    }
    return "";
  }

  private CheckWin(x: number, y: number): boolean {
    const checking = this.xTurn? 1: 0;
    let win = [true,true];
    console.log(x,y, checking);
    //Check Diagonals
    if(x === y || 
        ((x == 2 && y == 0) ||
         (y == 2 && x == 0))
      ){
        for(let i in [0,1,2]){
          if(this.board[i][i] !== checking)
          {
            win[0] = false;
          }
          if(this.board[2-i][i] !== checking){
            win[1] = false;
          }
        }
        console.log(win);
        if(win[0] || win[1])
          return true;
    }
    //Check verticals and horizontals
    win[0] = true;
    win[1] = true;
    for(let i in [0,1,2]){
      if(this.board[x][i] !== checking){
        win[0]=false;
      }
      if(this.board[i][y] !== checking){
        win[1] = false;
      }
    }
    console.log(win);
    if(win[0] || win[1])
      return true;
    return false;
  }

  private initBoard(): number[][]{
    return [
      [-1,-1,-1],
      [-1,-1,-1],
      [-1,-1,-1]
    ];
  }
}





































// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div id="statusArea" className="status">Next player: <span>{{whosTurn}}</span></div>
    <div id="winnerArea" className="winner">Winner: <span>{{winner}}</span></div>
    <button (click)="Reset()">Reset</button>
    <section>
      <div class="row" *ngFor="let row of [1, 2, 3]">
        <button *ngFor="let col of [1, 2, 3]" class="square" style="width:40px;height:40px;" (click)="ClickBoard(row, col)">{{GetRow(row,col)}}</button>
      </div>
    </section>
  `,
  styles: []
})

export class MainAppComponent implements OnInit {
  public whosTurn: string = "X";
  public winner: string = "None";
  private xTurn: boolean = true;

  private board: number[][] = this.initBoard();

  public Reset(): void{
    this.winner = "None";
    this.whosTurn = "X";
    this.xTurn = true;
    this.board = this.initBoard();
  }

  public ClickBoard(x: number, y: number): void{
    x--;
    y--;
    if(this.board[x][y] !== -1 || this.winner !=="None"){
      return;
    }
    this.board[x][y] = this.xTurn? 1:0;
    if(this.CheckWin(x, y)){
      this.winner = this.xTurn?"X":"O";
    }
    this.xTurn = !this.xTurn;
    this.whosTurn = this.xTurn? "X":"O";
  }

  public GetRow(x: number, y: number): string {
    x--;
    y--;
    switch(this.board[x][y]){
      case -1:{
        return "";
      }
      case 1: {
        return "X";
      }
      case 0:{
        return "O";
      }
    }
    return "";
  }

  private CheckWin(x: number, y: number): boolean {
    const checking = this.xTurn? 1: 0;
    let win = [true,true];
    console.log(x,y, checking);
    //Check Diagonals
    if(x === y || 
        ((x == 2 && y == 0) ||
         (y == 2 && x == 0))
      ){
        for(let i in [0,1,2]){
          if(this.board[i][i] !== checking)
          {
            win[0] = false;
          }
          if(this.board[2-i][i] !== checking){
            win[1] = false;
          }
        }
        console.log(win);
        if(win[0] || win[1])
          return true;
    }
    //Check verticals and horizontals
    win[0] = true;
    win[1] = true;
    for(let i in [0,1,2]){
      if(this.board[x][i] !== checking){
        win[0]=false;
      }
      if(this.board[i][y] !== checking){
        win[1] = false;
      }
    }
    console.log(win);
    if(win[0] || win[1])
      return true;
    return false;
  }

  private initBoard(): number[][]{
    return [
      [-1,-1,-1],
      [-1,-1,-1],
      [-1,-1,-1]
    ];
  }
}




































// @ts-ignore
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  template: `
    <div id="statusArea" className="status">Next player: <span>{{nextPlayer()}}</span></div>
    <div id="currentPlayerArea" className="status">Current player: <span>{{currentPlayer()}}</span></div>
    <div id="winnerArea" className="winner">Winner: <span>{{winner}}</span></div>
    <button (click)="reset()">Reset</button>
    

    

    <section>
      <div class="row" *ngFor="let row of [1, 2, 3]; let y=index;">
        <button *ngFor="let col of [1, 2, 3]; let x=index;" class="square" style="width:40px;height:40px;padding: 0 !important" (click)="selected(x, y)"><span>{{grid[x][y]}}</span></button>
      </div>
    </section>
  `,
  styles: []
})

export class MainAppComponent implements OnInit {

  isX = true;
  grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  winner = 'None';

  ngOnInit() {
  }

  reset() {
    this.grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];

    this.winner = 'None';
    this.isX = true;
  }

  nextPlayer(): string {
    return this.isX ? 'O' : 'X'
  }

  currentPlayer(): string {
    return this.isX ? 'X' : 'O'
  }

  selected(x: number, y: number): void {
    if (this.grid[x][y] === '' && this.winner === 'None') {
      this.grid[x][y] = this.currentPlayer();

      if (this.checkIfWon()) {
        this.winner = this.currentPlayer();
      }

      this.changePlayer();
    }
  }

  changePlayer() {
    this.isX = !this.isX;
  }

  checkIfWon() {
    // check columns
    for (let x = 0; x < 3; x++) { 
      let sequence = [];
      for (let y = 0; y < 3; y++) {
        sequence[y] = this.grid[x][y];
      }
      if (!sequence.includes('') && this.allEqual(sequence))
        return true;
    }

    // check rows
    for (let x = 0; x < 3; x++) { 
      let sequence = [];
      for (let y = 0; y < 3; y++) {
        sequence[y] = this.grid[y][x];
      }
      if (!sequence.includes('') && this.allEqual(sequence))
        return true;
    }

    // check diagonals 
    let sequence = [];
    sequence[0] = this.grid[0][0];
    sequence[1] = this.grid[1][1];
    sequence[2] = this.grid[2][2];
    
    if (!sequence.includes('') && this.allEqual(sequence))
        return true;

    sequence = [];
    sequence[0] = this.grid[2][0];
    sequence[1] = this.grid[1][1];
    sequence[2] = this.grid[0][2];

    if (!sequence.includes('') && this.allEqual(sequence))
        return true;

    return false;
  }

  allEqual(arr): boolean {
    return arr.every(val => val === arr[0]);
  }

}