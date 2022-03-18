//làm hiệu ứng chuyển ảnh 
const btn_left = document.querySelector('.bxs-chevron-left');
const btn_right = document.querySelector('.bxs-chevron-right');
const img_curent = document.querySelector('.background__img')
var slide_move =  {
   
        imgIndex : 0,
  

    img_list : [
        {
            url : "./img/background.jpg"
        },
        {
            url : "./img/underunder.jpg"
        },
        
    ],
 
    getIndeximg : function(){
        return this.img_list[this.imgIndex]

        
    },
    render_img : function(){
        img_curent.style.backgroundImage = `url('${this.getIndeximg().url}')`
      
    },
    handle :  function(){
       var _this= this;
        //bấm đẻ chuyển tiếp hình ảnh
        btn_left.onclick = function(){
            _this.imgIndex--;
            if(_this.imgIndex<0){
                _this.imgIndex = _this.img_list.length-1;
            }
          
            _this.render_img()
        }
        btn_right.onclick = function(){
            _this.imgIndex++;
            if(_this.imgIndex>_this.img_list.length-1){
                _this.imgIndex = 0;
            }
          
            _this.render_img()
        }
    },
   start: function(){
       this.handle();
   },

}
 slide_move.start()


//làm nút bấm màu xanh tìm kiếm 
var x = document.querySelectorAll('.background__seach-top-iteam ')

x.forEach(function(e){

    e.onclick= function(){
var background__seach_top_list = document.querySelector('.background__seach-top-iteam.active')
       
            background__seach_top_list.classList.remove('active')
            e.classList.add('active');
            check_Quick_Seach();

    }
}) 

function check_Quick_Seach(){
    var seach = document.querySelector('#seachs')
    var background__seach_bottom__active = document.querySelector('.background__seach-bottom--active')
    if(seach.classList.contains('active')==true){
        background__seach_bottom__active.style.display = "flex"
    }
    else{
        background__seach_bottom__active.style.display = "none"

    }
}