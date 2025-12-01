
export default function BlogLayout({ children, }: { children: React.ReactNode }) {
    return (
        <main>{children}</main>
    )
}
export const metadata = {
    title: "reavol.com/blog",
    description: "reavol - trang web đọc sách"
}