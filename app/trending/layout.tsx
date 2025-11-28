export default function TrendingLayout({ children, }: {
    children: React.ReactNode
}) {
    return (
        <main>{children}</main>
    )
}

export const metadata = {
    title: "reavol.com/trending",
    description: "reavol - trang web đọc sách"
}