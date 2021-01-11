import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import asyncComponent from './asyncComponent'
import Home   from '$pages/Home/'
import List   from '$pages/List/'
import UserCenter  from '$pages/UserCenter/'
import Demo   from '$pages/Demo/'
import NoMatch from './404'
import Clock from '../clock';

function load(component) {
  return import(`$pages/${component}/`)
}

const Login = asyncComponent(() => load('Login'))
const City  = asyncComponent(() => load('City'))
const Detail  = asyncComponent(() => load('Detail'))
const Search  = asyncComponent(() => load('Search'))

export class RouterMap extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login/:refer?" component={Login} />
            <Route path="/city" component={City} />
            <Route path="/clock" component={Clock} />
            <Route path="/user" component={UserCenter} />
            <Route path="/list" component={List} />
            <Route exact path="/demo" component={Demo} />
            <Route path="/search/:category/:keyword?" component={Search} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
