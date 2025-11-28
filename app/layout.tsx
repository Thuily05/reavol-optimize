/*Layout la 1 UI được share giữa các pages khác nhau. Khi điều hướng, layout sẽ giữ nguyên trạng thái,
giữ nguyên tính tương tác và không được re-render 
VD: để tạo 1 layout that accepts your index pages as a child, add a layout file bên trong dir app
Bạn có thể define a layout by default exporting a React component from a layout file 
The component should accept a children prop which can be a page or another layout
Ex: add a layout.tsx in app dir*/
//layout của app sẽ bọc ngoài các layout con
'use client'
import "./globals.css";
import Footer from '@/component/root/footer'
import SideBar from '@/component/root/sidebar'
import Header from '@/component/root/header'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from '@/context-local/rtkData'

// export const metadata = {
//   title: "REAVOL",
//   description: "reavol - trang web đọc sách"
// }

export default function DashboardLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <ApiProvider api={api}>
      <html lang='en'>
        <head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"></link>
        </head>
        <body>
          {/*Layout UI */}
          {/*Place children where you want to render a page or nested layout */}
          <div className='flex flex-row'>
            <SideBar />
            <div className="flex flex-1 flex-col sm:p-5 lg:p-7.5 2xl:p-10">
              <Header />
              <main>{children}</main>
            </div>
          </div>
          <Footer />
        </body>
      </html>
    </ApiProvider>
  )
}
//the layout above được gọi là root layout vì nó được defined at the root of the app directory.
//Root layout is required và must contain html and body tags