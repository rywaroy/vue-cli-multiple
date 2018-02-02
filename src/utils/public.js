export default {
    path:'',
    set_font(num){
        // 计算、转换布局单位
        var html = document.getElementsByTagName('html')[0];
        var designFontSize = 100;
        var designWidth = num||750;
        function setFontSize() {
          var winWidth = document.documentElement.getBoundingClientRect().width;
          winWidth=winWidth>750?750:winWidth;
          var fontSize = winWidth / designWidth * designFontSize;

          html.style.fontSize = fontSize + 'px';
        }
        setFontSize();
        window.addEventListener('resize', function () {
          setFontSize();
        });
        return this;
    },
    getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return unescape(r[2])
        return null
    }
}
