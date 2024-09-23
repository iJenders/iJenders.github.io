import{u as K,r as Q,d as q,o as C,c as R,a as f,l as Z,t as U,e as ee,m as te,p as ae,g as D,w as V,h as X,F as ie,i as ne}from"./index-A8-HdTP-.js";import{_ as $}from"./plugin-vue_export-helper-DlAUqK2U.js";import{g as L,S as se,a as re}from"./swiper-vue-Dr5AqCLl.js";const oe={class:"Icon"},ce={class:"Title"},le={class:"Description"},ue={__name:"FeatureCard",props:{icon:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},background:{type:String,required:!0},url:{type:String,required:!0}},setup(u){K(s=>({bd57876c:t.value,"4627be45":n.value,c49c8eae:a.value}));const i=u,l=()=>{window.open(i.url,"_blank")},e=Q(!1),t=q(()=>`url('/src/img/${i.background}.jpg')`),a=q(()=>e.value?`url('/src/img/${i.background}.gif')`:"#000000"),n=q(()=>{let s=0;return e.value&&(s=1),`opacity(${s}) brightness(0.4)`}),o=s=>{e.value=s};return(s,r)=>(C(),R("div",{class:"FeatureCard",onClick:l,onPointerenter:r[0]||(r[0]=c=>o(!0)),onPointerleave:r[1]||(r[1]=c=>o(!1))},[r[2]||(r[2]=f("div",{class:"Background"},null,-1)),f("div",oe,[f("i",{class:Z(i.icon)},null,2)]),f("div",ce,[f("h3",null,U(i.title),1)]),f("div",le,U(i.description),1)],32))}},de=$(ue,[["__scopeId","data-v-1d1c912e"]]);function ve(u){let{swiper:i,extendParams:l,on:e,emit:t,params:a}=u;i.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,s=a&&a.autoplay?a.autoplay.delay:3e3,r=a&&a.autoplay?a.autoplay.delay:3e3,c,v=new Date().getTime(),p,y,m,S,h,b,_;function M(d){!i||i.destroyed||!i.wrapperEl||d.target===i.wrapperEl&&(i.wrapperEl.removeEventListener("transitionend",M),!(_||d.detail&&d.detail.bySwiperTouchMove)&&A())}const g=()=>{if(i.destroyed||!i.autoplay.running)return;i.autoplay.paused?p=!0:p&&(r=c,p=!1);const d=i.autoplay.paused?c:v+r-new Date().getTime();i.autoplay.timeLeft=d,t("autoplayTimeLeft",d,d/s),o=requestAnimationFrame(()=>{g()})},P=()=>{let d;return i.virtual&&i.params.virtual.enabled?d=i.slides.filter(w=>w.classList.contains("swiper-slide-active"))[0]:d=i.slides[i.activeIndex],d?parseInt(d.getAttribute("data-swiper-autoplay"),10):void 0},F=d=>{if(i.destroyed||!i.autoplay.running)return;cancelAnimationFrame(o),g();let k=typeof d>"u"?i.params.autoplay.delay:d;s=i.params.autoplay.delay,r=i.params.autoplay.delay;const w=P();!Number.isNaN(w)&&w>0&&typeof d>"u"&&(k=w,s=w,r=w),c=k;const T=i.params.speed,N=()=>{!i||i.destroyed||(i.params.autoplay.reverseDirection?!i.isBeginning||i.params.loop||i.params.rewind?(i.slidePrev(T,!0,!0),t("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(i.slides.length-1,T,!0,!0),t("autoplay")):!i.isEnd||i.params.loop||i.params.rewind?(i.slideNext(T,!0,!0),t("autoplay")):i.params.autoplay.stopOnLastSlide||(i.slideTo(0,T,!0,!0),t("autoplay")),i.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{F()})))};return k>0?(clearTimeout(n),n=setTimeout(()=>{N()},k)):requestAnimationFrame(()=>{N()}),k},O=()=>{v=new Date().getTime(),i.autoplay.running=!0,F(),t("autoplayStart")},E=()=>{i.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),t("autoplayStop")},z=(d,k)=>{if(i.destroyed||!i.autoplay.running)return;clearTimeout(n),d||(b=!0);const w=()=>{t("autoplayPause"),i.params.autoplay.waitForTransition?i.wrapperEl.addEventListener("transitionend",M):A()};if(i.autoplay.paused=!0,k){h&&(c=i.params.autoplay.delay),h=!1,w();return}c=(c||i.params.autoplay.delay)-(new Date().getTime()-v),!(i.isEnd&&c<0&&!i.params.loop)&&(c<0&&(c=0),w())},A=()=>{i.isEnd&&c<0&&!i.params.loop||i.destroyed||!i.autoplay.running||(v=new Date().getTime(),b?(b=!1,F(c)):F(),i.autoplay.paused=!1,t("autoplayResume"))},j=()=>{if(i.destroyed||!i.autoplay.running)return;const d=L();d.visibilityState==="hidden"&&(b=!0,z(!0)),d.visibilityState==="visible"&&A()},J=d=>{d.pointerType==="mouse"&&(b=!0,_=!0,!(i.animating||i.autoplay.paused)&&z(!0))},B=d=>{d.pointerType==="mouse"&&(_=!1,i.autoplay.paused&&A())},H=()=>{i.params.autoplay.pauseOnMouseEnter&&(i.el.addEventListener("pointerenter",J),i.el.addEventListener("pointerleave",B))},W=()=>{i.el&&typeof i.el!="string"&&(i.el.removeEventListener("pointerenter",J),i.el.removeEventListener("pointerleave",B))},G=()=>{L().addEventListener("visibilitychange",j)},Y=()=>{L().removeEventListener("visibilitychange",j)};e("init",()=>{i.params.autoplay.enabled&&(H(),G(),O())}),e("destroy",()=>{W(),Y(),i.autoplay.running&&E()}),e("_freeModeStaticRelease",()=>{(m||b)&&A()}),e("_freeModeNoMomentumRelease",()=>{i.params.autoplay.disableOnInteraction?E():z(!0,!0)}),e("beforeTransitionStart",(d,k,w)=>{i.destroyed||!i.autoplay.running||(w||!i.params.autoplay.disableOnInteraction?z(!0,!0):E())}),e("sliderFirstMove",()=>{if(!(i.destroyed||!i.autoplay.running)){if(i.params.autoplay.disableOnInteraction){E();return}y=!0,m=!1,b=!1,S=setTimeout(()=>{b=!0,m=!0,z(!0)},200)}}),e("touchEnd",()=>{if(!(i.destroyed||!i.autoplay.running||!y)){if(clearTimeout(S),clearTimeout(n),i.params.autoplay.disableOnInteraction){m=!1,y=!1;return}m&&i.params.cssMode&&A(),m=!1,y=!1}}),e("slideChange",()=>{i.destroyed||!i.autoplay.running||(h=!0)}),Object.assign(i.autoplay,{start:O,stop:E,pause:z,resume:A})}var fe=function(u,i){var l=document.querySelector("#"+u+" > .particles-js-canvas-el");this.pJS={canvas:{el:l,w:l.offsetWidth,h:l.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var e=this.pJS;i&&Object.deepExtend(e,i),e.tmp.obj={size_value:e.particles.size.value,size_anim_speed:e.particles.size.anim.speed,move_speed:e.particles.move.speed,line_linked_distance:e.particles.line_linked.distance,line_linked_width:e.particles.line_linked.width,mode_grab_distance:e.interactivity.modes.grab.distance,mode_bubble_distance:e.interactivity.modes.bubble.distance,mode_bubble_size:e.interactivity.modes.bubble.size,mode_repulse_distance:e.interactivity.modes.repulse.distance},e.fn.retinaInit=function(){e.retina_detect&&window.devicePixelRatio>1?(e.canvas.pxratio=window.devicePixelRatio,e.tmp.retina=!0):(e.canvas.pxratio=1,e.tmp.retina=!1),e.canvas.w=e.canvas.el.offsetWidth*e.canvas.pxratio,e.canvas.h=e.canvas.el.offsetHeight*e.canvas.pxratio,e.particles.size.value=e.tmp.obj.size_value*e.canvas.pxratio,e.particles.size.anim.speed=e.tmp.obj.size_anim_speed*e.canvas.pxratio,e.particles.move.speed=e.tmp.obj.move_speed*e.canvas.pxratio,e.particles.line_linked.distance=e.tmp.obj.line_linked_distance*e.canvas.pxratio,e.interactivity.modes.grab.distance=e.tmp.obj.mode_grab_distance*e.canvas.pxratio,e.interactivity.modes.bubble.distance=e.tmp.obj.mode_bubble_distance*e.canvas.pxratio,e.particles.line_linked.width=e.tmp.obj.line_linked_width*e.canvas.pxratio,e.interactivity.modes.bubble.size=e.tmp.obj.mode_bubble_size*e.canvas.pxratio,e.interactivity.modes.repulse.distance=e.tmp.obj.mode_repulse_distance*e.canvas.pxratio},e.fn.canvasInit=function(){e.canvas.ctx=e.canvas.el.getContext("2d")},e.fn.canvasSize=function(){e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e&&e.interactivity.events.resize&&window.addEventListener("resize",function(){e.canvas.w=e.canvas.el.offsetWidth,e.canvas.h=e.canvas.el.offsetHeight,e.tmp.retina&&(e.canvas.w*=e.canvas.pxratio,e.canvas.h*=e.canvas.pxratio),e.canvas.el.width=e.canvas.w,e.canvas.el.height=e.canvas.h,e.particles.move.enable||(e.fn.particlesEmpty(),e.fn.particlesCreate(),e.fn.particlesDraw(),e.fn.vendors.densityAutoParticles()),e.fn.vendors.densityAutoParticles()})},e.fn.canvasPaint=function(){e.canvas.ctx.fillRect(0,0,e.canvas.w,e.canvas.h)},e.fn.canvasClear=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h)},e.fn.particle=function(t,a,n){if(this.radius=(e.particles.size.random?Math.random():1)*e.particles.size.value,e.particles.size.anim.enable&&(this.size_status=!1,this.vs=e.particles.size.anim.speed/100,e.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=n?n.x:Math.random()*e.canvas.w,this.y=n?n.y:Math.random()*e.canvas.h,this.x>e.canvas.w-this.radius*2?this.x=this.x-this.radius:this.x<this.radius*2&&(this.x=this.x+this.radius),this.y>e.canvas.h-this.radius*2?this.y=this.y-this.radius:this.y<this.radius*2&&(this.y=this.y+this.radius),e.particles.move.bounce&&e.fn.vendors.checkOverlap(this,n),this.color={},typeof t.value=="object")if(t.value instanceof Array){var o=t.value[Math.floor(Math.random()*e.particles.color.value.length)];this.color.rgb=I(o)}else t.value.r!=null&&t.value.g!=null&&t.value.b!=null&&(this.color.rgb={r:t.value.r,g:t.value.g,b:t.value.b}),t.value.h!=null&&t.value.s!=null&&t.value.l!=null&&(this.color.hsl={h:t.value.h,s:t.value.s,l:t.value.l});else t.value=="random"?this.color.rgb={r:Math.floor(Math.random()*256)+0,g:Math.floor(Math.random()*256)+0,b:Math.floor(Math.random()*256)+0}:typeof t.value=="string"&&(this.color=t,this.color.rgb=I(this.color.value));this.opacity=(e.particles.opacity.random?Math.random():1)*e.particles.opacity.value,e.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=e.particles.opacity.anim.speed/100,e.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var s={};switch(e.particles.move.direction){case"top":s={x:0,y:-1};break;case"top-right":s={x:.5,y:-.5};break;case"right":s={x:1,y:-0};break;case"bottom-right":s={x:.5,y:.5};break;case"bottom":s={x:0,y:1};break;case"bottom-left":s={x:-.5,y:1};break;case"left":s={x:-1,y:0};break;case"top-left":s={x:-.5,y:-.5};break;default:s={x:0,y:0};break}e.particles.move.straight?(this.vx=s.x,this.vy=s.y,e.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=s.x+Math.random()-.5,this.vy=s.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var r=e.particles.shape.type;if(typeof r=="object"){if(r instanceof Array){var c=r[Math.floor(Math.random()*r.length)];this.shape=c}}else this.shape=r;if(this.shape=="image"){var v=e.particles.shape;this.img={src:v.image.src,ratio:v.image.width/v.image.height},this.img.ratio||(this.img.ratio=1),e.tmp.img_type=="svg"&&e.tmp.source_svg!=null&&(e.fn.vendors.createSvgImg(this),e.tmp.pushing&&(this.img.loaded=!1))}},e.fn.particle.prototype.draw=function(){var t=this;if(t.radius_bubble!=null)var a=t.radius_bubble;else var a=t.radius;if(t.opacity_bubble!=null)var n=t.opacity_bubble;else var n=t.opacity;if(t.color.rgb)var o="rgba("+t.color.rgb.r+","+t.color.rgb.g+","+t.color.rgb.b+","+n+")";else var o="hsla("+t.color.hsl.h+","+t.color.hsl.s+"%,"+t.color.hsl.l+"%,"+n+")";switch(e.canvas.ctx.fillStyle=o,e.canvas.ctx.beginPath(),t.shape){case"circle":e.canvas.ctx.arc(t.x,t.y,a,0,Math.PI*2,!1);break;case"edge":e.canvas.ctx.rect(t.x-a,t.y-a,a*2,a*2);break;case"triangle":e.fn.vendors.drawShape(e.canvas.ctx,t.x-a,t.y+a/1.66,a*2,3,2);break;case"polygon":e.fn.vendors.drawShape(e.canvas.ctx,t.x-a/(e.particles.shape.polygon.nb_sides/3.5),t.y-a/(2.66/3.5),a*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,1);break;case"star":e.fn.vendors.drawShape(e.canvas.ctx,t.x-a*2/(e.particles.shape.polygon.nb_sides/4),t.y-a/(2*2.66/3.5),a*2*2.66/(e.particles.shape.polygon.nb_sides/3),e.particles.shape.polygon.nb_sides,2);break;case"image":let r=function(){e.canvas.ctx.drawImage(s,t.x-a,t.y-a,a*2,a*2/t.img.ratio)};if(e.tmp.img_type=="svg")var s=t.img.obj;else var s=e.tmp.img_obj;s&&r();break}e.canvas.ctx.closePath(),e.particles.shape.stroke.width>0&&(e.canvas.ctx.strokeStyle=e.particles.shape.stroke.color,e.canvas.ctx.lineWidth=e.particles.shape.stroke.width,e.canvas.ctx.stroke()),e.canvas.ctx.fill()},e.fn.particlesCreate=function(){for(var t=0;t<e.particles.number.value;t++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value))},e.fn.particlesUpdate=function(){for(var t=0;t<e.particles.array.length;t++){var a=e.particles.array[t];if(e.particles.move.enable){var n=e.particles.move.speed/2;a.x+=a.vx*n,a.y+=a.vy*n}if(e.particles.opacity.anim.enable&&(a.opacity_status==!0?(a.opacity>=e.particles.opacity.value&&(a.opacity_status=!1),a.opacity+=a.vo):(a.opacity<=e.particles.opacity.anim.opacity_min&&(a.opacity_status=!0),a.opacity-=a.vo),a.opacity<0&&(a.opacity=0)),e.particles.size.anim.enable&&(a.size_status==!0?(a.radius>=e.particles.size.value&&(a.size_status=!1),a.radius+=a.vs):(a.radius<=e.particles.size.anim.size_min&&(a.size_status=!0),a.radius-=a.vs),a.radius<0&&(a.radius=0)),e.particles.move.out_mode=="bounce")var o={x_left:a.radius,x_right:e.canvas.w,y_top:a.radius,y_bottom:e.canvas.h};else var o={x_left:-a.radius,x_right:e.canvas.w+a.radius,y_top:-a.radius,y_bottom:e.canvas.h+a.radius};switch(a.x-a.radius>e.canvas.w?(a.x=o.x_left,a.y=Math.random()*e.canvas.h):a.x+a.radius<0&&(a.x=o.x_right,a.y=Math.random()*e.canvas.h),a.y-a.radius>e.canvas.h?(a.y=o.y_top,a.x=Math.random()*e.canvas.w):a.y+a.radius<0&&(a.y=o.y_bottom,a.x=Math.random()*e.canvas.w),e.particles.move.out_mode){case"bounce":(a.x+a.radius>e.canvas.w||a.x-a.radius<0)&&(a.vx=-a.vx),(a.y+a.radius>e.canvas.h||a.y-a.radius<0)&&(a.vy=-a.vy);break}if(x("grab",e.interactivity.events.onhover.mode)&&e.fn.modes.grabParticle(a),(x("bubble",e.interactivity.events.onhover.mode)||x("bubble",e.interactivity.events.onclick.mode))&&e.fn.modes.bubbleParticle(a),(x("repulse",e.interactivity.events.onhover.mode)||x("repulse",e.interactivity.events.onclick.mode))&&e.fn.modes.repulseParticle(a),e.particles.line_linked.enable||e.particles.move.attract.enable)for(var s=t+1;s<e.particles.array.length;s++){var r=e.particles.array[s];e.particles.line_linked.enable&&e.fn.interact.linkParticles(a,r),e.particles.move.attract.enable&&e.fn.interact.attractParticles(a,r),e.particles.move.bounce&&e.fn.interact.bounceParticles(a,r)}}},e.fn.particlesDraw=function(){e.canvas.ctx.clearRect(0,0,e.canvas.w,e.canvas.h),e.fn.particlesUpdate();for(var t=0;t<e.particles.array.length;t++){var a=e.particles.array[t];a.draw()}},e.fn.particlesEmpty=function(){e.particles.array=[]},e.fn.particlesRefresh=function(){cancelRequestAnimFrame(e.fn.checkAnimFrame),cancelRequestAnimFrame(e.fn.drawAnimFrame),e.tmp.source_svg=void 0,e.tmp.img_obj=void 0,e.tmp.count_svg=0,e.fn.particlesEmpty(),e.fn.canvasClear(),e.fn.vendors.start()},e.fn.interact.linkParticles=function(t,a){var n=t.x-a.x,o=t.y-a.y,s=Math.sqrt(n*n+o*o);if(s<=e.particles.line_linked.distance){var r=e.particles.line_linked.opacity-s/(1/e.particles.line_linked.opacity)/e.particles.line_linked.distance;if(r>0){var c=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(t.x,t.y),e.canvas.ctx.lineTo(a.x,a.y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}},e.fn.interact.attractParticles=function(t,a){var n=t.x-a.x,o=t.y-a.y,s=Math.sqrt(n*n+o*o);if(s<=e.particles.line_linked.distance){var r=n/(e.particles.move.attract.rotateX*1e3),c=o/(e.particles.move.attract.rotateY*1e3);t.vx-=r,t.vy-=c,a.vx+=r,a.vy+=c}},e.fn.interact.bounceParticles=function(t,a){var n=t.x-a.x,o=t.y-a.y,s=Math.sqrt(n*n+o*o),r=t.radius+a.radius;s<=r&&(t.vx=-t.vx,t.vy=-t.vy,a.vx=-a.vx,a.vy=-a.vy)},e.fn.modes.pushParticles=function(t,a){e.tmp.pushing=!0;for(var n=0;n<t;n++)e.particles.array.push(new e.fn.particle(e.particles.color,e.particles.opacity.value,{x:a?a.pos_x:Math.random()*e.canvas.w,y:a?a.pos_y:Math.random()*e.canvas.h})),n==t-1&&(e.particles.move.enable||e.fn.particlesDraw(),e.tmp.pushing=!1)},e.fn.modes.removeParticles=function(t){e.particles.array.splice(0,t),e.particles.move.enable||e.fn.particlesDraw()},e.fn.modes.bubbleParticle=function(t){if(e.interactivity.events.onhover.enable&&x("bubble",e.interactivity.events.onhover.mode)){let y=function(){t.opacity_bubble=t.opacity,t.radius_bubble=t.radius};var a=t.x-e.interactivity.mouse.pos_x,n=t.y-e.interactivity.mouse.pos_y,o=Math.sqrt(a*a+n*n),s=1-o/e.interactivity.modes.bubble.distance;if(o<=e.interactivity.modes.bubble.distance){if(s>=0&&e.interactivity.status=="mousemove"){if(e.interactivity.modes.bubble.size!=e.particles.size.value)if(e.interactivity.modes.bubble.size>e.particles.size.value){var r=t.radius+e.interactivity.modes.bubble.size*s;r>=0&&(t.radius_bubble=r)}else{var c=t.radius-e.interactivity.modes.bubble.size,r=t.radius-c*s;r>0?t.radius_bubble=r:t.radius_bubble=0}if(e.interactivity.modes.bubble.opacity!=e.particles.opacity.value)if(e.interactivity.modes.bubble.opacity>e.particles.opacity.value){var v=e.interactivity.modes.bubble.opacity*s;v>t.opacity&&v<=e.interactivity.modes.bubble.opacity&&(t.opacity_bubble=v)}else{var v=t.opacity-(e.particles.opacity.value-e.interactivity.modes.bubble.opacity)*s;v<t.opacity&&v>=e.interactivity.modes.bubble.opacity&&(t.opacity_bubble=v)}}}else y();e.interactivity.status=="mouseleave"&&y()}else if(e.interactivity.events.onclick.enable&&x("bubble",e.interactivity.events.onclick.mode)){let y=function(m,S,h,b,_){if(m!=S)if(e.tmp.bubble_duration_end){if(h!=null){var P=b-p*(b-m)/e.interactivity.modes.bubble.duration,F=m-P;g=m+F,_=="size"&&(t.radius_bubble=g),_=="opacity"&&(t.opacity_bubble=g)}}else if(o<=e.interactivity.modes.bubble.distance){if(h!=null)var M=h;else var M=b;if(M!=m){var g=b-p*(b-m)/e.interactivity.modes.bubble.duration;_=="size"&&(t.radius_bubble=g),_=="opacity"&&(t.opacity_bubble=g)}}else _=="size"&&(t.radius_bubble=void 0),_=="opacity"&&(t.opacity_bubble=void 0)};if(e.tmp.bubble_clicking){var a=t.x-e.interactivity.mouse.click_pos_x,n=t.y-e.interactivity.mouse.click_pos_y,o=Math.sqrt(a*a+n*n),p=(new Date().getTime()-e.interactivity.mouse.click_time)/1e3;p>e.interactivity.modes.bubble.duration&&(e.tmp.bubble_duration_end=!0),p>e.interactivity.modes.bubble.duration*2&&(e.tmp.bubble_clicking=!1,e.tmp.bubble_duration_end=!1)}e.tmp.bubble_clicking&&(y(e.interactivity.modes.bubble.size,e.particles.size.value,t.radius_bubble,t.radius,"size"),y(e.interactivity.modes.bubble.opacity,e.particles.opacity.value,t.opacity_bubble,t.opacity,"opacity"))}},e.fn.modes.repulseParticle=function(t){if(e.interactivity.events.onhover.enable&&x("repulse",e.interactivity.events.onhover.mode)&&e.interactivity.status=="mousemove"){var a=t.x-e.interactivity.mouse.pos_x,n=t.y-e.interactivity.mouse.pos_y,o=Math.sqrt(a*a+n*n),s={x:a/o,y:n/o},r=e.interactivity.modes.repulse.distance,c=100,v=me(1/r*(-1*Math.pow(o/r,2)+1)*r*c,0,50),p={x:t.x+s.x*v,y:t.y+s.y*v};e.particles.move.out_mode=="bounce"?(p.x-t.radius>0&&p.x+t.radius<e.canvas.w&&(t.x=p.x),p.y-t.radius>0&&p.y+t.radius<e.canvas.h&&(t.y=p.y)):(t.x=p.x,t.y=p.y)}else if(e.interactivity.events.onclick.enable&&x("repulse",e.interactivity.events.onclick.mode))if(e.tmp.repulse_finish||(e.tmp.repulse_count++,e.tmp.repulse_count==e.particles.array.length&&(e.tmp.repulse_finish=!0)),e.tmp.repulse_clicking){let _=function(){var M=Math.atan2(m,y);if(t.vx=h*Math.cos(M),t.vy=h*Math.sin(M),e.particles.move.out_mode=="bounce"){var g={x:t.x+t.vx,y:t.y+t.vy};(g.x+t.radius>e.canvas.w||g.x-t.radius<0)&&(t.vx=-t.vx),(g.y+t.radius>e.canvas.h||g.y-t.radius<0)&&(t.vy=-t.vy)}};var r=Math.pow(e.interactivity.modes.repulse.distance/6,3),y=e.interactivity.mouse.click_pos_x-t.x,m=e.interactivity.mouse.click_pos_y-t.y,S=y*y+m*m,h=-r/S*1;S<=r&&_()}else e.tmp.repulse_clicking==!1&&(t.vx=t.vx_i,t.vy=t.vy_i)},e.fn.modes.grabParticle=function(t){if(e.interactivity.events.onhover.enable&&e.interactivity.status=="mousemove"){var a=t.x-e.interactivity.mouse.pos_x,n=t.y-e.interactivity.mouse.pos_y,o=Math.sqrt(a*a+n*n);if(o<=e.interactivity.modes.grab.distance){var s=e.interactivity.modes.grab.line_linked.opacity-o/(1/e.interactivity.modes.grab.line_linked.opacity)/e.interactivity.modes.grab.distance;if(s>0){var r=e.particles.line_linked.color_rgb_line;e.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+s+")",e.canvas.ctx.lineWidth=e.particles.line_linked.width,e.canvas.ctx.beginPath(),e.canvas.ctx.moveTo(t.x,t.y),e.canvas.ctx.lineTo(e.interactivity.mouse.pos_x,e.interactivity.mouse.pos_y),e.canvas.ctx.stroke(),e.canvas.ctx.closePath()}}}},e.fn.vendors.eventsListeners=function(){e.interactivity.detect_on=="window"?e.interactivity.el=window:e.interactivity.el=e.canvas.el,(e.interactivity.events.onhover.enable||e.interactivity.events.onclick.enable)&&(e.interactivity.el.addEventListener("mousemove",function(t){if(e.interactivity.el==window)var a=t.clientX,n=t.clientY;else var a=t.offsetX||t.clientX,n=t.offsetY||t.clientY;e.interactivity.mouse.pos_x=a,e.interactivity.mouse.pos_y=n,e.tmp.retina&&(e.interactivity.mouse.pos_x*=e.canvas.pxratio,e.interactivity.mouse.pos_y*=e.canvas.pxratio),e.interactivity.status="mousemove"}),e.interactivity.el.addEventListener("mouseleave",function(t){e.interactivity.mouse.pos_x=null,e.interactivity.mouse.pos_y=null,e.interactivity.status="mouseleave"})),e.interactivity.events.onclick.enable&&e.interactivity.el.addEventListener("click",function(){if(e.interactivity.mouse.click_pos_x=e.interactivity.mouse.pos_x,e.interactivity.mouse.click_pos_y=e.interactivity.mouse.pos_y,e.interactivity.mouse.click_time=new Date().getTime(),e.interactivity.events.onclick.enable)switch(e.interactivity.events.onclick.mode){case"push":e.particles.move.enable||e.interactivity.modes.push.particles_nb==1?e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb,e.interactivity.mouse):e.interactivity.modes.push.particles_nb>1&&e.fn.modes.pushParticles(e.interactivity.modes.push.particles_nb);break;case"remove":e.fn.modes.removeParticles(e.interactivity.modes.remove.particles_nb);break;case"bubble":e.tmp.bubble_clicking=!0;break;case"repulse":e.tmp.repulse_clicking=!0,e.tmp.repulse_count=0,e.tmp.repulse_finish=!1,setTimeout(function(){e.tmp.repulse_clicking=!1},e.interactivity.modes.repulse.duration*1e3);break}})},e.fn.vendors.densityAutoParticles=function(){if(e.particles.number.density.enable){var t=e.canvas.el.width*e.canvas.el.height/1e3;e.tmp.retina&&(t=t/(e.canvas.pxratio*2));var a=t*e.particles.number.value/e.particles.number.density.value_area,n=e.particles.array.length-a;n<0?e.fn.modes.pushParticles(Math.abs(n)):e.fn.modes.removeParticles(n)}},e.fn.vendors.checkOverlap=function(t,a){for(var n=0;n<e.particles.array.length;n++){var o=e.particles.array[n],s=t.x-o.x,r=t.y-o.y,c=Math.sqrt(s*s+r*r);c<=t.radius+o.radius&&(t.x=a?a.x:Math.random()*e.canvas.w,t.y=a?a.y:Math.random()*e.canvas.h,e.fn.vendors.checkOverlap(t))}},e.fn.vendors.createSvgImg=function(t){var a=e.tmp.source_svg,n=/#([0-9A-F]{3,6})/gi,o=a.replace(n,function(p,y,m,S){if(t.color.rgb)var h="rgba("+t.color.rgb.r+","+t.color.rgb.g+","+t.color.rgb.b+","+t.opacity+")";else var h="hsla("+t.color.hsl.h+","+t.color.hsl.s+"%,"+t.color.hsl.l+"%,"+t.opacity+")";return h}),s=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),r=window.URL||window.webkitURL||window,c=r.createObjectURL(s),v=new Image;v.addEventListener("load",function(){t.img.obj=v,t.img.loaded=!0,r.revokeObjectURL(c),e.tmp.count_svg++}),v.src=c},e.fn.vendors.destroypJS=function(){cancelAnimationFrame(e.fn.drawAnimFrame),l.remove(),pJSDom=null},e.fn.vendors.drawShape=function(t,a,n,o,s,r){var c=s*r,v=s/r,p=180*(v-2)/v,y=Math.PI-Math.PI*p/180;t.save(),t.beginPath(),t.translate(a,n),t.moveTo(0,0);for(var m=0;m<c;m++)t.lineTo(o,0),t.translate(o,0),t.rotate(y);t.fill(),t.restore()},e.fn.vendors.exportImg=function(){window.open(e.canvas.el.toDataURL("image/png"),"_blank")},e.fn.vendors.loadImg=function(t){if(e.tmp.img_error=void 0,e.particles.shape.image.src!="")if(t=="svg"){var a=new XMLHttpRequest;a.open("GET",e.particles.shape.image.src),a.onreadystatechange=function(o){a.readyState==4&&(a.status==200?(e.tmp.source_svg=o.currentTarget.response,e.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),e.tmp.img_error=!0))},a.send()}else{var n=new Image;n.addEventListener("load",function(){e.tmp.img_obj=n,e.fn.vendors.checkBeforeDraw()}),n.src=e.particles.shape.image.src}else console.log("Error pJS - No image.src"),e.tmp.img_error=!0},e.fn.vendors.draw=function(){e.particles.shape.type=="image"?e.tmp.img_type=="svg"?e.tmp.count_svg>=e.particles.number.value?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):e.tmp.img_obj!=null?(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame)):e.tmp.img_error||(e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw)):(e.fn.particlesDraw(),e.particles.move.enable?e.fn.drawAnimFrame=requestAnimFrame(e.fn.vendors.draw):cancelRequestAnimFrame(e.fn.drawAnimFrame))},e.fn.vendors.checkBeforeDraw=function(){e.particles.shape.type=="image"?e.tmp.img_type=="svg"&&e.tmp.source_svg==null?e.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(e.tmp.checkAnimFrame),e.tmp.img_error||(e.fn.vendors.init(),e.fn.vendors.draw())):(e.fn.vendors.init(),e.fn.vendors.draw())},e.fn.vendors.init=function(){e.fn.retinaInit(),e.fn.canvasInit(),e.fn.canvasSize(),e.fn.canvasPaint(),e.fn.particlesCreate(),e.fn.vendors.densityAutoParticles(),e.particles.line_linked.color_rgb_line=I(e.particles.line_linked.color)},e.fn.vendors.start=function(){x("image",e.particles.shape.type)?(e.tmp.img_type=e.particles.shape.image.src.substr(e.particles.shape.image.src.length-3),e.fn.vendors.loadImg(e.tmp.img_type)):e.fn.vendors.checkBeforeDraw()},e.fn.vendors.eventsListeners(),e.fn.vendors.start()};Object.deepExtend=function u(i,l){for(var e in l)l[e]&&l[e].constructor&&l[e].constructor===Object?(i[e]=i[e]||{},u(i[e],l[e])):i[e]=l[e];return i};window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){window.setTimeout(u,1e3/60)}}();window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}();function I(u){var i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;u=u.replace(i,function(e,t,a,n){return t+t+a+a+n+n});var l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function me(u,i,l){return Math.min(Math.max(u,i),l)}function x(u,i){return i.indexOf(u)>-1}window.pJSDom=[];window.particlesJS=function(u,i){typeof u!="string"&&(i=u,u="particles-js"),u||(u="particles-js");var l=document.getElementById(u),e="particles-js-canvas-el",t=l.getElementsByClassName(e);if(t.length)for(;t.length>0;)l.removeChild(t[0]);var a=document.createElement("canvas");a.className=e,a.style.width="100%",a.style.height="100%";var n=document.getElementById(u).appendChild(a);n!=null&&pJSDom.push(new fe(u,i))};window.particlesJS.load=function(u,i,l){var e=new XMLHttpRequest;e.open("GET",i),e.onreadystatechange=function(t){if(e.readyState==4)if(e.status==200){var a=JSON.parse(t.currentTarget.response);window.particlesJS(u,a),l&&l()}else console.log("Error pJS - XMLHttpRequest status: "+e.status),console.log("Error pJS - File config not found")},e.send()};const pe={class:"AboutViewContainer"},ye={class:"AboutView"},be={class:"Features",id:"features"},he={class:"FeatureCardsContainer"},ge={__name:"AboutView",setup(u){const i=[ve],l=[{icon:"fa-solid fa-location-dot",title:"Vast Open World",description:"Explore the diverse and breathtaking landscapes of Teyvat, from lush forests to snow-capped mountains.",background:"FeatureCard-World",url:"https://act.hoyolab.com/ys/app/interactive-map/index.html"},{icon:"fa-solid fa-bolt",title:"Elemental Combat",description:"Master the seven elements and engage in strategic, fast-paced battles against formidable foes.",background:"FeatureCard-Combat",url:"/"},{icon:"fa-solid fa-user-group",title:"Unique Characters",description:"Collect and play as a diverse cast of characters, each with their own elemental powers and backstories.",background:"FeatureCard-Characters",url:"/"}];return ee(()=>{window.particlesJS("features",{particles:{number:{value:300,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:1,size_min:.3,sync:!1}},line_linked:{enable:!0,distance:25,color:"#ffffff",opacity:.3,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:70,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}),te(()=>{window.pJSDom[0].pJS.fn.vendors.destroypJS(),window.pJSDom=[]}),(e,t)=>(C(),R("div",pe,[f("div",ye,[t[1]||(t[1]=f("section",{class:"Landing"},[f("h2",null,[ae(" Welcome to "),f("span",null,"Teyvat")]),f("p",null," Embark on an epic journey across the seven nations in Genshin Impact, a breathtaking open-world adventure. ")],-1)),f("section",be,[t[0]||(t[0]=f("h2",null,"Key Features",-1)),f("div",he,[D(X(re),{slidesPerView:"auto",spaceBetween:30,modules:i,autoplay:{delay:2500,disableOnInteraction:!1},class:"FeatureCardsSwiper",navigation:!0},{default:V(()=>[(C(),R(ie,null,ne(l,(a,n)=>D(X(se),{key:n},{default:V(()=>[D(de,{icon:a.icon,title:a.title,description:a.description,background:a.background,url:a.url},null,8,["icon","title","description","background","url"])]),_:2},1024)),64))]),_:1})])]),t[2]||(t[2]=f("section",{class:"Download"},[f("div",{class:"Content"},[f("div",{class:"Description"},[f("h2",null,"Join the Adventure"),f("p",null,"Genshin Impact is more than just a game - it's a living, breathing world waiting to be discovered. Team up with friends, solve puzzles, and uncover the secrets of Teyvat."),f("a",{target:"_blank",href:"https://hoyo.link/euHgFDAL"},[f("p",null,"Download Now")])]),f("div",{class:"Video"},[f("iframe",{src:"https://www.youtube.com/embed/L-IgLbEmtDM",title:"Avance de Natlan de Genshin Impact - Hacia la luz de las llamas candentes #Natlan #Preview #Teaser",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})])])],-1))])]))}},ke=$(ge,[["__scopeId","data-v-633cc126"]]);export{ke as default};
