export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body style={{margin:0, fontFamily:'Inter, system-ui, sans-serif', background:'#0a0a0a'}}>{children}</body>
    </html>
  )
}
