import React, {useEffect, useState} from 'react';
import './PersonalDetails.scss';
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from 'react-router-dom';

const PersonalDetails = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const [countries, setCountries] = useState([]);
    const history = useHistory();
    const {path} = useRouteMatch();

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    const onSubmit = data => {
        history.push(`/membership/bankDetails`);
    };

    return (
        <div className="container">
             <form onSubmit={handleSubmit(onSubmit)}>
                 <div className="form-group row">
                     <div className="col-md-6">
                         <label htmlFor="">First Name</label>
                         <input ref={register({ required: true })} type="text" name="firstName" className="form-control"/>
                         {errors.firstName && <span className="text-danger">First Name is required</span>}
                     </div>
                     <div className="col-md-6">
                         <label htmlFor="">Last Name</label>
                         <input ref={register({ required: true })} type="text" name="lastName" className="form-control"/>
                         {errors.lastName && <span className="text-danger">Last Name is required</span>}
                     </div>
                 </div>
                 <div className="form-group row">
                     <div className="col-md-6">
                         <label htmlFor="">Email</label>
                         <input ref={register({ required: true })} type="email" name="email" className="form-control"/>
                         {errors.email && <span className="text-danger">Email is required</span>}
                     </div>
                     <div className="col-md-6">
                         <label htmlFor="">Mobile</label>
                         <input ref={register({ required: true })} type="text" name="mobile" className="form-control"/>
                         {errors.mobile && <span className="text-danger">Mobile is required</span>}
                     </div>
                 </div>
                 <div className="form-group row">
                     <div className="col-md-6">
                         <label htmlFor="">Date of Birth</label>
                         <input ref={register({ required: true })} type="date" name="dateOfBirth" className="form-control"/>
                         {errors.dateOfBirth && <span className="text-danger">Date of Birth is required</span>}
                     </div>
                     <div className="col-md-6">
                         <label htmlFor="">Gender</label>
                         <select ref={register({ required: true })} name="gender" className="form-control">
                             <option value="Male">Male</option>
                             <option value="Female">Female</option>
                         </select>
                        
                     </div>
                 </div>
                 <div className="form-group row">
                     <div className="col-md-6">
                         <label htmlFor="">Address 1</label>
                         <input ref={register({ required: true })} type="text" name="address" className="form-control"/>
                         {errors.address && <span className="text-danger">Address 1 is required</span>}
                     </div>
                     <div className="col-md-6">
                         <label htmlFor="">Country/Region</label>
                         <select ref={register({ required: true })} name="country" className="form-control">
                             {
                                 countries.map(country => <option key={country.name} value={country.name}>{country.name}</option> )
                             }                             
                         </select>
                     </div>
                 </div>
                 <div className="form-group row">
                     <div className="col-md-6">
                         <label htmlFor="">City</label>
                         <input ref={register({ required: true })} type="text" name="city" className="form-control"/>
                         {errors.city && <span className="text-danger">This field is required</span>}
                     </div>
                     <div className="col-md-6">
                         <label htmlFor="">Postcode</label>
                         <input ref={register({ required: true })} type="text" name="postCode" className="form-control"/>
                         {errors.postCode && <span className="text-danger">This field is required</span>}
                     </div>
                 </div>
                 <div className="form-group row text-right">
                     <div className="col-12">
                        <input className="main-btn" type="submit" value="Next" />
                     </div>
                 </div>                
            </form>
        </div>
    );
};

export default PersonalDetails;