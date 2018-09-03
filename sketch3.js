let b,can,sl,p,sel,col,inp,inprem,newx,par_color,sq;
let bs=[];let qs=[];
let snow;
function setup() {
  set_Up();
snow=select("#jump");snow.position(550,200);
snow.class("input");
}

function draw() {
background(col);text(bs.length,20,20);
//b.col=color(200,0,0);b.move();b.chbd();b.show();
//sq.move();sq.chbd();sq.show();
for(let j=bs.length-1;j>-1;j--){
 bs[j].move();bs[j].chbd();bs[j].show();//bs[j].coll(qs);
}
for(let j=qs.length-1;j>-1;j--){
 qs[j].move();qs[j].chbd();qs[j].show();//qs[j].coll(bs);//bs[j].coll(qs);
}
colls(qs,bs);
fill(200,200,0);rect(50+random(20),50+random(20),40,40);
fill(0,0,200);ellipse(50+random(20),50+random(20),10,50);


}
