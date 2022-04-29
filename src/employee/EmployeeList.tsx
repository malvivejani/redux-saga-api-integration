import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { employeeRequest } from '../redux/actions/employeeAction';
import './style.css';

function EmployeeList() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employeeData = useSelector((state: any) => state.employee);
    console.log("employeeData", employeeData);

    useEffect(() => {
        dispatch(employeeRequest());
    }, []);

    const addEmployeeHandler = () => {
        navigate('/add-employee');
    };

    return (
        <>
            <div style={{ paddingLeft: 250 }}>
                <div>EmployeeList</div>
                <button style={{ marginLeft: 10 }} onClick={addEmployeeHandler}>Add Employee</button>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>salary</th>
                        <th>Actions</th>
                    </tr>
                    {
                        employeeData.employee && employeeData.employee?.length > 0 && employeeData.employee?.map((item: any, index: number) => {
                            return (
                                <tr>
                                    <td>{item?.id}</td>
                                    <td>{item?.firstName}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.mobile}</td>
                                    <td>{item?.salary}</td>
                                    <td>
                                        <button onClick={() => navigate('/edit-employee', { state: item })}>Edit Emp</button>
                                        <button style={{ marginLeft: 10 }} onClick={() => navigate('/add-payroll', { state: item?.id })}>Add Payroll</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default EmployeeList;