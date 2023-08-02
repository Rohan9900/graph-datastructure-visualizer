import React,{useRef,useEffect}from"react";function GraphVisualizer({canvasRef:a,data:p,isChange:e,startingPoint:i,textColor:v,mainHeight:t,mainWidth:l,nodeShape:R,gapBetweenNodes:w=1.5}){a=a||useRef(null),useEffect(()=>{var e=a.current,t=e.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);y({},i,100,200,t,{},{},e)},[e]);const y=(a,i,l,r,n,h,f,c)=>{if(!a[i]){var e=i,o=n.measureText(e).width+20,s=Math.max(o,30)/2,d=((l=l<s?s:l)>c.width-s&&(l=c.width-s),(r=r<s?s:r)>c.height-s&&(r=c.height-s),n.clearRect(l-s,r-s,2*s,2*s),"circle"===R?(n.beginPath(),n.arc(l,r,s,0,2*Math.PI),n.fillStyle="#ffffff",n.fill(),n.stroke()):(n.fillStyle="#e0e0e0",n.fillRect(l-o/2,r-15,o,30)),n.fillStyle=v,n.textAlign="center",n.textBaseline="middle",n.fillText(e,l,r),h[i]={x:l,y:r},a[i]=!0,p[i]),g=d.length;let t=25*-(g-1)*w;for(let e=0;e<g;e++){var u=d[e],m=l+100*w,x=r+t;f[i+"-"+u]||f[u+"-"+i]||(n.beginPath(),n.moveTo(l+o/2+1,r),n.lineTo(h[u]?h[u].x-o/2:m,h[u]?h[u].y:x),n.stroke(),f[i+"-"+u]=!0),y(a,u,m,x,n,h,f,c),t+=50*w}}};return React.createElement("canvas",{ref:a,width:l,height:t})}GraphVisualizer.defaultProps={mainHeight:400,mainWidth:500,textColor:"black",data:{},nodeShape:"rectangle"};export{GraphVisualizer};
