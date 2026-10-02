export default function Home() {
  const card: any = {border:'1px solid #222', padding:'18px', borderRadius:'12px', background:'#111', color:'#00ff88', textDecoration:'none', fontSize:'14px', fontWeight:600, display:'block'};
  return (
    <main style={{background:'#0a0a0a', color:'white', minHeight:'100vh'}}>
      <div style={{background:'linear-gradient(90deg, #001a0e 0%, #000 50%, #001a0e 100%)', borderBottom:'2px solid #00ff88', padding:'48px 20px', textAlign:'center'}}>
        <p style={{letterSpacing:'6px', fontSize:'11px', opacity:0.7, marginBottom:'12px'}}>MERCADO MILIONÁRIO</p>
        <h1 style={{fontSize:'56px', fontWeight:900, color:'#00ff88', textShadow:'0 0 30px rgba(0,255,136,0.5)', margin:0}}>INFLUENCER IA</h1>
        <p style={{opacity:0.6, marginTop:'12px'}}>Base de conhecimento - versão Notion na Vercel</p>
      </div>
      <div style={{padding:'32px 20px', maxWidth:'1000px', margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'14px'}}>
          <a href="/entenda-o-mercado" style={card}>📄 Entenda o mercado</a>
          <a href="/cronograma-7-dias" style={card}>📅 Cronograma 7 dias</a>
          <a href="/prompts" style={card}>💬 Prompts</a>
          <a href="/tutoriais" style={card}>🎬 Tutoriais</a>
          <a href="/ferramentas" style={card}>🛠️ Ferramentas</a>
          <a href="/sites" style={card}>🌐 Sites</a>
          <a href="/dicas-extras" style={card}>💡 Dicas Extras</a>
          <a href="/adendos" style={card}>📎 Adendos</a>
        </div>
      </div>
    </main>
  )
}
