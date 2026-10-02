export default function Page() {
  return (
    <main style={{background:'#0a0a0a', color:'white', minHeight:'100vh', padding:'40px 20px'}}>
      <div style={{maxWidth:'900px', margin:'0 auto'}}>
        <a href="/" style={{color:'#00ff88', fontSize:'13px', textDecoration:'none'}}>← Voltar ao MENU</a>
        <h1 style={{fontSize:'32px', marginTop:'20px', color:'#00ff88'}}>Adendos</h1>
        <div style={{marginTop:'24px', border:'1px solid #222', background:'#111', padding:'24px', borderRadius:'12px', lineHeight:'1.6'}}>
          <p style={{opacity:0.6}}>Cole aqui seu conteúdo do Notion de Adendos.</p>
          <p style={{marginTop:'16px'}}>Exemplo: Substitua esse texto pelo conteúdo real que você já tem no Notion.</p>
        </div>
      </div>
    </main>
  )
}
