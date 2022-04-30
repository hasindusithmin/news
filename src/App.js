
import './App.css';

import { useEffect, useState } from 'react';
function App() {

  const [first, setFirst] = useState(null)
  const [last, setLast] = useState(null)
  const [uname, setUname] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loginAt, setLoginAt] = useState(null)
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem('hash')) setAuth(true)
    setFirst(sessionStorage.getItem('firstname'))
    setLast(sessionStorage.getItem('lastname'))
    const username = sessionStorage.getItem('username')!==''?sessionStorage.getItem('username'):'add username to telegram'
    setUname(username)
    setProfile(sessionStorage.getItem('profile'))
    setLoginAt(new Date(parseInt(sessionStorage.getItem('loginat'))*1000).toLocaleString())
  }, [])


  return (
    <>
      {auth && 
      <div className="container bootstrap snippets bootdey">
        <div className="panel-body inf-content">
          <div className="row">
            <div className="col-md-4">
              <img alt="Add Profile Image to telegram" style={{ widows: '600px' }} title="" className="img-circle img-thumbnail isTooltip" src={profile !== '' ? profile : ''} data-original-title="Usuario" />
              <ul title="Ratings" className="list-inline ratings text-center">
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
                <li><a href="#"><span className="glyphicon glyphicon-star"></span></a></li>
              </ul>
            </div>
            <div className="col-md-6">
              <strong>Information</strong><br />
              <div className="table-responsive">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-user  text-primary"></span>
                          Name
                        </strong>
                      </td>
                      <td className="text-primary">
                        {first}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-cloud text-primary"></span>
                          Lastname
                        </strong>
                      </td>
                      <td className="text-primary">
                        {last}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-bookmark text-primary"></span>
                          Username
                        </strong>
                      </td>
                      <td className="text-primary">
                        {uname}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          LoginAt
                        </strong>
                      </td>
                      <td className="text-primary">
                        {loginAt}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>}
      {!auth && <div style={{margin:'20px',color:'red'}}>please login via telegram</div>}
    </>
  );
}

export default App;
