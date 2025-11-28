export const metadata = {
    title: "reavol.com/bookfree",
    description: "reavol - trang web đọc sách"
}
export default function BookFreeLayout({ children, }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    )
}