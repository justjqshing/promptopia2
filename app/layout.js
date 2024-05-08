
import '@styles/global.css'
import Nav from '@components/Nav.jsx'
import Provider from '@components/Provider.jsx'
export const metadata = { 
    title: 'promptopia',
    description: 'Discover and Share AI-generated prompts for your creative projects.'
}
const RootLayout = ( {children} ) => {
  return (
   <html lang="em">
    <body>
        <Provider>
        <div className="main">
            <div className="gradient"/>
        </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>

        </Provider>
    </body>

   </html>
  )
}

export default RootLayout