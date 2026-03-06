import { useDispatch, useSelector } from "react-redux"
import SearchBtn from "../../components/SearchBtn"
import { dashboardData } from "../../data/index"
import Pagination from "../../components/Pagination"
import { FaFileDownload } from "react-icons/fa"
import { downloadPDF, downloadExcel } from "../../utils/index"
import BtnActions from "../../components/btnActions"

const TableUser = () => {
  const searchTerm = useSelector((state) => state.table.searchTerm)
  const rowsPerPage = useSelector((state) => state.table.rowsPerPage) // 2 totaluser 5 so diplay 2 and disapear 3
  const currentPage = useSelector((state) => state.table.currentPage) // 1

  const filteredUsers = dashboardData.filter((user) =>
    `${user.name} ${user.email} ${user.phone}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  const startIndex = (currentPage - 1) * rowsPerPage // (1 - 1) * 2 => 0
  const endIndex = startIndex + rowsPerPage // 0 + 2 => 2

  const currentUsers = filteredUsers.slice(startIndex, endIndex) // [1,2,3,4,5] => [1,2]

  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage)

  return (
    <div className="bg-card p-6 rounded-xl shadow space-y-4">
      {/* Search */}
      <SearchBtn data={dashboardData} />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left rounded-sm shadow-lg bg-hover border border-borderColor">
          <thead className="bg-background text-primary border-b borderColor">
            <tr>
              <th className="py-3 px-4 whitespace-nowrap">Name</th>
              <th className="px-4 whitespace-nowrap">Email</th>
              <th className="px-4 whitespace-nowrap">Phone</th>
              <th className="px-4 whitespace-nowrap">Sales</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-borderColor text-textSecondary font-normal"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="px-4">{user.email}</td>
                <td className="px-4">{user.phone}</td>
                <td className="px-4">${user.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <BtnActions filteredUsers={filteredUsers} />
      </div>

      {/* Pagination */}
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  )
}

export default TableUser
