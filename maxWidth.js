if(window.innerWidth>1100){
  console.log("win");
  let aside=document.createElement('aside');
  document.querySelector('main').appendChild(aside);
  aside.style.cssText=`
  display:flex;
  position:sticky;
  top:0;
  // background:;
  widht:100px;
  max-width:100%;
  height:200px;
  flex-direction:column;
  `;
  aside.innerHTML=`
  <p style="background:rgba(25,0,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/rat-mAscow/'>мАсковские крысы</a></p>
  <p style="background:rgba(0,100,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/mAscow/'>мАсква</a></p>
  <p style="background:rgba(0,0,25,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/moscow-will-lose-the-war/'>москва проиграет войну</a></p>
  <p style="background:rgba(100,100,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/justification/'>оправдание войне</a></p>
  <p style="background:rgba(0,0,100,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/muscovite/'>мАсковщина</a></p>
  `;
}
