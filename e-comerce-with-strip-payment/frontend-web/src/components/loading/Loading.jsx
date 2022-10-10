import './loading.css'
const Loading = ()=>{


  return(
    <div className="position-fixed w-100 h-100 text-center loading"
    style={{background:'#0008',color:"white",top:0, left:0,zIndex:50}}>
    <div class="sk-chase">
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
</div>

    </div>
  )
}

export default Loading
