var canvas=new fabric.Canvas('mycanvas') ; 
block_image_width =30;
block_image_height =30;
player_x = 10 ;
player_y = 10 ;
 var player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object =Img;
player_object.scaleToWidth(150);
player_object.scaleToheight(140);
player_object.set({
    top:player_x,
    bottom:player_y,
});
canvas.add(player_object);
});
}
function new_image(get_image){
    fabric.Image.fromURL( get_image,function(Img){
        block_object =Img;
        block_object.scaleToWidth(150);
        block_object.scaleToheight(140);
        block_object.set({
            top:player_x,
            bottom:player_y,
        });
        canvas.add(block_object);
        });
}