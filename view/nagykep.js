export class NagykepView{
    #kep;
    constructor(kep, szuloelem){
        this.#kep=kep;
        this.szuloelem=szuloelem;
        this.#htmlOszerak()
        this.balgombelem=$(".ball")
        this.jobbgombelem=$(".jobb")
        this.Nagykephelye=$("#NAGYKEPHELYE")
        this.balgombelem.on("click",()=>{
            this.#sajatesemenykezelo("bal")
        })
        this.jobbgombelem.on("click",()=>{
            this.#sajatesemenykezelo("jobb")
        })
    }
    Nagykepcsere(kep){
        this.Nagykephelye.attr("src",kep)
    }
    #sajatesemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem) 
    }
    #htmlOszerak(){
        let txt="<button class='ball'>bal</button>"
        txt+=`
        <div class="card">
    <div class="card-header">Header</div>
    <div class="card-body"><img id="NAGYKEPHELYE" src="${this.#kep}" class="rounded-circle" alt="Cinque Terre"></div>
    <div class="card-footer">LEIRAS</div>
   
        </div>`
     txt+="<button class='jobb'>jobb</button>"
        this.szuloelem.html(txt);
    }
}