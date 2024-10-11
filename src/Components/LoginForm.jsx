import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

const LoginForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                dispatch(login(values)); // Simulate login
            }}
        >
            <Form>
                <div className="form-group">
                    <label>Email</label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <Field name="password" type="password" className="form-control" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </Form>
        </Formik>
    );
};

export default LoginForm;
