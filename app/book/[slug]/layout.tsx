export const metadata = {
    title: "reavol.com/book",
    description: "reavol - trang web đọc sách"
}
export default function BookLayout({ children, }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    )
}