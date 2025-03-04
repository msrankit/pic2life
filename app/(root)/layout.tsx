
import Mobilenav from '@/components/shared/Mobilenav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <main className="root">
        <Sidebar/>
       
       <Mobilenav/>
        <div className="root">
            <div className="wrapper">
                {children}
            </div>
        </div>
      </main>
  )
}

export default layout