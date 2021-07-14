import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = ()=>{
    const [data, setData]= useState([]);

    const getCoviddata = async () =>{

        try{
            const res = await fetch('https:/api.covid19india.org/data.json');
           const actualData = await res.json()
           console.log(actualData.statewise[0]);
           setData(actualData.statewise[0])

        } catch(err)
        {
            console.log(err);
        }
    }

    useEffect(()=>{
        getCoviddata()

    }, []);
    useState(()=>{
        getCoviddata()

    }, []);
  return (
    <>

    <h1 className="hed">🔴Live</h1>
      <h2 className="subhed">COVID-19 CORONAVIRUS TRACKER</h2>
      <ul>  <div className="container">
          <div className="frist">
          <li className="card">
              <div className='card__main'>
                  <div className="card__inner">
                      <p className="card__name"><span>OUR</span>COUNTRY</p>
                      <p className="card__total card__small">INDIA</p>

                  </div>

              </div>
          </li>
          <li className="card">
              <div className='card__main'>
                  <div className="card__inner">
                      <p className="card__name"><span>Total</span>RECOVERED</p>
                      <p className="card__total card__small">{data.recovered}</p>

                  </div>

              </div>
          </li>
          <li className="card">
              <div className='card__main'>
                  <div className="card__inner">
                      <p className="card__name"><span>Total</span>CONFIRMED</p>
                      <p className="card__total card__small">{data.confirmed}</p>

                  </div>

              </div>
          </li>
          </div>
          <div className="second">
          <li className="card">
              <div className='card__main'>
                  <div className="card__inner">
                      <p className="card__name"><span>Total</span>ACTIVE</p>
                      <p className="card__total card__small">{data.active}</p>

                  </div>

              </div>
          </li>
          <li className="card">
              <div className='card__main'>
                  <div className="card__inner">
                      <p className="card__name"><span>Total</span>DEATHS</p>
                      <p className="card__total card__small">{data.deaths}</p>

                  </div>

              </div>
          </li>
          <li className="card">
              <div className='card__main'>
                  <div className="card__inner">
                      <p className="card__name"><span>Last</span>UPDATED</p>
                      <p className="card__total card__small">{data.lastupdatedtime}</p>

                  </div>

              </div>
          </li>
          </div>
          </div>

      </ul>
    </>
  )
}

export default Covid