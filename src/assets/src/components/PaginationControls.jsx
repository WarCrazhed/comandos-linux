export const PaginationControls = ({table}) => {

    const currentPageIndex = table.getState().pagination.pageIndex;
    const pageCount = table.getPageCount();

    return (
        <div className='flex flex-col lg:flex-row justify-between text-slate-800 dark:text-gray-300 text-xs my-4 gap-2'>
            <button
                className='hover:bg-neutral-100 dark:hover:bg-neutral-400/10 px-4 py-3 rounded-lg'
                onClick={() => table.setPageIndex(0)}><i className="fa-solid fa-backward-fast"></i> Primer Página</button>
            <button
                className='hover:bg-neutral-100 dark:hover:bg-neutral-400/10 px-4 py-3 rounded-lg'
                onClick={() => table.previousPage()}><i className="fa-solid fa-backward"></i> Página Anterior</button>
            <button
                className='hover:bg-neutral-100 dark:hover:bg-neutral-400/10 px-4 py-3 rounded-lg'
                onClick={() => currentPageIndex < pageCount -1 && table.nextPage()}>Página Siguiente <i className="fa-solid fa-forward"></i></button>
            <button
                className='hover:bg-neutral-100 dark:hover:bg-neutral-400/10 px-4 py-3 rounded-lg'
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Última Página <i className="fa-solid fa-forward-fast"></i></button>
            <div className="px-4 py-3">
                <label htmlFor="size-pagination">Ver: </label>
                <select
                    id='size-pagination'
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                    className='border p-1 rounded focus:outline-none focus:ring focus:ring-lime-500 dark:text-black'
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize} Registros
                        </option>
                    ))}
                </select>
            </div>
            <div className="px-4 py-3">
                <label htmlFor="go-to-page">Ir a la página: </label>
                <input
                    id='go-to-page'
                    type="number"
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        table.setPageIndex(page)
                    }}
                    className="border p-1 rounded w-16 focus:outline-none focus:ring focus:ring-lime-500 dark:text-black"
                    max={table.getPageCount()}
                    min={1}
                />
            </div>
            <span className="px-4 py-3 font-bold">
                <p>
                    Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount().toLocaleString()}
                </p>
            </span>
        </div>
    )
}
