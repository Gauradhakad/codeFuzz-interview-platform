import React from 'react'
import StreamClientProvider from "@/components/providers/StreamClientProvider"


const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <StreamClientProvider>{children}</StreamClientProvider>
    </div>
  );
}

export default layout
