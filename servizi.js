/* $(document).ready(function(){

    var showHeaderAt = 150;

    var win = $(window),
            body = $('body');

    // Show the fixed header only on larger screen devices

    if(win.width() > 400){

        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.

        win.on('scroll', function(e){

            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            }
            else {
                body.removeClass('fixed');
            }
        });

    }

}); */




/* 
var controller = new ScrollMagic.Controller();
var t1 = new TimelineMax();
t1.from(".card1", 2, {y:"+100%", ease: "power1.out" });

var scene = new ScrollMagic.Scene({
    triggerElement: "#hero",
    triggerHook: 0.8,
    duration: "100%"
})
    .setTween(t1)
    .addTo(controller); 
 */


    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
          entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
      };
      
      const Obs = new IntersectionObserver(inViewport);
      const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
      
      // Attach observer to every [data-inviewport] element:
      const ELs_inViewport = document.getElementsByClassName('toobserve')
      Array.prototype.forEach.call(ELs_inViewport,function(EL){
        Obs.observe(EL, obsOptions);
      })