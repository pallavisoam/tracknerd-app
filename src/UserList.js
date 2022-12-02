import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { database } from './firebase'
import GoogleMap from './GoogleMap'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const UserList = () => {
    const [ vehiclesArr, setVehiclesArr ] = useState([])
    const [ filteredData, setFilteredData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ searchValue, setSearchValue ] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if (loading) {
            getApiVehicleData()
        }
    }, [])

    const getVehicleLocation = (vehicleId, vehicleRegNo) => {
        database.ref(`${vehicleId}-${vehicleRegNo}/location`).on('value', (dataSnapshot) => {
            console.log('location data is', dataSnapshot.val())
        })
    }

    const getApiVehicleData = () => {
        setLoading(true)
        axios({
            method: 'get',
            url: `https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                console.log('list of vehicles is', res, res.data)
                setVehiclesArr(res.data.data[0].vehicles)
                setFilteredData(res.data.data[0].vehicles)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(true)
                console.log(err)
            })
    }

    const handleFilter = (searchValue) => {
        if (searchValue === undefined || searchValue === null || searchValue === '') return setFilteredData(vehiclesArr)
        return setFilteredData(
            vehiclesArr.filter((entry) => {
                const regNo = searchValue.toLowerCase()
                const registrationNumber = `${entry.registrationNumber}`.toLowerCase().split(' ').join('')
                return registrationNumber.includes(regNo)
            })
        )
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '80%',
                    alignContent: 'center',
                    alignItems: 'center',
                    margin: '0rem auto'
                }}
            >
                <p
                    style={{
                        color: '#780206',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '2rem'
                    }}
                >
                    User list
                </p>
                <Button
                    onClick={handleLogout}
                    style={{
                        color: '#061161',
                        width: '15%',
                        padding: '0.5rem 0.5rem',
                        textAlign: 'center',
                        font: '600 1rem "SemiBold"'
                    }}
                >
                    Logout
                </Button>
            </div>
            <div
                style={{
                    width: '80%',
                    margin: '0rem auto'
                }}
            >
                <input
                    type="text"
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        handleFilter(e.target.value)
                    }}
                    value={searchValue}
                    placeholder="Search by registration number..."
                    style={{
                        width: '50%',
                        border: '2px solid #acacb6',
                        outline: 'none',
                        margin: '0rem auto',
                        borderRadius: '5px',
                        padding: '0.5rem 0.5rem'
                    }}
                />
            </div>
            {loading ? (
                <p>Getting list of vehicles</p>
            ) : (
                <div>
                    <ul style={{ width: '80%', margin: '1rem auto' }}>
                        {filteredData.map((vehicle) => (
                            <li
                                onClick={() => getVehicleLocation(vehicle.id, vehicle.registrationNumber)}
                                key={vehicle.id}
                            >
                                {vehicle.registrationNumber}({vehicle.type})
                            </li>
                        ))}
                    </ul>
                    <GoogleMap />
                </div>
            )}
        </div>
    )
}

export default UserList
