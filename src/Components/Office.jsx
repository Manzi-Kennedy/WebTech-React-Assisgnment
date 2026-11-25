import { useEffect, useState } from 'react'
import axios from 'axios'
import './Office.css'

const OFFICES_URL = 'http://localhost:8082/api/offices'

function Office() {
  const [offices, setOffices] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadOffices() {
      const response = await axios.get(`${OFFICES_URL}/all`)
      if (response.status === 200) {
        setOffices(response.data)
      } else {
        alert('Failed to load offices')
      }
      setLoading(false)
    }

    loadOffices()
  }, [])

  const query = searchTerm.trim().toLowerCase()
  const filteredOffices = offices.filter((office) =>
    !query
    || office.name?.toLowerCase().includes(query)
    || String(office.officeNumber ?? '').includes(query),
  )

  async function deleteOffice(office) {
    const confirmed = window.confirm(
      `Delete ${office.name || 'this office'} (No. ${office.officeNumber})?`,
    )
    if (!confirmed) return

    const response = await axios.delete(`${OFFICES_URL}/delete/${office.id}`)
    if (response.status === 200) {
      setOffices((currentOffices) =>
        currentOffices.filter((currentOffice) => currentOffice.id !== office.id),
      )
      alert(response.data)
    } else {
      alert('Failed to delete the office')
    }
  }

  return (

    
    <section aria-labelledby="offices-title">
      <h2 id="offices-title">Offices</h2>
      <p>{offices.length} {offices.length === 1 ? 'office' : 'offices'}</p>

      <div>
        <label htmlFor="office-search">Search by office name or number</label>
        <div>
          <input
            id="office-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by office name or number"
          />
        </div>

        {loading ? (
          <p>Loading offices...</p>
        ) : (
          <table className="offices-table">
            <thead>
              <tr>
                <th scope="col">Office name</th>
                <th scope="col">Office number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOffices.map((office) => (
                <tr key={office.id}>
                  <td>{office.name || '—'}</td>
                  <td>{office.officeNumber ?? '—'}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteOffice(office)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      disabled
                      title="Update will be available in the next class"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
              {filteredOffices.length === 0 && (
                <tr>
                  <td colSpan="3">
                    {offices.length === 0
                      ? 'No offices are available.'
                      : 'No offices match your search.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default Office
