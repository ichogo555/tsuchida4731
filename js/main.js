'use strict'; 

var d = new Date();

document.write(d.getFullYear()+ "/" + (d.getMonth()+1) + "/" + d.getDate());


const target1 = document.getElementById('target1');
const target2 = document.getElementById('target2');



target1.addEventListener('click', () => { 
   target1.classList.toggle('circle1');
   target1.textContent ='';
});
target2.addEventListener('click', () => { 
   target2.classList.toggle('circle2');
   target2.textContent = '池田則之';
});  
 
       
      //フィールドサイズ
      const FIELD_COL = 10;
      const FIELD_ROW = 10;

      //ブロック一つのサイズ（ピクセル）
      const BLOCK_SIZE = 30;

      //スクリーンサイズ
      const SCREEN_W = BLOCK_SIZE * FIELD_COL;
      const SCREEN_H = BLOCK_SIZE * FIELD_ROW;

      // テトロミノのサイズ
      const TETRO_SIZE = 4;

    let can = document.getElementById("can");
    let con = can.getContext("2d");

    can.width        = SCREEN_W;
    can.height       = SCREEN_H;
    can.style.border = "4px solid #555";

    //テトロミノ本体
      let tetro = [
        [ 0, 0, 0, 0 ],
        [ 1, 1, 0, 0 ],
        [ 0, 1, 1, 0 ],
        [ 0, 0, 0, 0 ]
       ];
      // テトロミノの座標
      let tetro_x = 0;
      let tetro_y = 0;

    // フィールドの中身
    let field = [];

    init();
    drawAll();

    //初期化
  function init()
  {
    //フィールドのクリア
    for (let y=0; y<FIELD_ROW ; y++ )
      {
         field[y] = [];
         for (let x=0; x<FIELD_COL ; x++ )
        { 
          field[y][x] = 0;
        }
      }
  
    //テスト
    field[ 5][8] = 1;
    field[19][0] = 1;
    field[19][9] = 1;

  }

    //ブロック描画する
    function drawBlock(x,y)
    {
      let px = x * BLOCK_SIZE;
      let py = y * BLOCK_SIZE;

      con.fillStyle = "red";
      con.fillRect(px,py, BLOCK_SIZE, BLOCK_SIZE );
      con.strokeStyle= "black";
      con.strokeRect(px,py, BLOCK_SIZE, BLOCK_SIZE );
    }

      // 全部描画する
    function drawAll()
    {
      con.clearRect(0,0,SCREEN_W,SCREEN_H);    

    for (let y=0; y<FIELD_ROW ; y++ )
      {
         for (let x=0; x<FIELD_COL ; x++ )
        {
          if ( field[y][x] )
          {
           drawBlock(x,y);
          }
        }
      }

      for(let y=0; y<TETRO_SIZE ; y++ )
      {
        for (let x=0; x<TETRO_SIZE ; x++ )
        {
          if( tetro[y][x] )
          {
            drawBlock(tetro_x+x, tetro_y+y);
          }
        }
      }
    }
  
// キーボードが押された時の処理
document.onkeydown = function(e)
{
  switch( e.keyCode )
  {
      case 37:// 左
          tetro_x--;
          break;
      case 38:// 上
          tetro_y--;
          break;
      case 39:// 右
          tetro_x++;
          break;
      case 40:// 下
          tetro_y++;
          break;
      case 32:// スペース
          break;
      
  }
  drawAll();
}