
const items = ["Γυναικεία","Ανδρικά","Αξεσουάρ"]

export default function Services(){
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,padding:20}}>
      {items.map(i=>(
        <div key={i} style={{padding:20,background:'#fff',borderRadius:12}}>
          {i}
        </div>
      ))}
    </div>
  )
}
