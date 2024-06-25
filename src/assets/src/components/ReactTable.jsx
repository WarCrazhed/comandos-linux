import { useState } from 'react'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table'
import { PaginationControls } from './PaginationControls'

export const ReactTable = ({ data, columns }) => {

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            globalFilter: filtering,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    })

    return (
        <div className='grid grid-cols-1 w-full'>
            <label htmlFor="search" className="block text-slate-800 dark:text-white font-bold text-sm">
                Buscar <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
                id='search'
                className="block w-full rounded-lg shadow-md p-2 bg-slate-50 mb-4 focus:outline-none focus:ring focus:ring-lime-500"
                type="text"
                value={filtering}
                placeholder='Búsqueda General'
                onChange={e => setFiltering(e.target.value)}
            />
            <div className="overflow-x-auto overflow-y-auto rounded-lg shadow-md mb-4">
                <table className='table-auto min-w-full text-slate-800 dark:text-white bg-white dark:bg-slate-900'>
                    <thead className='bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-white'>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            className='text-left px-5 py-3'
                                            onClick={header.column.getToggleSortingHandler()}
                                        >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {
                                                {
                                                    asc: (<i className="fa-solid fa-arrow-up ml-2"></i>), desc: (<i className="fa-solid fa-arrow-down ml-2"></i>)
                                                }[header.column.getIsSorted() ?? null]
                                            }
                                        </th>
                                    ))
                                }
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.length > 0 ? (
                            <>
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className='hover:bg-neutral-100 dark:hover:bg-neutral-500/10'>
                                        {
                                            row.getVisibleCells().map(cell => (
                                                <td key={cell.id} className='text-left px-5 py-5 border-b border-slate-100 dark:border-slate-800'>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))}
                            </>
                        ) : (
                            (<tr>
                                <td className='text-center py-6' colSpan={table.getHeaderGroups()[0].headers.length}>Sin Resultados.</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div>
            <PaginationControls
                table={table}
            />
        </div>
    )
}
