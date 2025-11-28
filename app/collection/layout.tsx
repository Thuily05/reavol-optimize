export default function CollectionLayout({ children, }: {
    children: React.ReactNode
}) {
    return (

        <main>
            {children}
        </main>
    )
}
export const metadata = {
    title: "reavol.com/collection",
    description: "reavol - trang web đọc sách"
}