m=0;
var y;
function START()
{
    y=setInterval(run,100);

    function run()
    {
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else
        {
            m+=10
            var x=document.getElementById("img");
            x.style.marginLeft=m+'px';
        }
    }



}
function STOP()
{

clearInterval(y)

}