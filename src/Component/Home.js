import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    RefressPage()

  }, [])

  const RefressPage = () => {
    axios.get("https://648b509417f1536d65eac987.mockapi.io/crud")
      .then((res) => {
        setData(res.data)
        setLoading(true)
      })
      .catch(err => console.log(err))
  }


  const handelDelete = (id) => {

    if (window.confirm("Are you sure delete the data?")) {
      axios.delete("https://648b509417f1536d65eac987.mockapi.io/crud/" + id)
        .then(resp => {
          alert("data is Deleted")
          navigate('/')
          RefressPage()
        })
        .catch(err => console.log(err))
    }
  }

  const Loading = () => {
    return (
      <h1 style={{ color: "red" }}>Loading...</h1>
    )
  }

  const Show = () => {
    return (
      <>
        <h1>Home page</h1>
        <Link to={'/Create'}> <button className="btn btn-success my-2"> Create New Data</button> </Link>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Read</th>
            </tr>
          </thead>
          <tbody>

            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ color: "red" }}>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link to={`/Update/${item.id}`}><button className='btn btn-primary'>Update</button>
                    </Link>
                  </td>
                  <td><Link>
                    <button className='btn btn-danger' onClick={(e) => handelDelete(item.id)}>Delete</button></Link>
                  </td>

                  <td>
                    <Link to={`/Read/${item.id}`}><button className='btn btn-info'>Read</button>
                    </Link>
                  </td>
                </tr>

              )
            })}

          </tbody>

        </table>



      </>
    )
  }


  return (
    <div>
      {loading ? <Show /> : <Loading />}

      <div className="container" id='ShowBox'>
        <div className="alertBox">
          <h1><button onClick={handelDelete}>Yes</button></h1>
          <h1><button onClick={handelDelete}>No</button></h1>
        </div>
      </div>
    </div>

  )


}

export default Home
