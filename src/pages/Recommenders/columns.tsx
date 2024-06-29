

export type Recommend = {
    id: string
    school: string
    status: 'Not Start' | 'In Progress' | 'Completed'
    link: string
}

export const columns: ColumnDef<Recommend>[] = [
    {
        accessorKey: 'status',
        header: 'status'
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'school',
        
    }
]