export function getRandom<TypeItem>(list: TypeItem[], count: number): TypeItem[] {
    const result = new Set<TypeItem>();
    while (result.size < count && result.size < list.length) {
        const randIndex = Math.floor(Math.random() * list.length);
        result.add(list[randIndex]);
    }
    return Array.from(result) as TypeItem[];
}
//khi dung set, typescript không biết chính xác kiểu trả về kiểu dữ liệu, vì vậy cần ép kiểu dữ liệu trả về như trên