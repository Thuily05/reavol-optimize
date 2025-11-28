RTK query: thư viện nằm trong hệ sinh thái Redux, quản lý việc gọi API và caching dễ dàng

Lý do RTK query xuất hiện: hạn chế việc lặp đi lặp lại trong quá trình fetch data.
Để fetch data trong React:
- Khai báo useEffect và gọi API trong đó
- Xử lý cleanup function để tránh việc gọi duplicate data
- Tracking trạng thái loading để hiển thị skeleton
- Quản lý thời gian cache khi user tương tác UI
-> Không khó nhưng nhiều, nếu nhiều component cần implement thì khá mệt
-> RTK query xuất hiện