import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Enrollment from '../pages/Enrollment';
import EnrollmentRegister from '../pages/Enrollment/Register';
import HelpOrder from '../pages/HelpOrder';
import HelpOrderAnswer from '../pages/HelpOrder/Answer';
import Plan from '../pages/Plan';
import PlanRegister from '../pages/Plan/Register';
import Student from '../pages/Student';
import StudentRegister from '../pages/Student/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/enrollment" component={Enrollment} isPrivate />
      <Route
        path="/enrollment-register"
        component={EnrollmentRegister}
        isPrivate
      />
      <Route path="/helpOrder" component={HelpOrder} isPrivate />
      <Route path="/helpOrder-answer" component={HelpOrderAnswer} isPrivate />
      <Route path="/plan" component={Plan} isPrivate />
      <Route path="/plan-register" component={PlanRegister} isPrivate />
      <Route path="/student" component={Student} isPrivate />
      <Route path="/student-register" component={StudentRegister} isPrivate />
    </Switch>
  );
}
